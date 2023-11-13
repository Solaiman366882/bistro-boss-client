import Header from "../../Components/Header/Header";
import Banner from "../../Components/Home/Banner/Banner";
import BossSection from "../../Components/Home/BossSection/BossSection";
import CallSection from "../../Components/Home/CallSection/CallSection";
import ChefRecommend from "../../Components/Home/ChefRecomend/ChefRecommend";
import MenuSection from "../../Components/Home/MenuSection/MenuSection";
import MenuSection2 from "../../Components/Home/MenuSection2/MenuSection2";
import OrderOnline from "../../Components/Home/OrederOnline/OrderOnline";
import Testimonial from "../../Components/Home/Testimonial/Testimonial";

const Home = () => {
	return (
		<section className="w-full relative">
			<div>
				<Header></Header>
			</div>
			<div>
				<Banner></Banner>
			</div>
			<div className="section-padding">
				<OrderOnline></OrderOnline>
			</div>
			<div>
				<BossSection></BossSection>
			</div>
			<div className="section-padding">
				<MenuSection></MenuSection>
			</div>
			<div>
				<CallSection></CallSection>
			</div>
			<div className="section-padding">
				<ChefRecommend></ChefRecommend>
			</div>
			<div>
				<MenuSection2></MenuSection2>
			</div>
			<div className="section-padding">
				<Testimonial></Testimonial>
			</div>
		</section>
	);
};

export default Home;
