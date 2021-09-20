import { createContext,useState } from "react";

export const UserContext = createContext();
export const UserContextProvider = (props) => {
    const [user,setUser] = useState([]);

    return(
        <UserContext.Provider value={{user:[user,setUser]}}>
            {props.children}
        </UserContext.Provider>
    )

}
