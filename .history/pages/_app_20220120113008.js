import '../styles/globals.css';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import '../styles/layout.css';

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return ( <Component {...pageProps} />)
};

export default MyApp;
