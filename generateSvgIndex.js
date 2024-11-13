// 입력하기 전에 color, size 관련 생각 한번 더하기 - ex ) modifier, social
// node generateSvgIndex.js 입력하면 src/icon/svg 폴더에 있는 svg 파일들을 폴더 별로 index.ts 파일로 만들어줌

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, parse } from "path";

const SVG_ROOT_DIRECTORY = "./src/icon/svg";

function generateIndexFiles(rootDirectory) {
  const directories = getDirectories(rootDirectory);

  directories.forEach(directory => {
    const indexFilePath = join(directory, "index.ts");
    const files = readdirSync(directory);

    const exports = files
      .filter(file => file.endsWith(".svg"))
      .map(file => {
        const filePath = join(directory, file);
        const fileName = parse(file).name;
        const sanitizedFileName = fileName.replace(/-/g, "_");

        let svgContent = readFileSync(filePath, "utf-8");
        svgContent = updateSvgContent(svgContent);
        writeFileSync(filePath, svgContent);

        return `export { default as ${sanitizedFileName} } from './${fileName}.svg';`;
      });

    const content = join("\n");
    writeFileSync(indexFilePath, content);
  });
}

function getDirectories(directory) {
  return readdirSync(directory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => join(directory, dirent.name));
}

function updateSvgContent(svgContent) {
  svgContent = svgContent.replace(/(width|height)="[^"]*"/g, '$1="current"');
  // social , modifier 색깔 변경 x
  // svgContent = svgContent.replace(/fill="[^"]*"/g, 'fill="current"');
  return svgContent;
}

generateIndexFiles(SVG_ROOT_DIRECTORY);
