import fs from "fs";
import {promises as fsPromises} from "fs";
import { constants } from 'fs';
import sharp from "sharp";

async function transform(imageName: string) {
    try {
        let outputFile = `./converted/${imageName}`;
        if (fs.existsSync(outputFile)) {
          return outputFile;
        } else {
          await fsPromises.access(`./images/${imageName}`, constants.R_OK | constants.W_OK);
          await sharp(`./images/${imageName}`).resize(300, 200).toFile(outputFile);
          return outputFile;
        }
      } catch (error) {
        return "Image does not exist";
      }
}

export default {transform}