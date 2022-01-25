import { Hash } from "../../../lib";
import User from '../../../models/user.model';
import Password from '../../../models/password.model';





async function handler(req, res){

  const {method} = req;



  switch(method){

    case "POST":
      try{
        
      }catch(e){

        return res.status(400).json({message:e, status:false});
      }




    default:
      return res.status(400).json({message:"Invalid Method", status: false});
  }


}



export default handler;