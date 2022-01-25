import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from 'components/Sidebar';
import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Layout = ({children}) => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!auth.user){
      router.replace('http://localhost:3000', {shallow: true});
    }
  },[auth]);

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