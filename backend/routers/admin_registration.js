import {Router} from 'express';
import dotenv from 'dotenv';
import {generateToken, verifyToken} from "../utils/token.js";

dotenv.config();

const router = new Router();
const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (adminUsername === username && adminPassword === password) {
        const token = generateToken(adminUsername,adminPassword)
        res.cookie('access_token', token, { httpOnly: true }).status(200).send({message: "login successful"})
    }else{
        res.cookie('access_token', "", { httpOnly: true })
        res.status(401).send({message: "Unauthorized user"})
    }
})

router.get('/dashboard', [verifyToken], (req, res) => {
    res.send({ message: 'Welcome to the admin dashboard!' });
});


export default router;