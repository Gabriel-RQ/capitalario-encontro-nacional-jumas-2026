import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: KV_REST_API_URL || "",
  token: KV_REST_API_TOKEN || "",
});

export async function getCurrentCounter(): Promise<number> {
  const result = await redis.get("current");
  return result as number;
}

export async function getMaxCounter(): Promise<number> {
  const result = await redis.get("max");
  return result as number;
}

export async function incrementCurrentCounter(by: number) {
  const result = await redis.incrby("current", by);
  return result;
}
