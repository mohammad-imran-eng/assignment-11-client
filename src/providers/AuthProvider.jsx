import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase_init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=> {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (updateData)=> {
        return updateProfile(auth.currentUser,updateData)
    }
    const signInUser = (email,password)=> {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = ()=> {
        return signOut(auth)
    }

    const googleLogin = ()=> {
        return signInWithPopup(auth,googleProvider)

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=> {
            if(user){
                setUser(user);
                // const userEmail = {email: user?.email}
                // axios.post('http://localhost:5000/jwt',userEmail,{withCredentials:true})
                // .then(res=> console.log('login',res.data))
                setLoading(false);
            }
            else {
                setUser(null);
                // axios.post('http://localhost:5000/logout',{},{withCredentials:true})
                // .then(res=> console.log('logout',res.data))
                // setLoading(false);
            }

            return ()=> {
                unsubscribe();
            }
        })
    } ,[])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signInUser,
        signOutUser,
        googleLogin,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;