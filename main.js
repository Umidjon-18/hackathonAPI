const express = require('express');
const mongoose = require('mongoose');
const app = express();
const appRouter = require('./router');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/', appRouter);


mongoose.connect(proccess.env.DB)
.then(()=>{ console.log('Databas Connected...')})
.catch((error)=>{ console.log('Database disconnected !!! error is :', error)});


const port = process.env.PORT || 5000;

app.listen(port, ()=>{ console.log(`Server is running on port : ${port}`)});
