import sharp from "sharp";

await sharp("logo3.png")
  .resize({ width: 384, withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true })
  .toFile("public/logo3-small.png");
