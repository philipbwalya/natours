const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Tour name is required'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'email is required'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: 5,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'password confirm is required'],
    validate: {
      // only works on create or save functionality
      validator: function (el) {
        return el === this.password;
      },
      message: 'passwords are not matching',
    },
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  // delete passwordconfirm
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
