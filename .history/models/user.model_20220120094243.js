import mongoose, { Schema } from 'mongoose';


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
  // password:{
  //   type: Schema.Types.ObjectId,
  //   required: false,
  //   ref: 'passwords'
  // }
  password:{
    type: String,
    required: true
  }
});

mongoose.models = {}

const User = mongoose.model("users", UserSchema);

export default User;