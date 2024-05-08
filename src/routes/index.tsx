import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import DetailBookPage from "../pages/books/detail";

const App = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/books/:id_book",
          element: <DetailBookPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
