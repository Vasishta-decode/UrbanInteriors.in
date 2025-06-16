import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { processDirectory } from '../src/utils/imageOptimizer';

const optimizeImages = async () => {
  const inputDir = path.join(__dirname, '../src/img');
  const outputDir = path.join(__dirname, '../public/optimized-images');

  console.log('Starting image optimization...');
  await processDirectory(inputDir, outputDir);
  console.log('Image optimization completed!');
};

optimizeImages().catch(console.error); 