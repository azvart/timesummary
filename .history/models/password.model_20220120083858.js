import mongoose, { Schema } from 'mongoose';



const PasswordSchema = new Schema({
  user_email:{
    type: String,
  },
  user_password: {
    type: String,
  }
});


mongoose.models = {};

const Password = mongoose.model('passwords', PasswordSchema);
export default Password;