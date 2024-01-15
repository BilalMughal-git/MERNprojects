const User = require("../model/users");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide all values',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const registerUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            data: registerUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error' + err.message,
        });
    }
};


const fetchUsers = async (req, res) => {
    try {
        const users = await User.find({}).lean().maxTime(30000);
        res.status(200).json({
            status: 'success',
            message: 'User fetch Successfully',
            data: users
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
};

const fetchOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).lean().maxTime(30000);
        res.status(200).json({
            status: 'success',
            message: 'User fetch Successfully',
            data: user
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error' + err.message,
        });
    }
};

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, email, password } = req.body;

    try {
        // Hash the password if provided
        let hashedPassword;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        // Update user data, including the hashed password if provided
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                firstName,
                lastName,
                email,
                password: hashedPassword, // Use hashed password if provided, otherwise use the existing one
            },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found',
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'User updated successfully',
            data: updatedUser,
        });
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({
                status: 'fail',
                message: 'Validation error',
                errors: err.errors,
            });
        }
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found',
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'User deleted successfully',
            data: deletedUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
};

module.exports = { register, fetchOne, fetchUsers, updateUser, deleteUser };
