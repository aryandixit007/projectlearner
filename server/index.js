import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";

import router from "./routes/route.js";



const app  = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

const PORT = 8000;
const username = 'aryan';
const password = 'aryan';

Connection(username, password);
app.listen(PORT,() => console.log(`Server is running succesfully on PORT ${PORT}`));
