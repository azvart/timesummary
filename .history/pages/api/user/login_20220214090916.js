import User from '../../../models/user.model';
import { Compare } from '../../../lib/hashcomparePassword';
import { withIronSessionApiRoute } from 'iron-session/next';
import dbConnect from '../../../lib/mongooseConnect';
import jwt from 'jsonwebtoken';
async function handler(req, res){
  const {email, password} = req.body;
  const {method} = req;
  await dbConnect();
  switch(method){
    case "POST":
    {

     const user = await User.findOne({email:email}).populate('password');
     const compare = await Compare(password, user.password.userPassword);
     if(compare !== true){
       return res.status(400).json({message:"Invalid password", status: false});
     }
     const token = jwt.sign({data: user.email}, process.env.SECRET, {expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)});
     return res.status(200).json({message:"OK", status: true, id: user._id, role: user.role, token: token});
    }
    default:
      return res.status(400).json({message:"Invalid method", status: false});
  }
 
}



export default handler;


/**
 * @swagger
 * /api/user/login:
 *   post:
 *     description: Get current user
 *     tags: [User]
 *     summary: Get current User
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
 *                            example: test@gmail.com
 *                        password:
 *                              type: string
 *                              description: The user password
 *                              
 *     responses:
 *       201:
 *         description: Responses id, role and token
 */