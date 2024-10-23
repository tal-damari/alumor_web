import express from 'express';
import mainRouter from './routers/main.js';
import aboutRouter from './routers/about.js';
import inquiryRouter from './routers/inquiry.js';
import adminRouter from './routers/admin_registration.js';
import connectToDatabase from "./utils/db_connection.js";

const app = express();
const port = process.env.PORT || 8080;

connectToDatabase();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({message: "Hello to Alumor!"});
});

app.use('/api/main', mainRouter);
app.use('/api/about', aboutRouter);
app.use('/api/inquiry', inquiryRouter);
app.use('/api/admin', adminRouter);

app.listen(port, () =>
console.log(`Server started on port http://localhost:${port}`));