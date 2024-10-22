import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

import connectToDatabase from "./utils/db_connection.js";

connectToDatabase();

app.use(express.json());

app.get("/main_page", (req, res) => {
    res.status(200).send("Hello to Alumor!");
});

app.listen(port, () =>
console.log(`Server started on port http://localhost:${port}`));