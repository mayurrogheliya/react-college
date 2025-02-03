import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ id: "Loading...", name: "Loading..." });
    setTimeout(() => {
        setUser({ id: 118, name: "Mayur Rogheliya" });
    }, 5000);

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    );
}