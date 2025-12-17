import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("Guest")
    const [role, setRole] = useState(null)
     const [loading, setLoading] = useState(true)

     useEffect(()=>{
        const checkAuth = async ()=>{
            try{
                const res = await fetch(`${import.meta.env.VITE_API_URL}/user/me`, 
                    {credentials: "include"}
                );
                if(res.ok){
                    const data = await res.json();
                    setIsLoggedIn(true)
                    setRole(data.user.role);
                }
            }catch(err){
                console.log("not logged in");
                
            }finally{
                setLoading(false);
            }
        };
        checkAuth();
        
     }, []);
     
     const login = (user)=>{
       setIsLoggedIn(true);
       setUsername(user.name);
       setRole(user.role);

     }
      const logout = async() => {
        await fetch(`${import.meta.env.VITE_API_URL}/user/logout`, {
            credentials: "include"
        })

    setIsLoggedIn(false);
    setUsername("Guest");
    setRole(null);
  };
  return (
    <AuthContext.Provider value={{isLoggedIn, username, login, logout, role, loading}}>
        {children}
    </AuthContext.Provider>
)
}
