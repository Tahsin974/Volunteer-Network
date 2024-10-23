import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

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
        
        const unSubscribed = onAuthStateChanged(auth, (currentUser) => {

            setLoading(false);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email:userEmail}
            setUser(currentUser);
            if (currentUser) {
                axios.post('https://volunteer-network-server-rose-xi.vercel.app/jwt',loggedUser,{withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                })
            }
            else{
                axios.post('https://volunteer-network-server-rose-xi.vercel.app/logout',loggedUser,{withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                })
            }
          });
          return () => unSubscribed;
    },[])
    return {
        googleSignIn,user,setUser,logOut,loading
    };
};

export default useFirebase;