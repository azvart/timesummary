import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';
import { Compare } from '../../../lib';


async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;

  switch(method){
    case "POST":{
      try{
        const user = await User.findOne({email:email});
        console.log(user);
        if(!user){
          return res.status(400).json({message:"Invalid email", status: false});
        }
        const comparing  = await Compare(password, user.password);
        if(!comparing){
          return res.status(400).json({message:"Invalid password", status: false})
        }
        const payload = {
          id: user._id,
          name: user.name
        };
        const token  = jwt.sign(payload, process.env.SECRET, 
          {
          expiresIn: 10000000
          });
          console.log(token);
          return res.status(200).json({status: true, token: `Bearer ${token}`});
      }catch(error){
        return res.status(400).json({messages:error.messages, status: false});
      }
    }
    default:
      return res.status(400).json({message: 'Invalid method', status: false});
  }

}



export default handler;
