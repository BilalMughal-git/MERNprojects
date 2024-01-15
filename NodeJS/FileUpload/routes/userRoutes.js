const express = require('express');
const user_route = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');



user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));
user_route.use(express.static('public'));



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/userImages'), function (err) {
            if (err) throw err;
        })
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (err, success) {
            if (err) throw err;
        });
    }
});

const upload = multer({storage:storage});

const user_controller = require('../contoller/usercontroller');



user_route.post('/register',upload.single('image'),user_controller.createUser);

user_route.post('/login',user_controller.user_login);

module.exports=user_route;