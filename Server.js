const express = require("express");
const mongoose  = require("mongoose");
const PORT  = 7070;
const cors = require("cors")
const url = "mongodb://localhost/ajeboDB"
const pass = require('./ROUTE/Router')


mongoose.connect(url, {useNewUrlParser : true});
const con = mongoose.connection
const app = express();
app.use(cors())
app.use(express.json());
app.use('/', pass);
app.listen(PORT, ()=>{
    console.log(`app is listening to PORT : ${PORT}`)
})