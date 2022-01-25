import mongoose, { Schema, Types } from 'mongoose';


const UserSchema = new Schema({
  name:{
    type: String,
    required: true,
    index:{unique: true}
  },
  lastname:{
    type:String,
    required:true,
    index:{unique: true}
  },
  email:{
    type: String,
    required: true
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
  }]


}, {
  versionKey: false
});


const User = mongoose.models.users ||  mongoose.model("users", UserSchema);

export default User;