import { useState, useContext, createContext, useEffect } from 'react';
import API from '../config/index';
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
  const [user, setUser] = useState({
    user:null,
    visible:false,
    roleVisible:false
  });
  useEffect(() => {
    if(!user.id && !user.token ){
      API({
        url:"/api/user/auth",
        method:"GET"
      }).then((response) => {
        setUser({...user,...response.data});
      }).catch((error) => {
        console.error(error);
      })
    }
  },[user]);
  const signin = async (email, password) => {
    const response = await API({
      method: "POST",
      url:"/api/user/login",
      data:{
        email: email,
        password: password,
      }
    });
    API.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    setUser({...user,... response.data});
    return response.data;
  }
  const logout = async () => {
    setUser({...user, id:null, token:null});
    await API({
      method:"GET",
      url:"/api/user/logout"
    })
  }
  const visibleSideBar = () => {
    setUser({...user, visible:!user.visible})
  }
  const roleSideBar = () => {
    setUser({...user, roleVisible: !user.roleVisible});
  }
  return {
    user,
    signin,
    logout,
    visibleSideBar,
    roleSideBar
  }
}