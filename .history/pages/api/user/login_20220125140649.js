import User from '../../../models/user.model';
import {Compare} from '../../../lib/hashcomparePassword';
import connectedDb from '../../../lib/mongooseConnect';
async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;
  switch(method){
    case "POST":
    {
     const user = await User.findOne({email:email}).populate('password');
     return res.status(200).json({user:user.password.userPassword});
    }
    default:
      return res.status(400).json({message:"Invalid method", status: false});
  }

}



export default connectedDb(handler);
