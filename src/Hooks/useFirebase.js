import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    
    
    const googleSignIn = () =>{
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
        
    }

    useEffect(() =>{
        
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                
              setUser(user);
              
              
            }
          });
          return () => unSubscribed;
    },[])
    return {
        googleSignIn,user,setUser,logOut,loading
    };
};

export default useFirebase;