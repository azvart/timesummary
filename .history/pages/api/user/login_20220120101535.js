import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';
import { Compare } from '../../../lib';


async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;

  switch(method){
    case "POST":{
      try{
        const user = await User.findOne({email});
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

        jwt.sign(payload, process.env.SECRET, {
          expiresIn: 10000000
        }, (err, token) => {
          if(err){
            return res.status(400).json({message: err, status: false});
          }
          return res.status(200).json({messages: 'OK', token: `Bearer ${token}`, name: user.name, id: user._id });
        });

      }catch(error){
        return res.status(400).json({messages:error.messages, status: false});
      }
    }
    default:
      return res.status(400).json({message: 'Invalid method', status: false});
  }

}



export default handler;
