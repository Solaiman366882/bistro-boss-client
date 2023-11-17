import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MenuByCategory = ({ menus }) => {
	return (
		<div className="max-w-screen-xl mx-auto px-5">
			<div className="grid grid-cols-2 gap-5">
				{menus?.map((menu) => (
					<div className="single-menu" key={menu._id}>
						<div className="menu-img">
							<img src={menu.image} alt="" />
						</div>
						<div className="menu-info">
							<div className="info-header">
								<h2>{menu.name}</h2>
								<p>${menu.price}</p>
							</div>
							<p>{menu.recipe}</p>
						</div>
					</div>
				))}
			</div>
			<div className="mt-6 text-center">
				<Link to="/order">
					<button className="view-btn">
						ORDER YOUR FAVOURITE FOOD
					</button>
				</Link>
			</div>
		</div>
	);
};
MenuByCategory.propTypes = {
	menus: PropTypes.array,
};
export default MenuByCategory;
