import express, { request, response }  from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose'
import {Book} from "./models/bookmodel.js";
import cors from 'cors';

const app = express();

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

app.use(express.json());

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send('welcome to MERN stack tutorial')
});

app.post('/books', async (request, response) => {
    console.log('check');

    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear 
        ){
            return response.status(400).send({
                message: "send all required fields: title, authir, publishYaar"
            });
        }

    const newBook ={
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
    };  

    const book = await Book.create(newBook);

    return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

app.get('/books', async (request, response) =>{
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length ,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

app.get('/books/:id', async (request, response) =>{
    try {
    
        const {id} = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

app.put('/books/:id', async (request, response) =>{
    try {
        if(
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear 
        ){
            return response.status(400).send({
                message:'Send all required feilds: title, author, publishYear',
            });
        }
        
        const { id } = request.params;

        // const result = await Book.findByAndUbdate(id, request.body);

        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result){
            return response.status(404).json({message:'Book not found'});
        }

        return response.status(200).send({message:'Book ubdate successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


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