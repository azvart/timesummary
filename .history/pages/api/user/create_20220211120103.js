import User from '../../../models/user.model';
import Password from '../../../models/password.model';
import dbConnect from '../../../lib/mongooseConnect';


 

async function handler(req, res){

  const {method} = req;
  await dbConnect();
  switch(method){

    case "POST":
      try{
        const pass = await new Password({userPassword: req.body.password, userEmail: req.body.email});
        const user = await new User({...req.body, password:pass._id});
        await pass.save();
        await user.save();
        return res.status(200).json({message:"User create", status: true});
      }catch(e){

        return res.status(400).json({message:e.message, status:false});
      }




    default:
      return res.status(400).json({message:"Invalid Method", status: false});
  }


}



export default handler;




/**
 * @swagger
 *  /api/user/create:
 *      post:
 *         summary: Create new user
 *         tags:[User]
 *         description: Create new user
 *         requestBody:
 *                required: true
 *                content:
 *                    application/json:
 *                          schema:
 *                                type: object
 *                                properties:
 *                                        email:
 *                                           type: string
 *                                           description: The user email
 *                                        password:
 *                                            type: string
 *                                            description: The user password
 *          responses:
 *                 200:
 *                    description: Object
 *                                                    
 */      