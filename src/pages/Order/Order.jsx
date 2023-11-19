import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PageBanner from "../../Components/PageBanner/PageBanner";
import bannerImg from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import "./Order.css";
import { Card } from "keep-react";
import useMenu from "../../Hooks/useMenu";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Order = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const axiosSecure = useAxiosSecure();
	const menus = useMenu();
	const desserts = menus?.filter((menu) => menu.category === "dessert");
	const pizzas = menus?.filter((menu) => menu.category === "pizza");
	const salads = menus?.filter((menu) => menu.category === "salad");
	const soups = menus?.filter((menu) => menu.category === "soup");
	const drinks = menus?.filter((menu) => menu.category === "drinks");

	const handleAddToCart = (food) => {
		console.log("add to cart handle for", food, user);
		if (user && user.email) {
			const cartItem = {
				userEmail: user.email,
				food_id: food._id,
				name: food.name,
				recipe: food.recipe,
				price: food.price,
				image: food.image,
			};
			axiosSecure.post("/carts", cartItem).then((res) => {
				console.log(res.data);
				const data = res.data;
				if (data.insertedId) {
					Swal.fire({
						title: "Sweet!",
						text: `${food.name} added to the cart`,
						imageUrl: `${food.image}`,
						imageWidth: 400,
						imageHeight: 200,
						imageAlt: "food image",
						showConfirmButton: false,
						timer: 2000,
					});
				}
			});
		} else {
			Swal.fire({
				title: "You are not Logged In",
				text: "Please login first",
				icon: "info",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, go to login",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login", { state: location.pathname });
				}
			});
		}
	};

	return (
		<div>
			<div>
				<PageBanner
					bannerImg={bannerImg}
					subTitle="Would you like to try a dish?"
					title="Order Now"
				></PageBanner>
			</div>
			<div className="tab-area section-padding max-w-screen-xl mx-auto px-5">
				<Tabs
					selectedIndex={tabIndex}
					onSelect={(index) => setTabIndex(index)}
				>
					<TabList>
						<Tab>Salad</Tab>
						<Tab>pizza</Tab>
						<Tab>soups</Tab>
						<Tab>desserts</Tab>
						<Tab>drinks</Tab>
					</TabList>
					<TabPanel>
						<div className="grid grid-cols-3 gap-5">
							{salads?.map((item) => (
								<Card
									key={item._id}
									className="w-full overflow-hidden rounded-md bg-[#F3F3F3]"
									imgSrc={item.image}
									imgSize="md"
								>
									<Card.Container className="p-6">
										<Card.Container className="my-3 text-center">
											<Card.Title className="font-semibold text-3xl text-[#151515]">
												{item.name}
											</Card.Title>
											<Card.Description className="text-[#151515]">
												{item.recipe}
											</Card.Description>
										</Card.Container>
										<Card.Container className="flex items-center justify-center gap-5">
											<button
												className="btn"
												onClick={() =>
													handleAddToCart(item)
												}
											>
												add to cart
											</button>
										</Card.Container>
									</Card.Container>
									<div className="absolute top-4 right-4 bg-[#111827] py-3 px-5 rounded-md text-white">
										$ {item.price}
									</div>
								</Card>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid grid-cols-3 gap-5">
							{pizzas?.map((item) => (
								<Card
									key={item._id}
									className="w-full overflow-hidden rounded-md bg-[#F3F3F3]"
									imgSrc={item.image}
									imgSize="md"
								>
									<Card.Container className="p-6">
										<Card.Container className="my-3 text-center">
											<Card.Title className="font-semibold text-3xl text-[#151515]">
												{item.name}
											</Card.Title>
											<Card.Description className="text-[#151515]">
												{item.recipe}
											</Card.Description>
										</Card.Container>
										<Card.Container className="flex items-center justify-center gap-5">
											<button
												className="btn"
												onClick={() =>
													handleAddToCart(item)
												}
											>
												add to cart
											</button>
										</Card.Container>
									</Card.Container>
									<div className="absolute top-4 right-4 bg-[#111827] py-3 px-5 rounded-md text-white">
										$ {item.price}
									</div>
								</Card>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid grid-cols-3 gap-5">
							{soups?.map((item) => (
								<Card
									key={item._id}
									className="w-full overflow-hidden rounded-md bg-[#F3F3F3]"
									imgSrc={item.image}
									imgSize="md"
								>
									<Card.Container className="p-6">
										<Card.Container className="my-3 text-center">
											<Card.Title className="font-semibold text-3xl text-[#151515]">
												{item.name}
											</Card.Title>
											<Card.Description className="text-[#151515]">
												{item.recipe}
											</Card.Description>
										</Card.Container>
										<Card.Container className="flex items-center justify-center gap-5">
											<button
												className="btn"
												onClick={() =>
													handleAddToCart(item)
												}
											>
												add to cart
											</button>
										</Card.Container>
									</Card.Container>
									<div className="absolute top-4 right-4 bg-[#111827] py-3 px-5 rounded-md text-white">
										$ {item.price}
									</div>
								</Card>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid grid-cols-3 gap-5">
							{desserts?.map((item) => (
								<Card
									key={item._id}
									className="w-full overflow-hidden rounded-md bg-[#F3F3F3]"
									imgSrc={item.image}
									imgSize="md"
								>
									<Card.Container className="p-6">
										<Card.Container className="my-3 text-center">
											<Card.Title className="font-semibold text-3xl text-[#151515]">
												{item.name}
											</Card.Title>
											<Card.Description className="text-[#151515]">
												{item.recipe}
											</Card.Description>
										</Card.Container>
										<Card.Container className="flex items-center justify-center gap-5">
											<button
												className="btn"
												onClick={() =>
													handleAddToCart(item)
												}
											>
												add to cart
											</button>
										</Card.Container>
									</Card.Container>
									<div className="absolute top-4 right-4 bg-[#111827] py-3 px-5 rounded-md text-white">
										$ {item.price}
									</div>
								</Card>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid grid-cols-3 gap-5">
							{drinks?.map((item) => (
								<Card
									key={item._id}
									className="w-full overflow-hidden rounded-md bg-[#F3F3F3]"
									imgSrc={item.image}
									imgSize="md"
								>
									<Card.Container className="p-6">
										<Card.Container className="my-3 text-center">
											<Card.Title className="font-semibold text-3xl text-[#151515]">
												{item.name}
											</Card.Title>
											<Card.Description className="text-[#151515]">
												{item.recipe}
											</Card.Description>
										</Card.Container>
										<Card.Container className="flex items-center justify-center gap-5">
											<button
												className="btn"
												onClick={() =>
													handleAddToCart(item)
												}
											>
												add to cart
											</button>
										</Card.Container>
									</Card.Container>
									<div className="absolute top-4 right-4 bg-[#111827] py-3 px-5 rounded-md text-white">
										$ {item.price}
									</div>
								</Card>
							))}
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default Order;
