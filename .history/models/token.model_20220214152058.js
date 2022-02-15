import mongoose, {Types, model, models, Schema} from 'mongoose';


const TokenSchema = new Schema({
  token:{
    type:String,
    required:true,
  },
  expires:{
    type: Date
  },
  isExpired:{
    type: Boolean,
  },
  created:{
    type:Date,
    default: Date.now,
  },
  isActive:{
    type: Boolean
  }

},{versionKey:false});



mongoose.models = {};
const Token = models.token || model("token", TokenSchema);

export default Token;