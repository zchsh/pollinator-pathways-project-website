import fs from "fs";
import path from "path";

import { gatherFiles } from "./gather-files.mjs";
import { compressImageFile } from "./compress-image-file.mjs";

const DIR_CWD = process.cwd();

const DIR_BACKUP = path.join(DIR_CWD, "old-images");
const DIR_IMAGES = path.join(DIR_CWD, "public", "uploads");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg"];

main(DIR_IMAGES, DIR_BACKUP);

async function main(dirImages, dirBackup) {
  const [validFiles] = gatherFiles(dirImages, (filePath) => {
    const extname = path.extname(filePath);
    return IMAGE_EXTENSIONS.includes(extname);
  });

  for (const imageFilePath of validFiles) {
    // Back up the original file
    const backupFilePath = path.join(
      dirBackup,
      path.relative(dirImages, imageFilePath)
    );
    const backupFileDir = path.dirname(backupFilePath);
    if (!fs.existsSync(backupFileDir)) {
      fs.mkdirSync(backupFileDir, { recursive: true });
    }
    fs.copyFileSync(imageFilePath, backupFilePath);
    // Compress the image file
    compressImageFile(imageFilePath, console.log);
  }
}
