import { withSessionRoute } from '../../../lib/sessionsWrappers';

export default withSessionRoute(handler);

  function handler(req,res, session){
    res.session.destroy();
    res.status(200).json({message:"Logout", status: true});
  };
