import dbConnect from '../../../lib/mongooseConnect';
import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';

/**
 * 
 * @swagger 
 * /api/user/auth:
 *      get:
 *        description: if we reload page and token are valid then
 *        response:
 *            200:
 * description: Object
 */

async function handler(req,res){
  const {method} = req;

  await dbConnect();
  const token = req.headers.authorization;
  console.log(token);
  switch(method){

    case "GET":{
      const decode = jwt.decode(req.headers.authorization, process.env.SECRET);
      console.log(decode);
      const user = await User.findOne({email:decode.email}).populate('password');
      console.log(user);
      if(!user){
        return res.status(400).json({message:"Invalid"});
      }
      return res.status(200).json({mesasge:"OK",id: user._id, role: user.role, token: token});
    }
    default:
      return res.status(400).json({message:"Invalid method", status:"OK"});
  }


}





export default handler;


