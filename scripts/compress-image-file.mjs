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
  const extension = path.extname(filePath);
  const basename = path.basename(filePath, extension);
  // Gather information about the image
  const imgStats = fs.statSync(filePath);
  const imageSizeKb = Math.ceil(imgStats.size / 1024);
  // Determine the output file path
  const parentDir = path.dirname(filePath);
  const jpegOutPath = path.join(parentDir, `${basename}_c.jpeg`);
  const jpegOutFileName = path.basename(jpegOutPath);
  // Skip images that are thumbnails
  if (basename.endsWith("_thumb")) {
    log(`💚 Image: Skip thumbnail ${path.basename(filePath)}`);
    return filePath;
  }
  // Skip images that have already been flagged as compressed
  if (basename.endsWith("_c")) {
    log(`💚 Image: Skip already compressed ${path.basename(filePath)}`);
    return filePath;
  }
  // If the image is less than 800 kB, and the file type is jpeg, we won't touch it
  const isJpeg = extension === ".jpeg" || extension === ".jpg";
  if (isJpeg && imageSizeKb < 800) {
    log(`💚 Image: Skip already small, renamed ${jpegOutFileName}`);
    // Rename the file to add the `_c` suffix
    // TODO: lift this out, probably needs to be re-used elsewhere
    const newExtension = extension === ".jpg" ? ".jpeg" : extension;
    const newFilePath = path.join(parentDir, `${basename}_c${newExtension}`);
    fs.renameSync(filePath, newFilePath);
    return newFilePath;
  }
  // Otherwise, we'll attempt to compress the image, with imagemagick
  if (fs.existsSync(jpegOutPath)) {
    log(`💚 Image: Skip already compressed ${jpegOutFileName}`);
    log("🧼 Removing original file...");
    // fs.unlinkSync(filePath);
    return jpegOutPath;
  }
  execSync(
    `magick '${filePath}' -quality 85 -resize '1800x1800\>' '${jpegOutPath}'`
  );
  log(`✅ Image: Compressed to ${jpegOutFileName}`);
  // Delete the original image, if applicable
  // fs.unlinkSync(filePath);
  return jpegOutPath;
}
