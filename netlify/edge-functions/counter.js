export default async (request, context) => {
  const kv = await context.env.KV; // Edge function KV binding
  const KEY = ["visitor_count"];

  // read or initialize
  let { value } = await kv.get(KEY);
  if (typeof value !== "number") value = 2950;

  value++;
  await kv.set(KEY, value);

  return new Response(JSON.stringify({ count: value }), {
    headers: { "Content-Type": "application/json" },
  });
};

