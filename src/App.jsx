import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inventory from "./pages/Inventory"
import Header from "./components/Header"
import Cart from "./pages/Cart";
import End from "./components/End";
function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Inventory />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/thankyou" element={<End />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
