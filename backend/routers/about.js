import {Router} from 'express';
import readFile from "../utils/fileReader.js";

const router = new Router();
const filePath = "./about.txt";

//getting text to an object from about.txt file
const text = readFile(filePath);

router.get("/", async (req, res) => {
    res.status(200).send({message: text});
});

export default router;
