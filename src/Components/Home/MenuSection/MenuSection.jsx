import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import "./MenuSection.css";

const MenuSection = () => {
	const [menus, setMenus] = useState([]);
	const [displayMenus, setDisplayMenus] = useState([]);
	const [isShowAll, setShowAll] = useState(false);

	useEffect(() => {
		fetch("http://localhost:5000/menus")
			.then((res) => res.json())
			.then((data) => {
				setMenus(data);
				setDisplayMenus(data.slice(0, 6));
			});
	}, []);

	return (
		<div>
			<div className="max-w-screen-xl mx-auto px-5">
				<div>
					<SectionTitle
						Title={"FROM OUR MENU"}
						subTitle={"---Check it out---"}
					></SectionTitle>
				</div>
				<div className="menu-area grid grid-cols-2 gap-x-4 gap-y-6 mt-12">
					{isShowAll
						? menus?.map((menu) => (
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
								</div>))
						: displayMenus?.map((menu) => (
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
								</div> ))
                        }
				</div>
				<div className="mt-8 text-center">
					<button
						className="view-btn"
						onClick={() => setShowAll(!isShowAll)}
					>
						{isShowAll ? " View Less" : "View Full  Menu"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default MenuSection;
