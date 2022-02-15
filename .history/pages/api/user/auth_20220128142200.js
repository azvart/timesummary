import dbConnect from '../../../lib/mongooseConnect';
import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';



async function handler(req,res){
  const {method} = req;

  await dbConnect();


  switch(method){

    case "GET":{
      const decode = jwt.decode(req.headers.authorization, process.env.SECRET);
      const user = await User.findOne({email:decode.email});
      console.log(user);
      return res.status(200).json({mesasge:"OK",id: user._id, role: user.role, token: req.headers.authorization});
    }
    default:
      return res.status(400).json({message:"Invalid method", status:"OK"});
  }


}





export default handler;


