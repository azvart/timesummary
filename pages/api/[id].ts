import Connect from '../../lib/connect';
import { NextApiRequest, NextApiResponse } from 'next';
import Users from '../../models/Users';
export default async function handler(req:NextApiRequest, res:NextApiResponse){
  const {query:{id}, method} = req;
  await Connect();

  switch(method){
    case "GET":
      try{
        const user = await Users.findById(id);
        if(!user){
          return res.status(400).json({success:false});
        };
        res.status(200).json({success: true, data: user});
      }catch(error){
        res.status(400).json({success: false});
      }
    break;
    case 'PUT':
      try{
        const user = await Users.findByIdAndUpdate(id,req.body,{
          new: true,
          runValidators: true
        });

        if(!user){
          return res.status(400).json({success: false});
        };

        res.status(200).json({success: true, data: user});
      }catch(error){
        res.status(400).json({success:false})
      }
    break;

    case 'DELETE':
      try{
        const deleteUser = await Users.deleteOne({_id:id});
        if(!deleteUser){
          return res.status(400).json({success: false});
        };
        res.status(200).json({success: true, data:{}})
      }catch(error){
        res.status(400).json({success:false});
      }
    break;

    default:
      res.status(400).json({success:false});
    break;
  }
}