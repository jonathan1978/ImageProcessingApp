import express from "express";
import { stringify } from "node:querystring";
import images from "./utilities/images";
import path from "path";

const app = express();
const port = 3000;

app.get('/api/images', async (req, res) => {
    const fileName = req.query.fileName as string;
    if (fileName !== undefined) {
        images.transform(fileName).then((response) => {
            res.sendFile(path.resolve(response));
        })
        
    } else {
        res.send('File Name is undefined');
    }
})




//start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
export default app;