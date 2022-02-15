import { useState, useContext, createContext, useEffect } from 'react';
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
    visible:false
  });
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(!user.id && !user.token && token ){
      axios({
        url:'http://localhost:3000/api/user/auth',
        method:'get',
        headers:{
          authorization: token
        }
      }).then((response) => {
        setUser({...user, ...response});
      }).catch((error) => {
        sessionStorage.removeItem('token');
        console.error(error);
      })
    }
  },[user]);
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
    sessionStorage.setItem('token', response.data.token);
    return response.data;
  }
  const logout = () => {
    sessionStorage.removeItem('token');
    setUser({...user, id:null, token:null});
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