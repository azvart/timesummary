import { Hash} from "../../../lib";
import clientPromise from '../../../lib/mongooseConnect';
import User from '../../../models/user.model';


async function handler(req, res){

  const {method} = req;
  const client = await clientPromise;
  switch(method){

    case "POST":
      try{

        const currentUser = await User.find({email: req.body.email});
        console.log(currentUser);
        if(currentUser.length){
          return res.status(400).json({message:"User already yet", status: false});

        }
        const hashPassword = await Hash(req.body.password);
        if(!hashPassword){
          return res.status(400).json({message:"invalid password",status: false});
        }
        const pass = await db.collection('passwords').insertOne({password: hashPassword});
        await db.collection('users').insertOne({name: req.body.name, lastname:req.body.lastname, password: pass.insertedId, email: req.body.email});
        await db.connection.close();
        return res.status(200).json({message:"User create", status: true});
      }catch(e){

        return res.status(400).json({message:e.message, status:false});
      }




    default:
      return res.status(400).json({message:"Invalid Method", status: false});
  }


}



export default handler;