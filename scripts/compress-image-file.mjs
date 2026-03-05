import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * Given a path to an image file, if the image file
 * is larger than 800 kB, compress the image using imagemagick, and
 * Return the file path to the compressed file.
 *
 * @param {string} filePath
 * @returns {string}
 */
export function compressImageFile(filePath, log = () => null) {
  // Gather information about the image
  const imgStats = fs.statSync(filePath);
  const imageSizeKb = Math.ceil(imgStats.size / 1024);
  // If the image is less than 800 kB, we won't touch it
  if (imageSizeKb < 800) {
    log(`💚 Image: Skip already small`);
    return filePath;
  }
  // Otherwise, we'll attempt to compress the image, with imagemagick
  // execSync(
  //   `magick '${filePath}' -quality 85 -resize '1800x1800\>' '${filePath}'`
  // );
  log(`✅ Image: Compressed image, was ${imageSizeKb} kB`);
  // Delete the original image, if applicable
  // fs.unlinkSync(filePath);
  return filePath;
}
