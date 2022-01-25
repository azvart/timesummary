import jwt from 'jsonwebtoken';
import User from '../../../models/user.model';
import { Compare} from '../../../lib';
import connectedDb from '../../../lib/mongooseConnect';

async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;
  switch(method){
    case "POST":
      try{

      }catch(e){
        return res.status(400).json({message:e.message, status: false});
      }
    default:
      return res.status(200).json({message: 'Invalid method', status: false});
  }

}



export default connectedDb(handler);
