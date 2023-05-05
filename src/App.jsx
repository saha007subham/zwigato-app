import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "../src/pages/Body";
import Footer from "./components/Footer";
import Offer from "./pages/Offer";
import ErrorPage from "./components/ErrorPage";
import CartPage from "./pages/CartPage";
import RestrauDetails from "./pages/RestrauDetails";

//modified

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/restraunts/:id",
        element: <RestrauDetails />,
      },
    ],
  },
]);

export default App;
