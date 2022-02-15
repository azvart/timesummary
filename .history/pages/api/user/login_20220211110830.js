import User from '../../../models/user.model';
import Password from '../../../models/password.model';
import { Compare } from '../../../lib/hashcomparePassword';
import dbConnect from '../../../lib/mongooseConnect';
import jwt from 'jsonwebtoken';
async function handler(req, res){
  const {email, password} = req.body;
  const {method} = req;
  const db = await dbConnect();
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
 *  /api/user/login:
 *      get: 
 *          description: Get current user
 *      produces:
 *            -application/json
 *      parameters:
 *           -email: email
 *            in: body
 *            required: true
 *            type: string
 *            description: Echo this email
 *      responses: 
 *           200:
 *              description: Response id token and role user
 */