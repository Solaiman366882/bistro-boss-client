import PropTypes from "prop-types";
import "./PageBanner.css";
const PageBanner = ({ bannerImg,title,subTitle }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${bannerImg})`,
			}}
			className="banner-section bg-no-repeat bg-fixed bg-cover bg-center h-screen w-full flex justify-center items-center"
		>
            <div className="hero">
                <h2>{title}</h2>
                <p>{subTitle}</p>
            </div>
        </div>
	);
};
PageBanner.propTypes = {
	bannerImg: PropTypes.string,
	title: PropTypes.string,
	subTitle: PropTypes.string,
};
export default PageBanner;
