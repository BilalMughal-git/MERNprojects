const express = require('express');


const userController = require('../controllers/userCtrl');
const userRoutes = express.Router();


userRoutes.get('/Fetch',userController.fetchUsers);
userRoutes.get('/FetchOne/:id',userController.fetchOne);
userRoutes.post( '/register',userController.register);
userRoutes.put('/Update/:id',userController.updateUser);
userRoutes.delete('/delete/:id',userController.deleteUser);

module.exports = userRoutes;

