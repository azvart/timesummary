import User from '../../../models/user.model';
import dbConnect from '../../../lib/mongooseConnect';



async function handler(req, res){

  const {method} = req;
  await dbConnect();
  switch(method){

    case "GET":
      {

        const users  = await User.find({}).exec();

        return res.status(200).json({users});
      }


    default:
      return res.status(400).json({message:"Invalid method", status: false});
  }



}





export default handler;



/**
 * 
 * @swagger 
 * /api/user/all:
 *    get:
 *        summary: All users
 *        description: Return all users
 *        requestBody:
 *              content:
 *                  application/json:
 *        responses:
 *          "200":
 *             description: Return a 200 status with objects arrays all users from database
 */
