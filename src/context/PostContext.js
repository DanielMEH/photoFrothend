import React,{ useState,createContext } from "react";

export const context = createContext();

export  const PostContext =({children}) => {

const [posts, setPosts] = useState([]);

  return  <context.Provider value={{
    posts,
    setPosts
  }}>
    {children}
    </context.Provider>
   
  
}

