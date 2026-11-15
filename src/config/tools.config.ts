// Tools & automations. Add one object per tool; text fields take both languages.
// status: "done" (usable), "building" (in progress)
export type Tool = {
  name: string;
  description: { vi: string; en: string };
  status: "done" | "building";
  kind?: "app" | "guide" | "wp" | "private"; // app = runs in the browser (default), guide = docs, wp = public WordPress kit repo, private = private WordPress kit repo
  tags: string[];
  links: { name: string; url: string }[]; // e.g. { name: "GitHub", url: "https://github.com/..." }
  premium?: boolean; // paid plugin (WordPress tab groups it separately)
  image?: string; // optional screenshot in /public, e.g. "/tools/wp-auto-poster.webp"
};


// Add your own tools / resources here (see HUONG-DAN.md)
export const toolsConfig: Tool[] = [];
