import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("Guest")
    const [role, setRole] = useState(null)
     const [loading, setLoading] = useState(true)
     const [userId, setUserId] = useState(null);

     useEffect(()=>{
        const checkAuth = async ()=>{
            try{
                const res = await fetch(`${import.meta.env.VITE_API_URL}/user/me`, 
        
                    {
                        method: 'GET', 
                        credentials: "include"}
                );
                if(res.ok){
                    const data = await res.json();
                    setIsLoggedIn(true)
                    setRole(data.user.role);
                    setUsername(data.user.name)
                     setUserId(data.user.id);
                }
            }catch(err){
                console.log("not logged in");
                
            }finally{
                setLoading(false);
            }
        };
        checkAuth();
        
     }, []);
     
    const login = async () => {
  setLoading(true);

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/me`, {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      setIsLoggedIn(true);
      setRole(data.user.role);
      setUsername(data.user.name);
      setUserId(data.user.id);
    }
  } catch (err) {
    console.error("Auth refresh failed");
  } finally {
    setLoading(false);
  }
};
      const logout = async() => {
        await fetch(`${import.meta.env.VITE_API_URL}/user/logout`, {
            method: "POST",
            credentials: "include"
        })

    setIsLoggedIn(false);
    setUsername("Guest");
    setRole(null);
     setUserId(null);
    
  };
  return (
    <AuthContext.Provider value={{isLoggedIn, username, login, logout, role, loading, userId}}>
        {children}
    </AuthContext.Provider>
)
}
