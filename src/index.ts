import express from "express";
import { stringify } from "node:querystring";
import images from "./utilities/images";

const app = express();
const port = 3000;

app.get('/api/images', (req, res) => {
    const fileName = req.query.fileName as string;
    if (fileName !== undefined) {
        images.transform(fileName);
        res.send(fileName);
    } else {
        console.log(req.query.fileName);
        res.send('images');
    }
})




//start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
export default app;