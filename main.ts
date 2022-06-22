import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

// Initializing a client
const notion = new Client({
  auth: Deno.env.get("NOTION_TOKEN"),
});

const listUsersResponse = await notion.users.list({});
console.log(listUsersResponse);