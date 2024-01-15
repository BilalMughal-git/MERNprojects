const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {globalErrorHandler,notFound} = require('./middlware/middleware')
const port = 8000;


mongoose.connect('mongodb://localhost:27017/userDB');


const user_routes = require('./routes/userRoutes');

app.use('/api',user_routes);


app.use(notFound);
app.use(globalErrorHandler);


app.listen(port,() => { 
    console.log(`server is listening on port : ${port}`);
});