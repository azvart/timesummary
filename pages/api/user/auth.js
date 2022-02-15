import dbConnect from '../../../lib/mongooseConnect';
import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';
import { withSessionRoute } from '../../../lib/sessionsWrappers';
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
export default withSessionRoute(handler);

async function handler(req,res){
  const {method} = req;
  await dbConnect();
 
  switch(method){

    case "GET":{
      const token = req.session.user;
      const decode = jwt.decode(token, process.env.SECRET);
      const user = await User.findOne({email:decode.data}).populate('password');
      if(!user){
        return res.status(400).json({message:"Invalid"});
      }
      return res.status(200).json({mesasge:"OK",id: user._id, role: user.role, token: token});
    }
    default:
      return res.status(400).json({message:"Invalid method", status:"OK"});
  }


}








