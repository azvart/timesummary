import { withSessionRoute } from '../../../lib/sessionsWrappers';

export default withSessionRoute(handler);

async function handler(req,res, session){
    req.session.destroy();
    res.status(200).json({message:"Logout", status: true});
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