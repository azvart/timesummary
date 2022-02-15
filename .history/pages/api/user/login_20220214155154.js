import User from '../../../models/user.model';
import { Compare } from '../../../lib/hashcomparePassword';
import { withSessionRoute } from '../../../lib/sessionsWrappers';
import dbConnect from '../../../lib/mongooseConnect';
import jwt from 'jsonwebtoken';
// async function handler(req, res){
//   const {email, password} = req.body;
//   const {method} = req;
//   await dbConnect();
//   switch(method){
//     case "POST":
//     {

//      const user = await User.findOne({email:email}).populate('password');
//      const compare = await Compare(password, user.password.userPassword);
//      if(compare !== true){
//        return res.status(400).json({message:"Invalid password", status: false});
//      }
//      const token = jwt.sign({data: user.email}, process.env.SECRET, {expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)});
//      return res.status(200).json({message:"OK", status: true, id: user._id, role: user.role, token: token});
//     }
//     default:
//       return res.status(400).json({message:"Invalid method", status: false});
//   }
 
// }



// export default handler;

export default withSessionRoute(handler);

async function handler(req,res){
    // const { email, password } = req.body;
    // const { method } = req;
    // await dbConnect();

    // switch(method){
    //   case "POST": {
    //     const user = await User.findOne({email: email}).populate('password');
    //     const compare = await Compare(password, user.password.userPassword);
    //     if(compare !== true){
    //       return res.status(400).json({message: "Invalid password", status: false})
    //     }
    //     const token = jwt.sign({data: user.email}, process.env.SECRET, { expiresIn: '1h' });
    //     req.session.user = token;
    //     await req.session.save();
    //     return res.status(200).json({message: "OK", status: true, id: user._id, role: user.role, token: token});
    //   }

    //   default:
    //     return res.status(400).json({message:"Invalid method", status: false});
    // }
    const { email, password } = req.body;
    const { method } = req;
    switch(method){
      case "POST":{
        try{
          await dbConnect();
          const user = await User.findOne({email: email});
          if(!user){
            return res.status(404).json({message:"No user found!"});
          }
          const valid = await Compare(password, user.password);
          if(valid){
            const accessToken = await user.createAccessToken();
            const refreshToken = await user.createRefreshToken();

            return res.status(201).json({accessToken, refreshToken});
          }
        }catch(e){
          return res.status(500).json({message:" Server Error", status: false});
        }
      }
      default:
        return res.status(500).json({message:"Server error: Invalid method", status: false});
    }
  };

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