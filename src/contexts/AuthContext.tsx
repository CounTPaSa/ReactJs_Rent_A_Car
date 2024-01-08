import { createContext, useState } from "react";

export const AuthContext = createContext({}) //Depot Creating


//{props.children} react tarafindan otomatik bir sekilde bu componentin taglarei arasina yazilan yapiyi tasir
export const AuthProvider = (props:any) => { //Applying Depoot to app

    const [isAuthenticated, setIsAuthenticated] = useState({isAuthenticated:true})
    return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>{props.children}</AuthContext.Provider>
}