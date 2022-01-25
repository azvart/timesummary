import { Hash } from "../../../lib";
import User from '../../../models/user.model';
import Password from '../../../models/password.model';
import dbConnect from '../../../lib/mongooseConnect';



async function handler(req, res){

  const {method} = req;

  await dbConnect();

  switch(method){

    case "POST":
      try{

        const currentUser = await User.find({email: rea.body.email});
        if(currentUser){
          return res.status(400).json({message:"User already yet", status: false});
        }
        const hashPassword = await Hash(req.body.password);

        const pass = await Password.create({userPassword:hashPassword});

        const user = await new User({name: req.body.name,lastname: req.body.lastname, email: req.body.email, password: pass._id}).save();
        pass.save();
        return res.status(200).json({message:"User create", status: true});

      }catch(e){

        return res.status(400).json({message:e, status:false});
      }




    default:
      return res.status(400).json({message:"Invalid Method", status: false});
  }


}



export default handler;