import { useState, useContext, createContext } from 'react';
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
  const [user, setUser] = useState({
    user:null,
    visible:false
  });

  const signin = async (email, password) => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/api/user/login",
      data: {
        email: email,
        password: password
      },
    });
    setUser({...user, ...response.data});
    return response.data;
  }
  const logout = () => {
    setUser({...user, user:null});
  }
  const visibleSideBar = () => {
    setUser({...user, visible:!user.visible})
  }
  return {
    user,
    signin,
    logout,
    visibleSideBar
  }
}