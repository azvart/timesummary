import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';
import Token from '../../../models/token.model';
import { Compare} from '../../../lib';
import connectedDb from '../../../lib/mongooseConnect';
import cookies from '../../../lib/cookies';
async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;
  switch(method){
    case "POST":
    {
     const user = await User.find({email:email});
     return res.status(200).json({user:user});
    }
    default:
      return res.status(400).json({message:"Invalid method", status: false});
  }

}



export default connectedDb(cookies(handler));
