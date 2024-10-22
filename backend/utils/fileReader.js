import fs from "fs";

function readFile(path) {
    try{
        const data = fs.readFileSync(path, 'utf-8');
        return data.toString();
    } catch(err){
        console.error(err + "Couldn't read file");
    }
}

export default readFile;