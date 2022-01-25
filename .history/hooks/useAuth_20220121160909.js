import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import {useRouter} from 'next/router'
import jwt from 'jsonwebtoken';


const authContext = createContext();



export function ProvideAuth({children}){
  const auth = useProvideAuth() ;

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
};


export const useAuth = () => {
  return useContext(authContext)
};

function useProvideAuth(){
  const router = useRouter();
  const [user, setUser] = useState(null);

  const signin = async (email, password) => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/api/user/login",
      data: {
        email: email,
        password: password
      }
    });
    sessionStorage.setItem('token', response.data.token.split(" ")[1])
    setUser(response.data);
    return response.data;
  }
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('token');
    return true;
  }
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const redirected = () => {
      if(logout){
        console.log('redirected')
        router.push('/');
      }else{
        const decode = jwt.decode(token, process.env.SECRET);
        
        decode ? router.push(`/${decode.id}`) : null
      }
    }
    redirected();
  }, [user])
  return {
    user,
    signin,
    logout,
  }
}