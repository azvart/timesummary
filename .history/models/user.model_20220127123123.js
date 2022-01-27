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
    enum:["Developer", "Project Manager", "Sales", "Administrator", "Admin"]
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


const User = mongoose.models.users ||  mongoose.model("users", UserSchema);

export default User;