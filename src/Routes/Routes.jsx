import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/myskills",
                element: <Home></Home>
            }
        ]
    }
])

export default Routes;