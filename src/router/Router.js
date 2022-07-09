import { Route, Routes } from "react-router-dom";

import React from 'react'

export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
 )
}
