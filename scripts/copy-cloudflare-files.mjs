import { copyFileSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const files = ['_headers'];
const rootDir = process.cwd();
const publicDir = resolve(rootDir, 'public');
const distDir = resolve(rootDir, 'dist');
const staleFiles = ['_redirects'];

for (const fileName of staleFiles) {
  const target = resolve(distDir, fileName);
  rmSync(target, { force: true });
}

for (const fileName of files) {
  const source = resolve(publicDir, fileName);
  const target = resolve(distDir, fileName);

  if (!existsSync(source)) {
    console.warn(`[postbuild] Missing ${source}, skipping.`);
    continue;
  }

  copyFileSync(source, target);
  console.log(`[postbuild] Copied ${fileName} to dist.`);
}
