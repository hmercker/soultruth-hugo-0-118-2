// netlify/functions/counter.js
export default async () => {
  const kv = await Deno.openKv();          // open Netlify's persistent KV store
  const KEY = ["visitor_count"];           // a unique key for this counter

  // read current value (or default to 2950)
  let { value } = await kv.get(KEY);
  if (typeof value !== "number") value = 2950;

  // increment and write back
  value++;
  await kv.set(KEY, value);

  return new Response(
    JSON.stringify({ count: value }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    },
  );
};
