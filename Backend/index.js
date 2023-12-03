import express, { request, response }  from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'
import {Book} from "./models/bookmodel.js";
import cors from 'cors';
import booksRoute from '../Backend/routes/booksRoute.js';

const app = express();

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
// app.use(cors());

app.use(
    cors({
        origin: 'http://localhost:3000',
        mathods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['content-Type'],
    })
);

app.use(express.json());

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send('welcome to MERN stack tutorial')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() =>{
    console.log('connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
    })
    .catch((error) =>{
    console.log(error);
    });