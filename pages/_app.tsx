import '../styles/globals.css';
import '../styles/variable.scss';
import '../styles/layout.scss';
import type { AppProps } from 'next/app'
import {store} from '../store/store';
import {Provider} from 'react-redux';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
