import { Navbar } from "keep-react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import cartImg from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import "./Header.css";

const Header = () => {
	const links = (
		<>
			<li className="menu-links">
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					home
				</NavLink>
			</li>
			<li className="menu-links">
				<NavLink
					to="/contact"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					contact us
				</NavLink>
			</li>
			<li className="menu-links">
				<NavLink
					to="/dashboard"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					dashboard
				</NavLink>
			</li>
			<li className="menu-links">
				<NavLink
					to="/menu"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					our menu
				</NavLink>
			</li>
			<li className="menu-links">
				<NavLink
					to="/order"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					Order
				</NavLink>
			</li>
			<li className="menu-links">
				<NavLink
					to="/cart"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					<img src={cartImg} className="w-12 object-contain" alt="" />
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="header-section">
			<Navbar fluid={true} className="bg-transparent">
				<Navbar.Container className="flex items-center justify-between ">
					<Navbar.Container className="flex items-center">
						<Navbar.Brand>
							<Link to="/">
								<img src={logo} className="w-10 lg:w-16" alt="" />
							</Link>
						</Navbar.Brand>
					</Navbar.Container>
					<Navbar.Container
						tag="ul"
						className="lg:flex hidden items-center justify-between gap-5 py-5"
					>
						{links}
					</Navbar.Container>
					<Navbar.Collapse collapseType="sidebar">
						<Navbar.Container
							tag="ul"
							className="flex flex-col gap-5 res"
						>
							{links}
						</Navbar.Container>
					</Navbar.Collapse>
                    <Navbar.Toggle />
				</Navbar.Container>
			</Navbar>
		</div>
	);
};

export default Header;
