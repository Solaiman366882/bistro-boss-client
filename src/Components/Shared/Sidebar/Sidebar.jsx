import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logoImg from "../../../assets/logo.png";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaCalendar, FaCalendarDay, FaEnvelope, FaOrcid, FaWallet } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";

const Sidebar = () => {
	return (
		<div>
			<div className="w-72 bg-[#D1A054] min-h-screen p-6">
				<div className="log-area">
					<img src={logoImg} className="w-14 mx-auto mb-6" alt="" />
				</div>
				<ul className="sidebar-list">
					<li>
						<NavLink
							to="/dashboard/userHome"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaHome></FaHome>
							<span>User Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/reservation"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaCalendar></FaCalendar>
							<span>reservation</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/paymentHistory"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaWallet></FaWallet>
							<span>payment history</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/cart"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaShoppingCart></FaShoppingCart>
							My Cart
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/review"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<MdReviews />
							add review
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/bookings"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaCalendarDay></FaCalendarDay>
							add review
						</NavLink>
					</li>
                    <div className="bg-white text-white my-5 w-full h-[2px]"></div>
                    <li>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaHome></FaHome>
							Home
						</NavLink>
					</li>
                    <li>
						<NavLink
							to="/menu"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaBars></FaBars>
							Menu
						</NavLink>
					</li>
                    <li>
						<NavLink
							to="/order"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaOrcid></FaOrcid>
							Order
						</NavLink>
					</li>
                    <li>
						<NavLink
							to="/contact"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaEnvelope></FaEnvelope>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
