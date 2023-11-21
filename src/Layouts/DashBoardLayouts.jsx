import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar/Sidebar";

const DashBoardLayouts = () => {
	return (
		<div className="flex justify-between dashboard">
			<div>
				<Sidebar></Sidebar>
			</div>

			<div className="flex-1 py-8 px-5 bg-[#F6F6F6]">
				<div className="max-w-screen-lg mx-auto w-full">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default DashBoardLayouts;
