import mongoose, { Schema } from 'mongoose';
import { hash } from 'bcryptjs';


const PasswordSchema = new Schema({
  userPassword: {
    type: String,
    required:true,
  }
}, {
  versionKey:false
});



PasswordSchema.pre('save' , function(next){
  const password = this;
  if(!password.isModified || !password.isNew){
    next();
  }else{
    hash(password.userPassword, 12, (err, hash) => {
      if(err){
        console.log('Somthin wrong')
        next(err)
      }else{
        password.userPassword = hash;
        next();
      }
    })
  }

});
const Password =  mongoose.model('passwords', PasswordSchema);
export default Password;