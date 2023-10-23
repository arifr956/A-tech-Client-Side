import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Home/Footer";
import Top from "../Top";

const Root = () => {
    return (
        <div className="font-roboto">
            <Top></Top>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;