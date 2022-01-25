import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';
import Token from '../../../models/token.model'''
import { Compare} from '../../../lib';
import connectedDb from '../../../lib/mongooseConnect';
import cookies from '../../../lib/cookies';
async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;
  switch(method){
    case "POST":
    {
      if(!email || !password){
        return res.status(400).json({message:"Invalid password of email", status: false});
      }
      
      const data  = await User.findOne({email: email}).populate('password');

      const comparePassword = await Compare(req.body.password, data.password.userPassword);
      if(comparePassword !== true){
        return res.status(400).json({message:"Invalid password", status: false});
      }
      return res.status(200).json({message:"ok", status: true, user:data});
    }
    default:
      return res.status(400).json({message:"Invalid method", status: false});
  }

}



export default connectedDb(cookies(handler));
