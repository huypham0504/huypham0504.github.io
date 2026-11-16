// Export the web CV (/cv and /en/cv) to PDF with headless Chrome.
// Run after `yarn build`:  node scripts/cv-pdf.mjs
import { createServer } from "node:http";
import { readFile, mkdir, mkdtemp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { extname, join, resolve } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const run = promisify(execFile);

const OUT = "out";
const CHROME =
  process.env.CHROME_PATH ||
  [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].find(existsSync);

// node scripts/cv-pdf.mjs <variant> [outDir]  → <outDir>/pham-quoc-huy-cv-<variant>.pdf (Vietnamese /cv only)
// node scripts/cv-pdf.mjs                     → public/pham-quoc-huy-cv-{vi,en}.pdf
const [variant, outDir = "cv-export"] = process.argv.slice(2);
if (!CHROME) throw new Error("Chrome not found — set CHROME_PATH");

const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".webp": "image/webp", ".png": "image/png", ".woff2": "font/woff2", ".svg": "image/svg+xml" };
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  let file = join(OUT, p);
  if (!extname(file) && existsSync(`${file}.html`)) file += ".html";
  try {
    res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const port = server.address().port;

const jobs = variant
  ? [["/cv", join(outDir, `pham-quoc-huy-cv-${variant}.pdf`)]]
  : [["/cv", "public/pham-quoc-huy-cv-vi.pdf"], ["/en/cv", "public/pham-quoc-huy-cv-en.pdf"]];
if (variant) await mkdir(outDir, { recursive: true });

for (const [path, target] of jobs) {
  const profile = await mkdtemp(join(tmpdir(), "cv-pdf-"));
  await run(CHROME, ["--headless=new", "--disable-gpu", `--user-data-dir=${profile}`, "--no-pdf-header-footer", "--virtual-time-budget=5000", `--print-to-pdf=${resolve(target)}`, `http://localhost:${port}${path}`], { timeout: 60000 });
  console.log("wrote", target);
}
server.close();
