import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "../assets/css/bistro.css";
import Header from "../Components/Header/Header";

const MainLayouts = () => {
	const location = useLocation();
    const isLogin = location.pathname.includes('login');
	return (
		<div>
			<div className="relative">
				{isLogin || <Header></Header>}
			</div>
			<div>
				<Outlet></Outlet>
			</div>
			<div>
				{isLogin || <Footer></Footer>}
			</div>
		</div>
	);
};

export default MainLayouts;
