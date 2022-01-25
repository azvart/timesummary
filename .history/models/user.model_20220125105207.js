import mongoose, { Schema, Types } from 'mongoose';


const UserSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  lastname:{
    type:String,
    required:true,
  },
  email:{
    type: String,
    required: true,
    index:true,
  },
  password:{
    type: Types.ObjectId,
    ref:"passwords"
  },
  age:{
    type: Number
  },
  skype:{
    type:String,
  },
  surname:{
    type:String,
  },
  role:{
    type:String,
  },
  tasks:[{
    type: Types.ObjectId,
    ref:'tasks'
  }],
  reports:{
    type:Types.ObjectId,
    ref:'reports'
  },
  phone:{
    type:String,
  },
  working_at:{
    type: Date
  },
  token:{
    type: Types.ObjectId,
    ref: 'tokens'
  },
  fullname:{
    type:String,
    get: () => `${lastname} ${name} ${surname}`
  }


}, 
{
  versionKey: false
});


const User = mongoose.models.users ||  mongoose.model("users", UserSchema);

export default User;