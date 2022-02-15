import dbConnect from '../../../lib/mongooseConnect';
import jwt from 'jsonwebtoken';




async function handler(req,res){
  const {method} = req;
  console.log(req);

  await dbConnect();


  switch(method){

    case "GET":{
      console.log(req.Headers('authorization'));
      return res.status(200).json({mesasge:"OK"});
    }
    default:
      return res.status(400).json({message:"Invalid method", status:"OK"});
  }


}





export default handler;


