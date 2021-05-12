import React, { Component, createContext, useEffect, useState } from "react";
export const UserContext = createContext({ user: null });



const UserProvider = (props) => {
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={user}>
        {props.children}
      </UserContext.Provider>
    )

}

export default UserProvider