import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/login.scss';
import { ProvideAuth } from '../hooks/useAuth';
function MyApp({ Component, pageProps }) {

 const getLayout = Component.getLayout || ((page) => page)

 return getLayout(<ProvideAuth><Component {...pageProps} /></ProvideAuth>)
};

export default MyApp;
