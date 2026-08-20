import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("exports the China HR portfolio as static HTML", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<html lang="zh-CN">/i);
  assert.match(html, /<title>张蕤和 Ruihe Zhang/);
  assert.match(html, /把复杂数据，变成可验证的业务判断/);
  assert.match(html, /五大行 PCL/);
  assert.match(html, /北极 GNSS–IR/);
  assert.match(html, /BIXI/);
  assert.match(html, /全球第 2/);
  assert.match(html, /ruihe\.zhang@mail\.mcgill\.ca/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project|cursor-glow/);
});

test("includes metadata, static assets, and both resume downloads", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /property="og:image" content="https:\/\/ruihezhang\.github\.io\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /href="\/_next\/static\/css\//);
  assert.match(html, /src="\/_next\/static\/chunks\//);

  await Promise.all([
    access(new URL("og.png", outputRoot)),
    access(new URL(".nojekyll", outputRoot)),
    access(new URL("_next/static/", outputRoot)),
    access(new URL("resume/Zhang_Ruihe_Resume_CN.pdf", outputRoot)),
    access(new URL("resume/Ruihe_Zhang_Resume_EN.pdf", outputRoot)),
  ]);
});
