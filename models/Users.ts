import mongoose, {Document,Schema,Model} from 'mongoose';
import {IUser} from '../types/user.type';
interface IUserDocument extends IUser, Document{

};
interface IUserModel extends Model<IUserDocument>{

};



const UserSchema:Schema = new Schema({
  name:{
    type: String,
    required: false
  },
  password:{
    type: String,
    required: false
  },
  email:{
    type: String,
    required: false
  },
  age:{
    type: Number,
    required: false
  },
  about:{
    type: String,
    required: false
  },
  status:{
    type: String,
    required: false
  },
  position:{
    type: String,
    required: false
  }
},{versionKey:false});


const Users:any =  mongoose.models.Users || mongoose.model<IUserDocument, IUserModel>('Users', UserSchema);

export default Users;