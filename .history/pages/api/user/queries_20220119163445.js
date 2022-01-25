import { Hash } from "../../../lib";
import User from '../../../models/user.model';
import Password from '../../../models/password.model';
import dbConnect from '../../../lib/mongooseConnect';

async function handler(req, res){
  const {method} = req;
  const {name, lastname,email, password} = req.body;
  await dbConnect();
  switch(method){
    case "POST":
      try{
        const currentUser = await User.findOne({email:email});
        if(currentUser){
          return res.status(400).json({message: `The user with email:${email} already yet`});
        }

        const hashPassword = await Hash(password);
        if(!hashPassword){
          return res.status(400).json({message:"Invalid password", status: false});
        }
       const user = await new User({name:req.body.name, lastname:req.body.lastname, email:req.body.email}).save()
       const pass = await new Password({
         email: user._id,
         password: hashPassword
       }).save();
       return res.status(200).json({message:"User create", status: true});
       
      }catch(error){
        return res.status(400).json({message:error.message, status: false})
      }
      case "GET":
        try{
          const { query:{ id } } = req;
          const user = await User.find({id});
          if(!user){
            return  res.status(400).json({message:"User not found", status: false});
          }

        return  res.status(200).json({message:" It's ok but never response", status: true, user: user});
        }catch (error){
          return  res.status(400).json({message: error.message, status: false});
        }
    default:
    return res.status(400).json({status: false});

  }

}
export default handler; 