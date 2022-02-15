import mongoose, {Types, model, models, Schema} from 'mongoose';


const TokenSchema = new Schema({
  token:{
    type:String,
    required:true,
  }

},{versionKey:false});



mongoose.models = {};
const Token = models.token || model("token", TokenSchema);

export default Token;