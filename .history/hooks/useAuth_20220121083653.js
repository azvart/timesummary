import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
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

  const signin = (email, password) => {
    return axios({
      method:"POST",
      url:"http://localhost:3000/api/user/login",
      data:{
        email: email,
        password: password,
      }
    }).then((response) => {
      setUser(response);
      return response;
    })
  }

  return {
    user
  }
}