import User from '../../../models/user.model';
import Password from '../../../models/password.model';
import connectedDb from '../../../lib/mongooseConnect';
import mongoose from 'mongoose';

async function handler(req, res){

  const {method} = req;
  switch(method){

    case "POST":
      try{

        const currentUser = await User.find({email:req.body.email});
        if(currentUser.length){
          return res.status(400).json({message:"User already yet", status: false});
        }

        const hashPassword = await Hash(req.body.password);
        if(!hashPassword){
          return res.status(400).json({message:"Invalid password", status:false});
        }
        const pass = await Password.create({userPassword: hashPassword});
        const user = await User.create({...req.body, password:pass._id});
        await pass.save();
        await user.save();
        return res.status(200).json({message:"User create", status: true});
      }catch(e){

        return res.status(400).json({message:e.message, status:false});
      }




    default:
      return res.status(400).json({message:"Invalid Method", status: false});
  }


}



export default connectedDb(handler);