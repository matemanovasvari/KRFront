import { useState } from 'react';
import Home from './Home';
import Temperature from './Temperature';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/temperature" element={<Temperature/>}></Route>
          <Route path="*" element={<h1>404, az oldal nem található</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App