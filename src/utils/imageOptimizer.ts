import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const optimizeImage = async (
  inputPath: string,
  outputPath: string,
  options = {
    quality: 80,
    width: 1920,
    format: 'webp'
  }
) => {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Calculate new dimensions while maintaining aspect ratio
    let width = options.width;
    let height = Math.round((metadata.height! * width) / metadata.width!);

    // Resize and convert to WebP
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: options.quality })
      .toFile(outputPath);

    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

const processDirectory = async (inputDir: string, outputDir: string) => {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

    // Skip if not an image file
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

    await optimizeImage(inputPath, outputPath);
  }
};

export { optimizeImage, processDirectory }; 