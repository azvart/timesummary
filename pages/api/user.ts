import Connect from "../../lib/connect";
import Users from '../../models/Users';
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs';
export default async function handler(req:NextApiRequest, res:NextApiResponse){
  const { method } = req;

  await Connect();

  switch(method){
    case "GET":
      try{
        const user = await Users.find({});
        res.status(200).json({success: true, data: user});
      }catch(error){
        res.status(400).json({success: false});
      }
      break;
    case "POST":
      try{
        const {email, password} = req.body;
        const hash = bcrypt.hashSync(password, 10);
        const user = await new Users({email:email, password:hash}).save();
        res.status(201).json({success: true, data: user});
      }catch(error){
        res.status(400).json({success: false});
      }
      break;
      default:
        res.status(400).json({success: false});
        break;
  }
}