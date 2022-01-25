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

      }catch(error){
        return res.status(400).json({messages:error.messages, status: false});
      }
    }
  }

}



export default handler;
