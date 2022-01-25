import mongoose, { Schema } from 'mongoose';



const PasswordSchema = new Schema({
  userEmail:{
    type: String,
  },
  userPassword: {
    type: String,
  }
});


mongoose.models = {};

const Password = mongoose.model('passwords', PasswordSchema);
export default Password;