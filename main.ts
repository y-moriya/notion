import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { datetime } from "https://deno.land/x/ptera@v1.0.2/mod.ts";

// Initializing a client
const notion = new Client({
  auth: Deno.env.get("NOTION_TOKEN"),
});

const wday = [
  { en: 'Mon', ja: '月'},
  { en: 'Tue', ja: '火'},
  { en: 'Wed', ja: '水'},
  { en: 'Thu', ja: '木'},
  { en: 'Fri', ja: '金'},
  { en: 'Sat', ja: '土'},
  { en: 'Sun', ja: '日'}
]

datetime().setLocale('ja');
let d = datetime().format('YYYY/MM/dd（www）');
wday.forEach(w => {
  if (d.match(w.en)) {
    d = d.replace(w.en, w.ja);
  }
})

await notion.pages.create({
  parent: {
    database_id: 'a8ee6f68d13246e699dcee0a2d6a692d'
  },
  properties: {
    title: {
      title: [
        {
          text: {
            content: d
          }
        }
      ]
    }
  }
});