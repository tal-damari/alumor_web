import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = process.env.MONGODB_URI;

const connectToDatabase = () => {
    mongoose.connect(connection)
        .then(() => console.log('Connected to Database'))
        .catch((err) => console.log(err + 'Cannot connect to Database'));
}

export default connectToDatabase;