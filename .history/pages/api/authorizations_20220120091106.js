import { Compare } from '../../lib';
import User from '../../models/user.model';
import Password from '../../models/password.model';
import dbConnect from '../../lib/mongooseConnect';



async function handler(req, res){
  const {method} = req;
  const {email} = req.body;
  await dbConnect();


  switch(method){
    case "GET": {
      try{
        const user = await User.populate(Password,{path:'passwords',select:'userPassword'});
        console.log(user);
        if(!user){
          return res.status(400).json({message:"Invalid email", status:false});
        }
      }catch(error){
        return res.status(400).json({message:error.message, status: false});
      }
    }
    default:
      return res.status(400).json({message:"Incorrect password or email", status: false});
  }
}




export default handler;