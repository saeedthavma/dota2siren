import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();
const ContextProvider = (props) => {

    const [user, setUser] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setUser(token ? 1 : 0)
    }, []);

    return (
        <Context.Provider
            value={{
                user, setUser
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;