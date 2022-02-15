import { withSessionRoute } from '../../../lib/sessionsWrappers';
import Token from '../../../models/token.model';
import dbConnect from '../../../lib/mongooseConnect';
export default withSessionRoute(handler);

async function handler(req,res, session){
    try{
        await dbConnect();
        const { refreshToken } = req.body;
        await Token.findOneAndDelete({token: refreshToken});
        req.session.destroy();
        return res.status(200).json({message:"Logout", status: true});
    }catch(e){
        console.error(e);
        return res.status(500).json({message:"Server Error", status: false, error: e});
    }
    
};


/**
 * @swagger
 * /api/user/logout:
 *   get:
 *     description: Destroy user session
 *     tags: [User]
 *     summary:  Destroy user session
                            
 *     responses:
 *       201:
 *         description: Responses id, role and token
 */