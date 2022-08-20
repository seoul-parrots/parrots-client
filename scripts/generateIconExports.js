/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const defaultPath = path.join(__dirname, '../src/components/Icon');
const iconFiles = fs
  .readdirSync(path.join(defaultPath, 'generated'))
  .filter((file) => file.includes('tsx'));

let generatedCode = iconFiles
  .map((iconFile) => {
    const fileName = iconFile.split('.')[0];
    return `import ${fileName} from './generated/${fileName}';`;
  })
  .join('\n');

generatedCode += `\n\nexport { ${iconFiles
  .map((iconFile) => iconFile.split('.')[0])
  .join(', ')} };`;

fs.writeFile(
  path.join(defaultPath, 'export.generated.ts'),
  `${generatedCode}\n`,
  (error) => {
    if (error) {
      throw error;
    }

    console.log('Finish.');
  }
);
