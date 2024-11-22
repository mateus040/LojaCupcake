import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Request from "../pages/request";
import ProfileDetails from "../pages/profile-details";
import Cupcakes from "../pages/admin/cupcakes/create";
import PrivateRoute from "./private-routes";
import CupcakeDetails from "../pages/details";
import NotFound from "../pages/not-found";
import ListCupcakes from "../pages/admin/cupcakes";
import EditCupcake from "../pages/admin/cupcakes/edit";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Main />} />

        <Route path="/cupcake/:cupcakeId" element={<CupcakeDetails />} />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        <Route
          path="/requests"
          element={
            <PrivateRoute>
              <Request />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile-details"
          element={
            <PrivateRoute>
              <ProfileDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/cupcakes"
          element={
            <PrivateRoute>
              <ListCupcakes />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/cupcakes/create"
          element={
            <PrivateRoute>
              <Cupcakes />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/cupcakes/edit/:cupcakeId"
          element={
            <PrivateRoute>
              <EditCupcake />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
