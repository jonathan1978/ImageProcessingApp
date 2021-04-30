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
          if (fs.existsSync(`./images/${imageName}`)) {
            await sharp(`./images/${imageName}`).resize(300, 200).toFile(outputFile);
            return outputFile;
          }
          else {
            return "**Image does not exist**";
          }
        }
      } catch (error) {
        return error;
      }
}

export default {transform}