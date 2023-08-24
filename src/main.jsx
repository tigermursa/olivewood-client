import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import store from "../src/Components/Redux/store";
import Cart from "./Components/Cart/Cart";
import Dashboard from "./Components/Dashboard/Dashboard";
import AllCustomers from "./Components/Dashboard/AllCustomers/AllCustomers";
import ProductList from "./Components/Dashboard/ProductList/ProductList";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import NotFound from "./Components/NotFound/NotFound";
import AuthProvider from "./Components/Provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/customerslist",
        element: <AllCustomers />,
      },
      {
        path: "/dashboard/productlist",
        element: <ProductList />,
      },
      {
        path: "/dashboard/addporduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/orders",
        element: <OrderList />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>{" "}
    </AuthProvider>
  </React.StrictMode>
);
