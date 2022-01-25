import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const Layout = ({children}) => {
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