import sharp from "sharp";
import fs from "fs";
import path from "path";

const logoUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%201-UDatfkvAsVUIJ6ypV5V4qgrBjhpkfe.jpeg";

async function removeBg() {
  // Download the logo
  console.log("Downloading logo from blob...");
  const response = await fetch(logoUrl);
  if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  console.log("Downloaded", buffer.length, "bytes");

  const image = sharp(buffer);
  const metadata = await image.metadata();
  console.log("Image dimensions:", metadata.width, "x", metadata.height);

  // Get raw pixel data with alpha channel
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelCount = info.width * info.height;
  const output = Buffer.alloc(pixelCount * 4);

  const threshold = 215;

  for (let i = 0; i < pixelCount; i++) {
    const idx = i * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    if (r > threshold && g > threshold && b > threshold) {
      // Background pixel — fully transparent
      output[idx] = 0;
      output[idx + 1] = 0;
      output[idx + 2] = 0;
      output[idx + 3] = 0;
    } else if (r > 190 && g > 190 && b > 190) {
      // Transition pixel — partial transparency for anti-aliased edges
      const avg = (r + g + b) / 3;
      const alpha = Math.round(255 * (1 - (avg - 190) / (255 - 190)));
      output[idx] = r;
      output[idx + 1] = g;
      output[idx + 2] = b;
      output[idx + 3] = alpha;
    } else {
      // Foreground pixel — fully opaque
      output[idx] = r;
      output[idx + 1] = g;
      output[idx + 2] = b;
      output[idx + 3] = 255;
    }
  }

  const outputBuffer = await sharp(output, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();

  // Write to multiple potential locations to ensure it lands in the project
  const locations = [
    path.resolve("public/images/cogniflow-logo.png"),
    path.resolve("../public/images/cogniflow-logo.png"),
    "/vercel/share/v0-project/public/images/cogniflow-logo.png",
  ];

  for (const loc of locations) {
    try {
      const dir = path.dirname(loc);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(loc, outputBuffer);
      console.log("Saved to:", loc);
    } catch (e) {
      console.log("Could not write to:", loc, e.message);
    }
  }

  // Also output as base64 so we can capture it
  console.log("BASE64_START");
  console.log(outputBuffer.toString("base64"));
  console.log("BASE64_END");
  console.log("Output size:", outputBuffer.length, "bytes");
}

removeBg().catch(console.error);
