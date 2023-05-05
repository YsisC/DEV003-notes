// import { useContext, createContext, useEffect, useState } from "react";
// import {
//     signInWithPopup,
//     GoogleAuthProvider,
//     signOut,
//     onAuthStateChanged,
//     signInWithRedirect
// } from "firebase/auth"
// import { auth } from "../firebase.config";

// const AuthContext = createContext()



// export const AuthContextProvider = ({ children }) => {
//     const [user, setUser] = useState({})
//     const googleSignIng = () => {
//         const provider = new GoogleAuthProvider();
//         signInWithRedirect(auth, provider);
//     }

//     const logOut = () => {
//         signOut(auth)
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth,
//             (currentUser) => {
//                 if (currentUser) {
//                     // User is signed in, see docs for a list of available properties
//                     // https://firebase.google.com/docs/reference/js/firebase.User
//                     // const uid = user.uid;
//                     setUser(currentUser)
//                     // ...
//                 } else {
//                     // User is signed out
//                     console.log("user no registrado")
//                 }

//             })
//         return () => {
//             unsubscribe()
//         }
//     }, [])
//     return (
//         <AuthContext.Provider value={{googleSignIng, logOut, user}}>
//             {children}
//         </AuthContext.Provider>
//     )

// }
// export const UserAuth=()=>{
//     return useContext(AuthContext)
// }