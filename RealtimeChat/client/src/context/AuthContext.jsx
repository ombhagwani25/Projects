import { createContext ,useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider ({Children})=> {

    const [user, setUser] = useState({
        name  : "reoo",

    })

    return <AuthContext.Provider value={ {
        user
    }}>
        {Children}
    </AuthContext.Provider>
}