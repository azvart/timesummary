import mongoose, { Schema } from 'mongoose';



const PasswordSchema = new Schema({
  email:{
    type: Schema.Types.ObjectId,
    ref: 'users'
    require: false
  },
  password: {
    type: String,
  }
});



const Password = mongoose.models.passwords || mongoose.model('passwords', PasswordSchema);
export default Password;