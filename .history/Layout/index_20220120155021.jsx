import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const Layout = ({children}) => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    token: sessionStorage.getItem('token'),
    id: sessionStorage.getItem('id')
  })
  useEffect(() => {
   if(!credentials.token && !credentials.id){
     return router.push('/');
   }
  },[credentials]);
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