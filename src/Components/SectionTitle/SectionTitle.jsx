import PropTypes from 'prop-types';
const SectionTitle = ({subTitle,Title}) => {
    return (
        <div className="max-w-lg mx-auto text-center title-section">
            <h3 className="sub-title text-xl ">{subTitle}</h3>
            <h2 className="title">{Title}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    subTitle:PropTypes.string,
    Title:PropTypes.string
}
export default SectionTitle;