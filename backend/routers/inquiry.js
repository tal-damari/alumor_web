import { Router } from "express";
import Inquiry from "../models/inquiry.js"

const router = new Router();

router.post("/create", async (req, res) => {

    const {first_name, last_name, phone, email, inquiry_sub} = req.body;
    const issue_addressed = false
    const user_inquiry = new Inquiry ({first_name, last_name, phone, email, inquiry_sub, issue_addressed});

    try{
        await user_inquiry.save();
        res.status(201).send({message:"new inquiry created"});
    }catch (err){
        console.error(err);
        res.status(400).send({message:"Something went wrong with placing a new inquiry :("});
    }
})


export default router;