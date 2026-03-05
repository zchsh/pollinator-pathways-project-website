import path from "path";

import { gatherFiles } from "./gather-files.mjs";

const DIR_CWD = process.cwd();
const IMAGES_DIR = path.join(DIR_CWD, "public", "uploads");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

main(IMAGES_DIR);

async function main(imagesDir) {
  const [validFiles] = gatherFiles(imagesDir, (filePath) => {
    const extname = path.extname(filePath);
    return IMAGE_EXTENSIONS.includes(extname);
  });

  console.log(validFiles);

  for (const imageFilePath of validFiles) {
    await compressImageFile(imageFilePath);
  }
}
