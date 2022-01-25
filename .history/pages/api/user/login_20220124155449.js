import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';
import { Compare} from '../../../lib';
import connectedDb from '../../../lib/mongooseConnect';

async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;
  switch(method){
    case "POST":
      try{

        if(!email || !password){
          return res.status(400).json({message:"Invalid email or password", status: false});
        }
        const user = await User.findOne({email: email}).populate('password').exec();
        const comparePassword = await Compare(req.body.password, user.password.userPassword);
        console.log(comparePassword);
        if(!comparePassword){
          return res.status(400).json({message:"Invalid password", status: false});
        }

        return res.status(200).json({message:"Ok", status: true, data: user});

      }catch(e){
        return res.status(400).json({message:e.message, status: false});
      }
    default:
      return res.status(200).json({message: 'Invalid method', status: false});
  }

}



export default connectedDb(handler);