const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  const inputPath = path.resolve(__dirname, '../public/images/logo.jpg');
  const metadata = await sharp(inputPath).metadata();
  console.log('Original dimensions:', metadata.width, 'x', metadata.height, 'format:', metadata.format);

  const width = metadata.width;
  const height = metadata.height;
  const size = Math.min(width, height);
  const radius = size / 2;

  // Let's create an SVG circular mask with antialiased edge
  // Cut inward by 2 pixels to guarantee 0 white outer pixels leak
  const circleSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius - 3}" fill="#ffffff" /></svg>`
  );

  // 1. Generate transparent PNG: public/images/logo.png
  await sharp(inputPath)
    .resize(size, size, { fit: 'cover' })
    .composite([
      {
        input: circleSvg,
        blend: 'dest-in'
      }
    ])
    .png()
    .toFile(path.resolve(__dirname, '../public/images/logo.png'));

  console.log('Created transparent public/images/logo.png');

  // 2. Generate crisp favicon-32x32.png
  const circleSvg32 = Buffer.from(
    `<svg width="32" height="32"><circle cx="16" cy="16" r="15" fill="#ffffff" /></svg>`
  );

  await sharp(inputPath)
    .resize(32, 32, { fit: 'cover' })
    .composite([
      {
        input: circleSvg32,
        blend: 'dest-in'
      }
    ])
    .png()
    .toFile(path.resolve(__dirname, '../public/favicon-32x32.png'));

  // 3. Generate favicon.png (192x192)
  const circleSvg192 = Buffer.from(
    `<svg width="192" height="192"><circle cx="96" cy="96" r="94" fill="#ffffff" /></svg>`
  );

  await sharp(inputPath)
    .resize(192, 192, { fit: 'cover' })
    .composite([
      {
        input: circleSvg192,
        blend: 'dest-in'
      }
    ])
    .png()
    .toFile(path.resolve(__dirname, '../public/favicon.png'));

  // 4. Overwrite favicon.ico with favicon-32x32.png (or favicon.png)
  fs.copyFileSync(
    path.resolve(__dirname, '../public/favicon-32x32.png'),
    path.resolve(__dirname, '../public/favicon.ico')
  );

  console.log('Successfully created transparent favicon.png, favicon-32x32.png, favicon.ico and logo.png!');
}

processLogo().catch(console.error);
