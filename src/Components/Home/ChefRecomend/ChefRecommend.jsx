import {  Card } from "keep-react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import cardImg from "../../../assets/home/slide1.jpg"

const ChefRecommend = () => {
	return (
		<div className="w-full">
			<div className="max-w-screen-xl mx-auto px-20">
				<div>
					<SectionTitle
						subTitle={"---Should Try---"}
						Title={"CHEF RECOMMENDS"}
					></SectionTitle>
				</div>

				<div className="mt-8 grid gap-6 grid-cols-3">
					<Card
						className="w-ful overflow-hidden rounded-md bg-[#F3F3F3]"
						imgSrc={cardImg}
						imgSize="md"
					>
						<Card.Container className="p-6">
							<Card.Container className="my-3 text-center">
								<Card.Title className="font-semibold text-3xl text-[#151515]">Caeser Salad</Card.Title>
								<Card.Description className="text-[#151515]">
                                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
								</Card.Description>
							</Card.Container>
							<Card.Container className="flex items-center justify-center gap-5">
								<button className="btn">add to cart</button>
							</Card.Container>
						</Card.Container>
					</Card>
					<Card
						className="w-full overflow-hidden rounded-md bg-[#F3F3F3]"
						imgSrc={cardImg}
						imgSize="md"
					>
						<Card.Container className="p-6">
							<Card.Container className="my-3 text-center">
                            <Card.Title className="font-semibold text-3xl text-[#151515]">Caeser Salad</Card.Title>
								<Card.Description className="text-[#151515]">
                                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
								</Card.Description>
							</Card.Container>
							<Card.Container className="flex items-center justify-center gap-5">
								<button className="btn">add to cart</button>
							</Card.Container>
						</Card.Container>
					</Card>
					<Card
						className="w-full overflow-hidden rounded-md bg-[#F3F3F3]"
						imgSrc={cardImg}
						imgSize="md"
					>
						<Card.Container className="p-6">
							<Card.Container className="my-3 text-center">
                            <Card.Title className="font-semibold text-3xl text-[#151515]">Caeser Salad</Card.Title>
								<Card.Description className="text-[#151515]">
                                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
								</Card.Description>
							</Card.Container>
							<Card.Container className="flex items-center justify-center gap-5">
								<button className="btn">add to cart</button>
							</Card.Container>
						</Card.Container>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ChefRecommend;
