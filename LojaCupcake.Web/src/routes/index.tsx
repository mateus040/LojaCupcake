import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Request from "../pages/request";
import ProfileDetails from "../pages/profile-details";
import Cupcakes from "../pages/admin/cupcakes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Main />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/requests" element={<Request />} />

        <Route path="/profile-details" element={<ProfileDetails />} />

        <Route path="/admin/cupcakes" element={<Cupcakes />} />
      </Routes>
    </BrowserRouter>
  );
}
