// [1] Imports
import fs from "fs";
import path from "path";

import {allowIcons} from "./src/lib/utils.js"

const iconsPath = path.join(
  "node_modules",
  "@mui",
  "icons-material"
);

// [2] Functions
// Get all icons from the @mui/icons-material package
function getAllIcons(dir) {
  const files = fs.readdirSync(dir);
  const icons = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      icons.push(...getAllIcons(filePath));
    } else if (file.endsWith(".js")) {
      const iconName = path.basename(file, ".js");
      icons.push(iconName);
    }
  });

  return icons;
}

export const iconList = getAllIcons(iconsPath);

const distFolder = path.join("src", "icons"); // Changed to src/icons

// Ensure the directory exists and clean it up if it does
if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder, { recursive: true });
} else {
  console.log("Cleaning up previous build...");
  fs.rmSync(distFolder, { recursive: true, force: true });
  fs.mkdirSync(distFolder, { recursive: true });
}

// Generate the icons
iconList.forEach((iconName) => {
  if (allowIcons.includes(iconName)) {
    const filePath = path.join(distFolder, `${iconName}.tsx`);
    const content = `export { default } from "@mui/icons-material/${iconName}";\n`;

    fs.writeFileSync(filePath, content);
    console.log(`Generated: ${iconName}.tsx`);
  } else {
    console.log(`Skipped: ${iconName}.tsx`);
  }
});

console.log("Icon files generated in /src/icons"); // Updated log message
