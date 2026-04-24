import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartAll from './landing_page/Orders/CartAll'
import Checkout from './landing_page/Orders/Checkout'
import AboutPage from './landing_page/About/AboutPage';
import Navbar from './landing_page/Navbar';
import OrderSuccess from './landing_page/Orders/OrderSuccess';
import Cart from "./landing_page/Orders/Cart";
import Products from "./landing_page/Home/Products";
import ProductDetails from "./landing_page/Home/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>

        {/* Navbar always visible */}
        <Navbar/>

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartAll />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart/>}/>  
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/orderplaced" element={<OrderSuccess/>}/>  

          {/* 404 Page */}
          <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;