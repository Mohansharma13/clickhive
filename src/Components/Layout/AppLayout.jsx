import Footer from "../UI/Footer";
import Headder from "../UI/Headder";
import { Outlet } from "react-router-dom";

function AppLayout(){
    return(
        <>
        <Headder/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default AppLayout;