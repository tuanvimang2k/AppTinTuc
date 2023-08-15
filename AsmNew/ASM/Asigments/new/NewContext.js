
import React, { createContext, useState } from 'react'

export const NewContext = createContext();


export const NewProvider = (props) => {
    const { children } = props;
    const [news, setNews] = useState([]);
    return (
        <NewContext.Provider value={{news,setNews}}>
            {children}
        </NewContext.Provider>
    )
}