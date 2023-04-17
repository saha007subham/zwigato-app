import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "../src/pages/Body";
import Footer from "./components/Footer";
import Offer from "./pages/Offer/Offer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Instamart from "./components/Instamart/Instamart";

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
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

export default App;
