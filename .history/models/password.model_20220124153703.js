import mongoose, { Schema } from 'mongoose';



const PasswordSchema = new Schema({
  userPassword: {
    type: String,
    required:true,
  }
});


mongoose.models = {}

const Password = mongoose.models.passwords ||  mongoose.model('passwords', PasswordSchema);
export default Password;