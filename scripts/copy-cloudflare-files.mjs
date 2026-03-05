import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const files = ['_headers', '_redirects'];
const rootDir = process.cwd();
const publicDir = resolve(rootDir, 'public');
const distDir = resolve(rootDir, 'dist');

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
