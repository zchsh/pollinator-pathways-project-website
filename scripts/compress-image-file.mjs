import fs from "fs";
import { execSync } from "child_process";

/**
 * Given a path to an image file, if the image file
 * is larger than 800 kB, compress the image using imagemagick, and
 * Return the file path to the compressed file.
 *
 * @param {string} filePath
 */
export function compressImageFile(filePath, log = () => null) {
  // Gather information about the image
  const sizeKbBefore = Math.ceil(fs.statSync(filePath).size / 1024);
  // If the image is less than 800 kB, we won't touch it
  if (sizeKbBefore < 800) {
    log(`💚 Image: Skip already small`);
    return filePath;
  }
  // Otherwise, we'll attempt to compress the image, with imagemagick
  execSync(
    `magick '${filePath}' -quality 85 -resize '1800x1800\>' '${filePath}'`
  );
  // Get the size of the compressed image
  const sizeKbAfter = Math.ceil(fs.statSync(filePath).size / 1024);
  log(
    `✅ Image: Compressed image, was ${sizeKbBefore} kB, is now ${sizeKbAfter} kB`
  );
}
