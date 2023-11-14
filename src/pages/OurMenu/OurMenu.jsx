import { Helmet } from "react-helmet-async";
import PageBanner from "../../Components/PageBanner/PageBanner";
import bannerImg from "../../assets/menu/banner3.jpg"
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuByCategory from "../../Components/Shared/MenuByCategory/MenuByCategory";
import MenuTitle from "../../Components/Shared/MenuTitle/MenuTitle";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladsBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
    const menus = useMenu();
    const desserts = menus?.filter(menu => menu.category === 'dessert');
    const pizzas = menus?.filter(menu => menu.category === 'pizza');
    const salads = menus?.filter(menu => menu.category === 'salad');
    const soups = menus?.filter(menu => menu.category === 'soup');
    const offers = menus?.filter(menu => menu.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <PageBanner bannerImg={bannerImg} title="OUR MENU" subTitle="Would you like to try a dish?"></PageBanner>
            {/* Todays Offer */}
            <div className="section-padding">
                <SectionTitle subTitle="---Don't miss---" Title="TODAY'S OFFER"></SectionTitle>
                <div className="mt-8">
                    <MenuByCategory menus={offers}></MenuByCategory>
                </div>
            </div>
            {/* Dessert Section */}
            <div>
                <MenuTitle title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." sectionImg={dessertBg}></MenuTitle>
                <div className="mt-8 py-8">
                    <MenuByCategory menus={desserts}></MenuByCategory>
                </div>
            </div>
        {/* Pizza section */}
            <div className="section-padding">
                <MenuTitle title="PIZZA" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." sectionImg={pizzaBg}></MenuTitle>
                <div className="mt-8 py-8">
                    <MenuByCategory menus={pizzas}></MenuByCategory>
                </div>
            </div>
            {/* Salads Section */}
            <div>
                <MenuTitle title="SALADS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." sectionImg={saladsBg} ></MenuTitle>
                <div className="mt-8 py-8">
                    <MenuByCategory menus={salads}></MenuByCategory>
                </div>
            </div>
            {/* Soups Section */}
            <div className="section-padding">
                <MenuTitle title="SOUPS" subTitle="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." sectionImg={soupBg}></MenuTitle>
                <div className="mt-8 py-8">
                    <MenuByCategory menus={soups}></MenuByCategory>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;