import { createContext, useContext, Context } from 'react'
import useFirebaseStore from '../lib/useFirebaseStore'

const dbUserContext = createContext({
    showModal: false,
    openModal: () => { },
    updateNote: async () => { },
    // deleteNote: async () => { },


})
export function DbUserProvider({ children }) {
    const dbF =  useFirebaseStore();
    return <dbUserContext.Provider value={dbF}>{children}</dbUserContext.Provider>
}
// custom hook to use the firestore
export const useDb =()=> useContext(dbUserContext)