const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost:27017/bilaldb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('MongoDB connection established');
});

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
       
    }
});

const User = mongoose.model('User', userSchema);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
  const users= await User.find();
  res.send(users)
});


app.post('/users', async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const newUser = new User({
            firstname,
            lastname,
            email,
            password
        });

        const savedUser = await newUser.save();
        
        console.log('User saved:', savedUser);
        res.status(201).json(savedUser); 
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
