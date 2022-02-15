import User from '../../../models/user.model';
import dbConnect from '../../../lib/mongooseConnect';


 

async function handler(req, res){

  const {method} = req;
  const { email } = req.body;
  switch(method){
    case "POST":{
      try{
        await dbConnect();
        const user = await User.findOne({email: email});
        if(user){
          return res.status(400).json({message:'user taken'});
        }
        else{
          const user = await new User(req.body).save();
          const accessToken = await user.createAccessToken();
          const refreshToken = await user.createRefreshToken();
          return res.status(201).json({accessToken, refreshToken});        
        }
      }catch(e){
        console.error(e);
        return res.status(500).json({message: "Server Error!", status: false, error: e});
      }
    }
    default:
      return res.status(500).json({message:"Server Error: Invalid method", status: false});
  }

}



export default handler;




/**
 * @swagger
 * /api/user/create:
 *   post:
 *     description: Create new user
 *     tags: [User]
 *     summary: Create new user
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        email:
 *                            type: string
 *                            description: The user email
 *                        password:
 *                              type: string
 *                              description: The user password
 *                        name:
 *                            type: string
 *                            description: The user name
 *                            example: Huilo
 *                        lastname:
 *                            type: string
 *                            description: The user lastname
 *                            example: Huilkin
 *                              
 *     responses:
 *       201:
 *         description: response
 *                                                    
 */      