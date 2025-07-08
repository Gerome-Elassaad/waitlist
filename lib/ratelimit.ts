import { Redis } from '@upstash/redis'

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error("Missing Upstash Redis credentials. Please check your .env.local file.");
}

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const RATE_LIMIT_PREFIX = "rate_limit";
const RATE_LIMIT_WINDOW_S = 60;
const RATE_LIMIT_MAX_REQUESTS = 2;

export async function limit(identifier: string) {
  const key = `${RATE_LIMIT_PREFIX}:${identifier}`;

  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, RATE_LIMIT_WINDOW_S);
  }

  const success = current <= RATE_LIMIT_MAX_REQUESTS;

  return { success };
}
