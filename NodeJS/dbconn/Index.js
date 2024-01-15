const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;

let db;

try {
    MongoClient.connect('mongodb://localhost:27017/bilaldb', function(err, client) {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            throw err;
        }
        db = client.db('bilaldb');
        console.log('Connected to MongoDB');
    });
} catch (error) {
    console.log(error.message);
}

app.get('/', (req, res) => {
    if (db) {
        db.collection('uchiha').find().toArray(function(err, result) {
            if (err) {
                console.error('Error querying MongoDB:', err);
                throw err;
            }
            res.send(result);
        });
    } else {
        res.status(500).send('Database not connected');
    }
});

app.get('/bilaldb', (req, res) => {
    if (db) {
        db.collection('uchiha').find().toArray(function(err, result) {
            if (err) {
                console.error('Error querying MongoDB:', err);
                throw err;
            }
            res.send(result);
        });
    } else {
        res.status(500).send('Database not connected');
    }
});

app.listen(port, () => {
    console.log(`Server is Listening on port ${port}`);
});
