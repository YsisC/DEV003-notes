import '../styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect
} from "firebase/auth"
import { auth } from "../firebase.config";

const Noop = ({ children }) => <>{children}</>;
// const router = useRouter();

// Sign in and sign out functins
const signIn = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  signInWithRedirect(auth, provider);
  // router.push('/')
}
const logOut = () => signOut(auth);


// My App an
function MyApp({ Component, pageProps }) {
  const Noop = ({ children }) => <>{children}</>;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      (user) => {
        if (user) {
          setUser(user);
        } else {
          // router.push('/login');
          console.log("user no registrado")
        }
      });
    return () => {
      unsubscribe()
    }
  }, []);


  return (
    <Component {...pageProps}
      user={user}
      signIn={signIn}
      logOut={logOut}
    />


  )

}

export default MyApp
