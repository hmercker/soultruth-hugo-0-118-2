export default async (request, context) => {
  const kv = context.env.KV;               // KV store provided by Netlify
  const key = "visitor_count";

  let value = (await kv.get(key)) ?? 2950; // start value
  value++;
  await kv.set(key, value);

  return new Response(JSON.stringify({ count: value }), {
    headers: { "content-type": "application/json" },
  });
};

