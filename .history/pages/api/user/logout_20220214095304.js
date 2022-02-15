import { withIronSessionApiRoute } from "iron-session/next";


export default withIronSessionApiRoute(
  function handler(req,res, session){
    res.session.destroy();
    res.status(200).json({message:"Logout", status: true});
  },
  {
    cookieName: "user session",
    password:"33773377337733773377337733773377",
    cookieOptions:{
      secure: process.env.SECRET
    }
  }
)