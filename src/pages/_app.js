import '../styles/globals.css'
import { AuthContextProvider, UserAuth } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
