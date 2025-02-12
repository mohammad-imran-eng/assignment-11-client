import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        <Toaster />
        </>
    );
};

export default MainLayout;

