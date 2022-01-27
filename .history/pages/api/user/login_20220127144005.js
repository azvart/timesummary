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
     const compare = await Compare(password, user.password.userPassword);
     if(compare !== true){
       return res.status(400).json({message:"Invalid password", status: false});
     }
     return res.status(200).json({message:"OK", status: true, user: user});
    }
    default:
      return res.status(400).json({message:"Invalid method", status: false});
  }

}



export default connectedDb(handler);
