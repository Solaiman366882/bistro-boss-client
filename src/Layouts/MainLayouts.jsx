
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "../assets/css/bistro.css";


const MainLayouts = () => {
    return (
        <div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayouts;