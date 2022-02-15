import { withSessionRoute } from '../../../lib/sessionsWrappers';
import dbConnect from '../../../lib/mongooseConnect';


export default withSessionRoute(handler);



async function handler(req,res){
  const { method } = req;
  const { refreshToken } = req.body;

  switch(method){
    case "GET":{
      try{
        await dbConnect();

      }catch(e){
        return res.status(500).json({message:"Invalid server", status: false, error: e});
      }
    }
  }
}