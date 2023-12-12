import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import MyProjects from "../Pages/MyProjects/MyProjects";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";

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
            },
            {
                path:"/aboutme",
                element: <AboutMe></AboutMe>
            },
            {
                path:"/myprojects",
                element: <Gallery></Gallery>
            },
            {
                path:"/myskills",
                element: <MyProjects></MyProjects>
            },
            {
                path:"/contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default Routes;