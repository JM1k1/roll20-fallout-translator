import { build } from "esbuild";
import inlineImportPlugin from "esbuild-plugin-inline-import";
import fs from "fs";
import path from "path";

// Пути
const entryFile = path.resolve("src/index.js");
const outFile = path.resolve("dist/roll20-fallout-translator.user.js");
const metaFile = path.resolve("userscript.meta.js");

// Чтение package.json
const pkg = JSON.parse(fs.readFileSync(path.resolve("package.json"), "utf8"));
const { version } = pkg;

// Чтение и замена версии в meta
let meta = fs.readFileSync(metaFile, "utf8").replace(/__VERSION__/, version);

build({
  entryPoints: [entryFile],
  plugins: [inlineImportPlugin()],
  loader: { ".json": "json" },
  bundle: true,
  minify: true,
  charset: "utf8",
  outfile: outFile,
  banner: { js: meta },
  logLevel: "info",
})
  .then(() => console.log(`✅ Build successful: ${outFile}`))
  .catch((err) => {
    console.error("❌ Build failed:", err);
    // process.exit(1);
  });
