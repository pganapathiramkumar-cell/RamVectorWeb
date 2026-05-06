/**
 * Generates all PNG icons from profile.png for favicon, apple-touch-icon, and PWA.
 * Run: npm install sharp   (one time)
 *      node scripts/generate-icons.js
 */

import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root       = join(__dirname, '..');
const src        = join(root, 'public', 'profile.png');
const iconsDir   = join(root, 'public', 'icons');

if (!existsSync(iconsDir)) mkdirSync(iconsDir, { recursive: true });

const sizes = [
  { size: 16,  name: 'icon-16.png' },
  { size: 32,  name: 'icon-32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
];

// Get image metadata to crop a square from the top-center (face area)
const meta = await sharp(src).metadata();
const cropSize = Math.min(meta.width, meta.height);
const left = Math.floor((meta.width - cropSize) / 2);

console.log('Generating icons from profile.png...\n');

for (const { size, name } of sizes) {
  const radius = Math.round(size * 0.2);

  // SVG rounded-rect mask
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white"/>
    </svg>`
  );

  await sharp(src)
    .extract({ left, top: 0, width: cropSize, height: cropSize })
    .resize(size, size)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(join(iconsDir, name));

  console.log(`  ✓ ${name}  (${size}×${size})`);
}

console.log('\nDone! Icons saved to public/icons/');
console.log('Rebuild the site: npm run build');
