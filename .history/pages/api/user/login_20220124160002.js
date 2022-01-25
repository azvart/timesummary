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
        if(comparePassword !== true){
          return res.status(400).json({message:"Invalid password", status: false});
        }
        const token = jwt.sign({id: user._id, name: user.name},process.env.SECRET,{expiresIn: 1000000});
        res.setCookies('authorization', `Bearer ${token}`);
        return res.status(200).json({message:"Ok", status: true, user: user});

      }catch(e){
        return res.status(400).json({message:e.message, status: false});
      }
    default:
      return res.status(200).json({message: 'Invalid method', status: false});
  }

}



export default connectedDb(handler);
