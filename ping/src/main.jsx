import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Components/General/AboutPage.jsx";
import Page_Not_found from "./Components/General/Page_Not_found.jsx";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <Page_Not_found />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// Send web vitals to console or analytics
reportWebVitals(console.log);
export default App;
