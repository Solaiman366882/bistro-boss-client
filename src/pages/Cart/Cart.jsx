import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";
import { Button, Table } from "keep-react";
import { Cube, CurrencyDollar, Trash } from "phosphor-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
	const [cart, refetch] = useCart();
	const axiosSecure = useAxiosSecure()
	const totalPrice = cart.reduce((total, item) => total + item.price, 0);
	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/carts/${id}`)
				.then(res => {
					refetch();
					if(res.data.deletedCount > 0)
					{
						Swal.fire({
							title: "Deleted!",
							text: "Your file has been deleted.",
							icon: "success",
						});
					}
				})
			}
		});
	};
	return (
		<div className="w-full ">
			<div className="mb-12">
				<SectionTitle
					subTitle="---My Cart---"
					Title="WANNA ADD MORE?"
				></SectionTitle>
			</div>
			<div className="p-8 bg-white rounded-xl">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-[#151515] font-bold text-3xl">
						Total Items : {cart.length}
					</h2>
					<h2 className="text-[#151515] font-bold text-3xl">
						Total Price: ${totalPrice.toFixed(2)}
					</h2>
					<h2 className="text-[#151515] font-bold text-3xl">
						<button className="py-3 px-4 text-white bg-[#D1A054] font-bold text-xl rounded-md">
							Pay
						</button>
					</h2>
				</div>
				<div>
					<Table showCheckbox={true} hoverable={true}>
						<Table.Caption>
							<div className="my-5 flex items-center justify-between px-6">
								<div className="flex items-center gap-5">
									<p className="text-body-1 font-semibold text-metal-600">
										My Cart
									</p>
								</div>
								<div className="flex items-center gap-5">
									<Button type="outlineGray" size="sm">
										<span className="pr-2">
											<Cube size={24} />
										</span>
										Filter
									</Button>
									<Button type="outlineGray" size="sm">
										<span className="pr-2">
											<Cube size={24} />
										</span>
										Search
									</Button>
								</div>
							</div>
						</Table.Caption>
						<Table.Head className="bg-[#D1A054] text-white">
							<Table.HeadCell className="min-w-[165px] text-white">
								Name
							</Table.HeadCell>
							<Table.HeadCell className="min-w-[138px] text-white">
								Image
							</Table.HeadCell>
							<Table.HeadCell
								className="min-w-[138px] text-white"
								icon={<CurrencyDollar size={14} color="#fff" />}
								iconPosition="left"
							>
								Price
							</Table.HeadCell>
							<Table.HeadCell className="min-w-[138px] text-white">
								Action
							</Table.HeadCell>
						</Table.Head>
						<Table.Body className="divide-y divide-gray-25">
							{cart?.map((item) => (
								<Table.Row key={item._id} className="bg-white">
									<Table.Cell>{item.name}</Table.Cell>
									<Table.Cell>
										<img
											src={item.image}
											className="w-24"
											alt=""
										/>
									</Table.Cell>
									<Table.Cell>
										<p className="text-body-5 font-medium text-metal-500">
											${item.price}
										</p>
									</Table.Cell>

									<Table.Cell>
										<Button onClick={() => handleDelete(item._id)}>
											<Trash className="text-red-900"></Trash>
										</Button>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default Cart;
