import mongoose from "mongoose";

const connection = 'mongodb+srv://taldamari643:tal123123@alumorcluster.qy73y.mongodb.net/?retryWrites=true&w=majority&appName=alumorCluster'

const connectToDatabase = () => {
    mongoose.connect(connection)
        .then(() => console.log('Connected to Database'))
        .catch((err) => console.log(err + 'Cannot connect to Database'));
}

export default connectToDatabase;