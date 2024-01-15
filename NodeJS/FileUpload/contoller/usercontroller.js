const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const jwt = require('jsonwebtoken');



const createToken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, config.secret_jwt);
        return token;
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        });
    }
}


const createUser = async (req, res) => {
    const hashPwd = await bcrypt.hash(req.body.password, 10);
    try {
        const newUser = userModel({
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            password: hashPwd,
            mobile: req.body.mobile,
            image: req.file.filename,
            type: req.file.type
        });

        const userData = await userModel.findOne({ email: req.body.email });

        if (userData) {
            res.status(200).send({
                message: 'User already exist',
                data: userData
            });

        } else {
            const savedUser = await newUser.save();
            res.status(201).send({
                data: savedUser,
                message: 'New User Created Successfully'
            });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const user_login = async (req, res) => {
    try {
        console.time("login")
        const email = req.body.email;
        const password = req.body.password;
        const userData = await userModel.findOne({ email: email });
        if (userData) {
            const passwordMatch = await bcrypt.compare(password, userData.password);

            if (passwordMatch) {

                const tokenData = await createToken(userData._id);

                const userResult = {
                    fName: userData.fName,
                    lName: userData.lName,
                    email: userData.email,
                    password: userData.password,
                    image: userData.image,
                    mobile: userData.mobile,
                    type: userData.type,
                    token: tokenData
                }

                const response = {
                    success: true,
                    data: userResult
                }
                res.status(200).send(response);
            } else {
                res.status(400).send('invalid credentials');
            }
        } else {
            res.status(400).send({ success: false, message: 'Invalid credentials' });

        }
        console.timeEnd("login")

    } catch (error) {
        res.status(400).send(error.message)
    }
}


const dashboard = async (req, res) => {
    try {
        res.send('WELCOME TO THE DASHBOARD');
        }
     catch (error) {
        res.status(400).send(error.message)
    }
}



module.exports = {
    createUser, user_login,dashboard
}