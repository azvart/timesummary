import { useState, useContext, createContext, useEffect } from 'react';
import useUpdateEffect from './useUpdateEffect';
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

  // useUpdateEffect(() => {
  //   if(!user){
  //   API({
  //     method:'GET',
  //     url:"/api/user/auth"
  //   })
  //   .then((response) => {
  //     setUser({...user, ...response.data});
  //   })
  //   .catch((error)=>{
  //     console.error(error);
  //   })
  // }
  // },[user]);
  useEffect(() => {
    if(!user.token && !user.id){
      API({
        method:"GET",
        url:'/api/user/auth'
      })
      .then((response) => {
        
        setUser({...user, ...response.data});
        
      })
      .catch((error) => {
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
      },
    });
    API.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    setUser({...user,... response.data});
    return response.data;
  }
  const logout = async () => {

     API({
      method:"GET",
      url:"/api/user/logout"
    }).then((response) => {
      if(response.data.status){
      setUser({user: null, visible: false, roleVisible: false });
      }
    }).catch((error) => {
      console.error(error)
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