import express from 'express';
import images from './utilities/images';
import path from 'path';
import isValid from 'is-valid-path';

const app = express();
const port = 3000;

app.get('/api/images', async (req: express.Request, res: express.Response) => {
  const fileName = req.query.fileName as string;
  if (fileName !== undefined) {
    images.transform(fileName).then(response => {
      if (isValid(response)) {
        res.sendFile(path.resolve(response));
      } else {
        res.send(response);
      }
    });
  } else {
    res.send('File Name is undefined');
  }
});

//start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
export default app;
