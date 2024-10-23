import mongoose from "mongoose";
import dotenv from 'dotenv';
import Inquiry from '../models/inquiry.js';

dotenv.config();

const connection = process.env.MONGODB_URI;

async function dropIndexes() {
    try {
        await Inquiry.collection.dropIndexes();
        console.log("Dropped all indexes.");
    } catch (error) {
        console.error("Error dropping indexes:", error);
    }
}

const connectToDatabase = () => {
    mongoose.connect(connection)
        .then(async () => {
            console.log("Connected to MongoDB");
            await dropIndexes();
        })
        .catch(error => console.error("MongoDB connection error:", error));
}

export default connectToDatabase;