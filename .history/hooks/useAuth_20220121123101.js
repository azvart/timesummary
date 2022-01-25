import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { decode } from 'jsonwebtoken/decode';
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
  return {
    user,
    signin,
    logout,
  }
}