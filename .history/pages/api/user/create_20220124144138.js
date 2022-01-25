import { Hash} from "../../../lib";
import User from '../../../models/user.model';
import Password from '../../../models/password.model';
import connectedDb from '../../../lib/mongooseConnect';

async function handler(req, res){

  const {method} = req;
  switch(method){

    case "POST":
      try{

        const currentUser = User.find({email:req.body.email}).exec()
        console.log(currentUser);
      }catch(e){

        return res.status(400).json({message:e.message, status:false});
      }




    default:
      return res.status(400).json({message:"Invalid Method", status: false});
  }


}



export default connectedDb(handler);