import fs from "fs";
import * as path from 'path';
import { access } from 'fs/promises';
import { constants } from 'fs';
import sharp from "sharp";

async function transform(imageName: string) {
    try {
        const outputFile = `./converted/${imageName}`;
        if (fs.existsSync(outputFile)) {
          //file exists
          return imageName;
        } else {
          await access(`./images/${imageName}`, constants.R_OK | constants.W_OK);
          await sharp(`./images/${imageName}`)
            .resize(300, 200)
            .toFile(outputFile, function(err) {
              console.log("Image Processed");
          });
          return imageName;
        }
      } catch (error) {
        return "Image does not exist";
      }
}

export default {transform}