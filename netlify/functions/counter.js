// netlify/functions/counter.js
import fs from "fs";
const path = "./counter.json";

export async function handler() {
  let data = { count: 0 };
  try {
    if (fs.existsSync(path)) data = JSON.parse(fs.readFileSync(path));
  } catch (e) {}

  data.count++;
  fs.writeFileSync(path, JSON.stringify(data));

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}
