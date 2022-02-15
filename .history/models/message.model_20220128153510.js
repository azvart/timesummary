import mongoose, {Schema} from 'mongoose';



const MessageSchema = new Schema({
  body:{
    type:String,
    required: true,
  },
  created_at:{
    type: Date,
    default:Date.now
  }
},{
  versionKey: false
});

mongoose.modes = {}
const Message = mongoose.model('messages', MessageSchema);
export default Message;