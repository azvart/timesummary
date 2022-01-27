import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';
import Password from '../../../models/password.model';
import Token from '../../../models/token.model';
import { Compare} from '../../../lib';
import connectedDb from '../../../lib/mongooseConnect';
async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;
  switch(method){
    case "POST":
    {
     await Password.find({email});
     const user = await User.findOne({email:email}).populate('password');
     return res.status(200).json({user:user});
    }
    default:
      return res.status(400).json({message:"Invalid method", status: false});
  }

}



export default connectedDb(handler);
