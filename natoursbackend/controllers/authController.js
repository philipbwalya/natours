const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
exports.signup = async (req, res, next) => {
  try {
    const email = req.body.email;
    const userExists = await User.findOne({
      email,
    });
    if (userExists) {
      return res.status(400).json({
        message: 'User already Exists',
      });
    }
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({
      status: 'success',
      token,
      message: 'user created successfully',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'error creating user',
      error,
    });
    console.log('signup err:', error);
  }
};
