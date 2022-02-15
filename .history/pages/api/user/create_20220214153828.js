import User from '../../../models/user.model';
import dbConnect from '../../../lib/mongooseConnect';


 

async function handler(req, res){

  // const {method} = req;
  // await dbConnect();
  // switch(method){

  //   case "POST":
  //     try{
  //       const pass = await new Password({userPassword: req.body.password, userEmail: req.body.email});
  //       const user = await new User({...req.body, password:pass._id});
  //       await pass.save();
  //       await user.save();
  //       return res.status(200).json({message:"User create", status: true});
  //     }catch(e){

  //       return res.status(400).json({message:e.message, status:false});
  //     }




  //   default:
  //     return res.status(400).json({message:"Invalid Method", status: false});
  // }

  const {method} = req;
  const { email } = req.body;
  switch(method){
    case "POST":{
      try{
        const user = await User.findOne({email: email});
        if(user){
          return res.status(400).json({message:'user taken'});
        }
        else{
          const user = await new User(req.body).save();
          const accessToken = await user.createAccessToken();
          const refreshToken = await user.createRefreshToken();        
        }
      }catch(e){
        console.error(e);
        return res.status(500).json({message: "Server Error!", status: false});
      }
    }
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