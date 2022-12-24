import { Client } from "pg";

const client = new Client(process.env.NEXT_PUBLIC_COCKROACH_ORDERING);
(async () => {
  await client.connect();
  try {
    const results = await client.query("DELETE FROM orders");
    console.log(results)
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();