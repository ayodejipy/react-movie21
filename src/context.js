import React, { useState, createContext } from "react";

// use react createContext hook to create an instance of createContext
export const userContext = createContext();

// Provider to wrap our application, e.g App.js, takes the app component as its children
const UserProvider = ({ children }) => {
    const [state, setState] = useState(undefined);
    
    return (
        <userContext.Provider value={[ state, setState ]}> {children} </userContext.Provider>
    )
}

export default UserProvider;