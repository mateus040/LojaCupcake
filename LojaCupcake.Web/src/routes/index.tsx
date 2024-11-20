import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
