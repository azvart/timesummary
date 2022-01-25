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
  }
});

mongoose.models = {}

const User =  mongoose.model("users", UserSchema);

export default User;