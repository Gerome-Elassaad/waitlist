import React from "react";
import { AwardBadge } from "@/components/ui/award-badge";

const demoLink = "https://waitlist.codinit.dev";

export const ProductHuntBadge = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="launching soon" link={demoLink} />
    </div>
  );
};

export const ProductOfTheDay = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="product-of-the-day" place={1} link={demoLink} />
    </div>
  );
};

export const ProductOfTheMonth = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="product-of-the-month" place={2} link={demoLink} />
    </div>
  );
};

export const ProductOfTheWeek = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AwardBadge type="product-of-the-week" place={3} link={demoLink} />
    </div>
  );
};