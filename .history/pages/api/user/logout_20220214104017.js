import { withSessionRoute } from '../../../lib/sessionsWrappers';

export default withSessionRoute(handler);

async function handler(req,res, session){
    req.session.destroy();
    res.status(200).json({message:"Logout", status: true});
};
