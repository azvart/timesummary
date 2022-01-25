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
    type: Schema.Types.ObjectId,
    ref: "passwords",
    required: false
  },
  password:{
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'passwords'
  }
});



const User = mongoose.models.users ||  mongoose.model("users", UserSchema);

export default User;