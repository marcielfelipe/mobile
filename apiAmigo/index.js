const express = require('express');
const mongoose=require('mongoose');
const route=require('./src/route');
const app = express();

app.use(express.json());
app.use(route);

mongoose.connect('mongodb+srv://wellington:wlborges@cluster0-zlxke.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.listen(3333);


