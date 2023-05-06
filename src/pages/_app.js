import '../styles/globals.css'
import { AuthUserProvider } from '../context/AuthUserContext';

// My App an
function MyApp({ Component, pageProps }) {

    return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}



export default MyApp
