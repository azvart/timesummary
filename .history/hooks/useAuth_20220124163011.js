import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import {useRouter} from 'next/router'


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
    console.log(response);
    setUser(response.data);
    return response.data;
  }
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('token');
  }

  return {
    user,
    signin,
    logout,
  }
}