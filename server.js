const express=require('express');
const bodyprs=require('body-parser');
const mongoose = require('mongoose');
//const myrout = require('./routes/noteroutes');


const app=express();


app.use(bodyprs.urlencoded({extended : true}));

app.use(require('./routes/noteroutes'));

app.use(bodyprs.json());

 app.use((req, res) =>{
   res.send("here is the unknown request");}
 );

const port = process.env.PORT || 8000;
app.listen(port,()=>
console.log(`app is listening at ${port}`));
mongoose.connect('mongodb+srv://ab23abhinav:'+process.env.xyz +'@cluster0-bvvyj.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser:true}, ()=>
console.log("DB connected"));
