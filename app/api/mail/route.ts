import { render } from "@react-email/render";

import WelcomeTemplate from "../../../emails";

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { limit } from "@/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest, _response: NextResponse) {
  const ip = request.ip ?? "127.0.0.1";

  const result = await limit(ip);

  if (!result.success) {
    return Response.json(
      {
        error: "Too many requests!!",
      },
      {
        status: 429,
      },
    );
  }

  const { email, firstname } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Gerome<team@codinit.dev>",
    to: [email],
    subject: "Thankyou for wailisting for CodinIT.dev",
    reply_to: "gerome.e24@gmail.com",
    html:  await render(WelcomeTemplate({ userFirstname: firstname })),
  });

  // const { data, error } = { data: true, error: null }

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    return NextResponse.json({ message: "Failed to send email" });
  }

  return NextResponse.json({ message: "Email sent successfully" });
}
