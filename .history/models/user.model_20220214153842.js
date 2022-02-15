import mongoose, { Schema, Types } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcryptjs'
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
      const  { _id, email } = this;
      const accessToken = jwt.sign(
        {user: {_id, email}},
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
  createRefreshToken: async function(){
    try{
      const { _id, email } = this;
      const refreshToken = jwt.sign(
        {user: { _id, email }},
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

UserSchema.pre("save", async function(next){
  try{
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await hash(this.password, salt)
    this.password = hashedPassword;
  }catch(e){
    console.error(e);
  }
  return next();
})
mongoose.models = {}
const User =  mongoose.model("users", UserSchema);

export default User;