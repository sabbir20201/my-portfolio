import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div className="max-w-6xl mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;