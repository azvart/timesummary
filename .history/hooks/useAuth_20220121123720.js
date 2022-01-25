import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
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
    sessionStorage.setItem('token', response.data.token);
    setUser(response.data);
    return response.data;
  }
  const logout = () => {
    setUser(null);
  }
  useEffect(() => {
    const verifytoken = async () => {
    const token = sessionStorage.getItem('token').split(" ")[1];
    const decodejwt = await jwt.verify(token,process.env.SECRET);
    console.log(decodejwt);
    }
    return () => verifytoken();
  },[user])
  return {
    user,
    signin,
    logout,
  }
}