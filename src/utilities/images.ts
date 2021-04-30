import fs from 'fs';
import sharp from 'sharp';

async function transform(imageName: string): Promise<string> {
  try {
    const outputFile = `./converted/${imageName}`;
    let formattedFile = "";
    if (fs.existsSync(outputFile)) {
      formattedFile = outputFile;
    } else {
      if (fs.existsSync(`./images/${imageName}`)) {
        await sharp(`./images/${imageName}`)
          .resize(300, 200)
          .toFile(outputFile);
          formattedFile = outputFile;
      } else {
        return '**Image does not exist**';
      }
    }
    return formattedFile;
  } catch (error) {
    return `Error: ${error}`;
  }
}

export default { transform };
