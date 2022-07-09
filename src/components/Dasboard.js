import React,{useState} from 'react'

export const Dasboard = () => {
    const [user, setUser] = useState(null)

  return <> {user ?  "Gracias por estar aquí" : "No estas registrados"}</>
    
  
}
