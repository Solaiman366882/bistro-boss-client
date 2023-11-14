import PropTypes from "prop-types";
import "./MenuTitle.css";

const MenuTitle = ({sectionImg,title,subTitle}) => {
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${sectionImg})`,
				}}
				className="banner-section bg-no-repeat bg-fixed bg-cover bg-center h-[700px] w-full flex justify-center items-center"
			>
				<div className="title-area">
					<h2>{title}</h2>
					<p>{subTitle}</p>
				</div>
			</div>
		</div>
	);
};
MenuTitle.propTypes = {
	sectionImg: PropTypes.string,
	title: PropTypes.string,
	subTitle: PropTypes.string,
};
export default MenuTitle;
