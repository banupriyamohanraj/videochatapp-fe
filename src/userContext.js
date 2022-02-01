import React, { useState } from 'react';

let userContext = React.createContext();

export default userContext;


export const UserProvider = ({children})=>{

    let [userlist,setuserlist] = useState([])
    let [ userLoggedIn,setuserLoggedIn] = useState(false)
   
    return <userContext.Provider value={{userlist,setuserlist,userLoggedIn,setuserLoggedIn}}>
        {children}
    </userContext.Provider>
}