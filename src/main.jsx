import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./Layout.jsx";
import About from "./pages/About.jsx";
import Loan from "./components/Loan.jsx";
import LoanDetails from "./pages/Loandetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    elemmet: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/loandetail",
        element: <LoanDetails />,
      },
      {
        path: "/loan",
        element: <Loan />,
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
