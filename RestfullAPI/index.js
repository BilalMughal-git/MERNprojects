const express = require('express');
const app = express();
const userRoutes = require('./api/routes/userRoute');
const dotenv = require('dotenv');
const dbConnect = require('./api/configuration/dbconn') ;
// const mongoose = require('mongoose');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 8000;
dotenv.config() 
dbConnect()


app.use( '/api/v1/users/' , userRoutes);


app.get('/',(req,res) => {

    res.send('hello');

});



app.listen(PORT,()=>{
console.log(`server is listening on pot ${PORT}`)
})
