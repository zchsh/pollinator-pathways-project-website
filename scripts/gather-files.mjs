import fs from "fs";
import path from "path";

/**
 * Given a directory, and a list of valid file extensions,
 * recursively traverse the directory, looking for files.
 * Return an array with two entries:
 * - [0] An array of valid files
 * - [1] An array of invalid files
 *
 * @param {string} dirPath
 * @param {function} filterFn
 * @returns {[string[], string[]]}
 */
export function gatherFiles(dirPath, filterFn = () => true) {
  if (!fs.existsSync(dirPath)) {
    return [[], []];
  }
  // Recursively read all files in the directory
  const dirEntries = fs.readdirSync(dirPath, { recursive: true });
  // Set up arrays for our valid files, and invalid files as well!
  const validFiles = [];
  const invalidFiles = [];
  for (const fileName of dirEntries) {
    const filePath = path.join(dirPath, fileName);
    const isValid = filterFn(filePath);
    if (isValid) {
      validFiles.push(filePath);
    } else {
      invalidFiles.push(filePath);
    }
  }
  // Return the gathered valid and mystery files
  return [validFiles, invalidFiles];
}
