import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
        path: "/login",
        element: <Login></Login>
      },

  ]);
  

  export default router;