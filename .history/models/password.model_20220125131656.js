import mongoose, { Schema } from 'mongoose';
import { hash } from 'bcryptjs';


const PasswordSchema = new Schema({
  email:{
    type: String,
    required: [true, 'email is valid'],
    index:true,
    unique: true,
    validate:{
      validator: function(v) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(v);
      },
      message: props => `${props.value} is not a valide email`
    }
  },
  userPassword: {
    type: String,
    required:true,
  },
  created_at:{
    type: Date,
    default: Date.now
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