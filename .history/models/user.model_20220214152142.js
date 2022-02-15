import mongoose, { Schema, Types } from 'mongoose';
import jwt from 'jsonwebtoken';
import Token from './token.model';
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
    required: [true, 'email is valid'],
    index:true,
    unique: true,
    dropDups: true,
    validate:{
      validator: function(v) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(v);
      },
      message: props => `${props.value} is not a valide email`
    }
  },
  password:{
    type: String,
    required: true
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
    enum:["Developer", "Project Manager", "Sales", "Administrator", "Admin"],
    default:"Developer"
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

}, 
{
  versionKey: false,
  validateBeforeSave: true,
});


UserSchema.methods = {
  createAccessToken : async function(){
    try{
      const  { _id, name } = this;
      const accessToken = jwt.sign(
        {user: {_id, name}},
        process.env.SECRET,
        {
          expiresIn: "10m"
        }
      );
      return accessToken;
    }catch(error){
      console.error(error);
      return;
    }
  },
  createReffreshToken: async function(){
    try{
      const { _id, name } = this;
      const refreshToken = jwt.sign(
        {user: { _id, name }},
        process.env.REFRESH_SECRET,
        {
          expiresIn: "1d"        
        }
      );
      await new Token({token: refreshToken}).save();
      return refreshToken;
    }catch(e){
      console.error(e);
      return;
    }
  }
}

mongoose.models = {}
const User =  mongoose.model("users", UserSchema);

export default User;