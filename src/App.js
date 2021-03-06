import "./App.css";
import { Routes ,Route, Navigate } from "react-router-dom";
//context
import ProductContextProvider from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";
//Component
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <ProductContextProvider>
      <CardContextProvider>
        <Navbar/>
      <Routes>
       <Route path="/products" element={<Store />} />
       <Route path="/cart" element={<ShopCart />} />
       <Route path="/products/:id" element={<ProductDetail />} />
       <Route path="/" element={<Navigate to='/products' />} />
      </Routes>
      </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
