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