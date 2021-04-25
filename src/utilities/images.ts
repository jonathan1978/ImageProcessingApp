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
              // output.jpg is a 300 pixels wide and 200 pixels high image
              // containing a scaled and cropped version of input.jpg
          });
          return imageName;
        }
      } catch (error) {
        return "Image does not exist";
      }
}

export default {transform}