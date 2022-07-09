import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from "../home/Home";
 import { Dasboard } from '../components/Dasboard';
export const IndexRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dasboard" element={<Dasboard/>} />
            <Route path="*" element={<div>Pagina no encontrada vuelve a la pagina inicial</div>} />
            
        </Routes>
    </div>
  )
}
