import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../../../models/user.model';



async function handler(req, res){

  const {email, password} = req.body;
  const {method} = req;

  switch(method){
    case "POST":{
      try{

      }catch(error){
        return res.status(400).json({messages:error.messages, status: false});
      }
    }
  }

}



export default handler;
