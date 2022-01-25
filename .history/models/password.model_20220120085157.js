import mongoose, { Schema } from 'mongoose';



const PasswordSchema = new Schema({
  userPassword: {
    type: String,
  }
});


mongoose.models = {};

const Password = mongoose.model('passwords', PasswordSchema);
export default Password;