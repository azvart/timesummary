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
 *  components:
 *    all:
 *    AllResponses:
 *          type: object
 *          properties:
 *                name: string
 * definitions:
 * /all:
 *   get:
 *      description: Get all users from database
 *      produces:
 *          -application/json
 *      parameters:
 *        -name: name
 *        in: query
 *        requered: true
 *        type: object
 *        description: Echo this name
 *      responses:
 *          200:
 *              description: Responses Array of objects
 */
