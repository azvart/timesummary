import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/login.scss';
import '../styles/card.scss';
import 'semantic-ui-css/semantic.min.css';
import { ProvideAuth } from '../hooks/useAuth';
function MyApp({ Component, pageProps }) {

 const getLayout = Component.getLayout || ((page) => page)

 return <ProvideAuth>{getLayout(<Component {...pageProps} />)}</ProvideAuth>
};

export default MyApp;
