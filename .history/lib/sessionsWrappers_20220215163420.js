import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";


const sessionOptions = {
  password:"33773377337733773377337733773377",
  cookieName:"user-session",
  cookieOptions:{
    // secure: process.env.NODE_ENV === "production",
    secure: true
  }
};


export function withSessionRoute(handler){
  return withIronSessionApiRoute(handler, sessionOptions)
};


export function withSessionSSR(handler){
  return withIronSessionSsr(handler, sessionOptions);
}