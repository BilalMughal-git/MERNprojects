const express = require ('express');
const app = new express();
const path = require('path');
const PORT = process.env.PORT || 8000 ;
const logEvents = require('./logEvents');

app.use((req,res,next) => {
    logEvents(`${req.method}\t${req.headers.oirgin}\t${req.url}`,'reqlog.txt');
    console.log(`${req.method}${req.path}`);
    next();
});

app.use(express.urlencoded({extended:false}));
// app.use(express.json());
// app.use(express.static(path.join(__dirname,'/public')));


// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'views','index.html'));
// });



app.listen(PORT,() => {
    console.log(`Server is listening on PORT : ${PORT}`)
})