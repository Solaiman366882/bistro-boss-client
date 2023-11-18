import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Rating from "react-rating";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import "./testimonial.css";
const Testimonial = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="w-full bg-white">
			<div className="max-w-screen-xl mx-auto px-5">
				<div>
					<SectionTitle
						subTitle="---What Our Clients Say---"
						Title="TESTIMONIALS"
					></SectionTitle>
				</div>
				<div className="testimonial-section mt-8">
					<div className="slider-area bg-white">
						<AwesomeSlider
							animation="foldOutAnimation"
							cssModule={[CoreStyles, AnimationStyles]}
							className="bg-white"
						>
							{reviews?.map((review) => (
								<div className="single-slider" key={review._id}>
									<div className="ratings">
										<Rating
											emptySymbol={<BsStar className="text-[#444444] text-8xl"></BsStar>}
											fullSymbol={
												<BsFillStarFill className="text-[#CD9003] text-8xl"></BsFillStarFill>
											}
											initialRating={review.rating}
											readonly
										/>
									</div>
									<div className="icon">
										<FaQuoteLeft className=" text-10xl text-[#151515] mx-auto my-10"></FaQuoteLeft>
									</div>
									<p>{review.details}</p>
									<h2>{review.name}</h2>
								</div>
							))}
						</AwesomeSlider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
