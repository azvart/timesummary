import { withSessionRoute } from '../../../lib/sessionsWrappers';
import dbConnect from '../../../lib/mongooseConnect';
import Token from 'models/token.model';
import jwt from 'jsonwebtoken';

export default withSessionRoute(handler);



async function handler(req,res){
  const { method } = req;
  const { refreshToken } = req.body;

  switch(method){
    case "GET":{
      try{
        await dbConnect();
        if(!refreshToken){
          return res.status(403).json({message:" Access denied, token missing"});

        }else{
          const token = await Token.findOne({token: refreshToken});
          if(!token){
            return res.status(401).json({error: "Token expired"});
          }else{
            const payload = jwt.verify(token.token, process.env.REFRESH_SECRET);
            const accessToken = jwt.sign({user: payload}, process.env.SECRET, { expiresIn: "10m" });

            return res.status(200).json({accessToken});
          }
        }
      }catch(e){
        return res.status(500).json({message:"Invalid server", status: false, error: e});
      }
    }
    default:
      return res.status(500).json({message:"Invalid method", status: false});
  }
}