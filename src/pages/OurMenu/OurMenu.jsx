import { Helmet } from "react-helmet-async";
import PageBanner from "../../Components/PageBanner/PageBanner";
import bannerImg from "../../assets/menu/banner3.jpg"

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <PageBanner bannerImg={bannerImg} title="OUR MENU" subTitle="Would you like to try a dish?"></PageBanner>

        </div>
    );
};

export default OurMenu;