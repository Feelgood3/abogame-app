import { createContext, useContext, useEffect, useState } from 'react'
import { firebaseConfig } from '../../firebaseconfig'
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signOut() {
    return auth.signOut();
  }

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function getUser() {
    return auth.currentUser
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    getUser,
    login,
    signOut,
    signUp
  }

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  )

}
