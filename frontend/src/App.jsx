import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartAll from './landing_page/Orders/CartAll'
import Checkout from './landing_page/Orders/Checkout'
import AboutPage from './landing_page/About/AboutPage';
import Navbar from './landing_page/Navbar';
import OrderSuccess from './landing_page/Orders/OrderSuccess';
import Cart from "./landing_page/Orders/Cart";
import Products from "./landing_page/Home/Products";
import ProductDetails from "./landing_page/Home/ProductDetails";
import Hero from "./landing_page/Home/Hero";
import Qna from "./landing_page/Qna";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartAll />} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/qna" element={<Qna/>}/>
          <Route path="/orderplaced" element={<OrderSuccess/>}/>  

          <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;