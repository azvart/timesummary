import {Types, model, models, Schema} from 'mongoose';



const TokenSchema = new Schema({
  token:{
    type:String,
    required:true,
    index:{
      unique:true
    }
  }
},{versionKey:false});