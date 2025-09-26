import Home from './Home';
import Temperature from './Temperature';
import Calculator from './Calculator';
import Bmi from './Bmi';
import Currency from './Currency';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/temperature" element={<Temperature/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
          <Route path="/bmi" element={<Bmi/>}></Route>
          <Route path="/currency" element={<Currency/>}></Route>
          <Route path="*" element={<h1>404, az oldal nem található</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App