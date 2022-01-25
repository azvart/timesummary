import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from 'components/Sidebar';
import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
const Layout = ({children}) => {
  const auth = useAuth();
  const router = useRouter();
  const [token, setToken] = useState(sessionStorage.getItem('token') | null);
  useEffect(() => {
    const decode = token ? jwt.decode(token, process.env.SECRET) : null;
    if(auth && !decode){
      router.push('/');
    }

  },[auth, token])
  return (
    <>
      <Navbar />
        <div className="wrapper">
          <Sidebar />
          {children}
        </div>
      <Footer />
    </>
  )
}


export default Layout;