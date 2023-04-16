import "./App.css";

import Header from "./components/Header";
import Body from "../src/pages/Body";
import Footer from "./components/Footer";
import Offer from "./pages/Offer/Offer";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/offer",
    element: <Offer />,
  },
]);

export default App;
