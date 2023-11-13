import SectionTitle from "../../SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Menu2.css";

const MenuSection2 = () => {
	return (
		<div className="menu-section section-padding">
			<div className="max-w-screen-xl mx-auto px-5">
				<div>
					<SectionTitle
						subTitle={"---Check it out---"}
						Title={"FROM OUR MENU"}
					></SectionTitle>
				</div>
				<div className="featured-area flex gap-12 mt-12 items-center">
					<div className="featured-image">
						<img src={featuredImg} alt="" />
					</div>
					<div className="featured-info text-white">
						<h3 className="text-xl">March 20, 2023</h3>
						<h2 className="text-3xl">WHERE CAN I GET SOME?</h2>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                        <button className="btn">Read more</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuSection2;
