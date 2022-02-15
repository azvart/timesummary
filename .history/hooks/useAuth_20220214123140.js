import { useState, useContext, createContext } from 'react';
import API from '../config/index';


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
  const signin = async (email, password) => {
    const response = await API({
      method: "POST",
      url:"/api/user/login",
      data:{
        email: email,
        password: password,
      },
    });
    API.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    setUser({...user,... response.data});
    return response.data;
  }
  const logout = async () => {
    setUser({...user, id:null, token:null});
    await API({
      method:"GET",
      url:"/api/user/logout"
    });
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