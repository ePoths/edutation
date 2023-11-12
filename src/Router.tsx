import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import App from "./Root";
import About from "./screen/About";
import HomePage from "./screen/HomePage";
import NotFound from "./screen/NotFound";
import ErrorComponent from "./components/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "",
        element: <HomePage />,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
