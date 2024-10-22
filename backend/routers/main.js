import {Router} from 'express';
import fs from 'fs';
import * as path from "node:path";

const router = new Router()
const filePath = "./description.txt"

function readFile(path) {
    try{
        const data = fs.readFileSync(path, 'utf-8');
        return data.toString();
    } catch(err){
        console.error(err + "Couldn't read file");
    }
}

//getting text to an object from description.txt file
const text = readFile(filePath);

router.get("/", async (req, res) => {
    res.status(200).send({message: text});
});

export default router;