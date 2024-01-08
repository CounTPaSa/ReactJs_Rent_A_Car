import { createContext } from "react";

export const AuthContext = createContext({}) //Depot Creating


//{props.children} react tarafindan otomatik bir sekilde bu componentin taglarei arasina yazilan yapiyi tasir
export const AuthProvider = (props:any) => { //Applying Depoot to app
    return <AuthContext.Provider value={{isAuthenticated:false}}>{props.children}</AuthContext.Provider>
}