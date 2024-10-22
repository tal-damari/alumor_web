import {Router} from 'express';
import readFile from "../utils/fileReader.js";

const router = new Router();
const filePath = "./about.txt";

const text = readFile(filePath);

router.get("/", async (req, res) => {
    res.status(200).send({message: text});
});

export default router;
