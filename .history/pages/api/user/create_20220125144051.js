import User from '../../../models/user.model';
import Password from '../../../models/password.model';
import connectedDb from '../../../lib/mongooseConnect';
async function handler(req, res){

  const {method} = req;
  switch(method){

    case "POST":
      try{
        const pass = await new Password({userPassword: req.body.password, userEmail: req.body.email});
        const user = await new User({...req.body, password:pass._id});
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