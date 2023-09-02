import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    minlength: 5, 
    maxlength: 20, 
  },
  lastname: {
    type: String,
    trim: true,
    minlength: 5,
    maxlength: 20,
  },
  username: {
    type: String,
    trim: true,
    unique: true, 
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema); 

export default User;
