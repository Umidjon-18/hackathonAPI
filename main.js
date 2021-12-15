const express = require('express');
const mongoose = require('mongoose');
const app = express();
const appRouter = require('./router');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/', appRouter);


mongoose.connect('mongodb+srv://Umidjon-18:hackathon-password@cluster0.jezxa.mongodb.net/hackathonDB?retryWrites=true&w=majority')
.then(()=>{ console.log('Databas Connected...')})
.catch((error)=>{ console.log('Database disconnected !!! error is :', error)});


const port = process.env.PORT || 5000;

app.listen(port, ()=>{ console.log(`Server is running on port : ${port}`)});