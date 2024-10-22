import express from 'express';
const app = express();
const port = process.env.PORT || 8080;
import mainRouter from './routers/main.js';
import connectToDatabase from "./utils/db_connection.js";

connectToDatabase();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({message: "Hello to Alumor!"});
});

app.use('/api/main', mainRouter);

app.listen(port, () =>
console.log(`Server started on port http://localhost:${port}`));