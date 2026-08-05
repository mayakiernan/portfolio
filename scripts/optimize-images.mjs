import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_ONK = path.join(process.cwd(), "public", "onk");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.name.toLowerCase().endsWith(".png")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertPngToWebp(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, ".webp");
  const before = (await stat(pngPath)).size;

  await sharp(pngPath)
    .webp({ quality: 82, effort: 6 })
    .toFile(webpPath);

  const after = (await stat(webpPath)).size;
  console.log(
    `${path.relative(PUBLIC_ONK, pngPath)} → ${path.relative(PUBLIC_ONK, webpPath)} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`,
  );
}

const pngFiles = await walk(PUBLIC_ONK);

if (pngFiles.length === 0) {
  console.log("No PNG files found in public/onk/");
  process.exit(0);
}

for (const pngPath of pngFiles) {
  await convertPngToWebp(pngPath);
}

console.log(`Converted ${pngFiles.length} PNG file(s).`);
