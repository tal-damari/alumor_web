import {Router} from 'express';
import dotenv from 'dotenv';
import {generateToken, verifyToken} from "../utils/token.js";
import UserInquiry from '../models/inquiry.js';

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

router.get('/dashboard', [verifyToken], async (req, res) => {
    try{
        const inquiries = await UserInquiry.find({});
        JSON.stringify(inquiries);
        res.status(200).send(inquiries);
    }catch (e) {
        res.status(500).send({message: e});
    }
});

//find by a given some id - username/ phone/ email
router.get('/dashboard/:id', [verifyToken], async (req, res) => {
    const id = req.params.id;
    try{
        const inquiryById = await UserInquiry.find({
            $or:[
                {email: id},
                {phone: id},
                {first_name: id}
            ]
        });

        if(!inquiryById){
            return res.status(404).send({message:"No inquiry found by this parameter given."});
        }

        JSON.stringify(inquiryById);
        res.status(200).send({inquiryById});

    }catch (e) {
        res.status(500).send({message: e});
    }
})


export default router;