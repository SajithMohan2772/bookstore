import express, { request } from "express";
import {PORT} from "./config.js";

const app = express();

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send('welcome to MERN stack tutorial')
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});