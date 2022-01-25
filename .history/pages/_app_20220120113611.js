import '../styles/globals.css';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import '../styles/layout.css';

function MyApp({ Component, pageProps }) {

 const getLayout = Component.getLayout || ((page) => page)

 return getLayout(<Component {...pageProps} />)
};

export default MyApp;