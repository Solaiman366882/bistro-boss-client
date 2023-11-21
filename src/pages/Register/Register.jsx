import { Label, TextInput } from "keep-react";
import authImg from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const axiosPublic = useAxiosPublic();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state ? location.state : "/";

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.email.value;
		console.log(name, email, password);
		createUser(email, password)
			.then((res) => {
				const user = res.user;
				const userInfo = {
					name,
					email,
				};
				axiosPublic.post("/users", userInfo).then((result) => {
					if (result.data.insertedId) {
						console.log("user added to the database");
						navigate(from);
						Swal.fire({
							title: "Good Job ?",
							text: "Your Account Created",
							icon: "success",
						});
					}
				}).catch(err => console.log(err))
				console.log(user);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="login-section">
			<div className="max-w-screen-xl w-full mx-auto px-3">
				<div className="login-area py-10 px-20 shadow-2xl w-full flex gap-12 justify-between items-center">
					<div className="login-left flex-1">
						<img
							className="w-full object-contain"
							src={authImg}
							alt=""
						/>
					</div>
					<div className="login-right flex-1">
						<h2>Sign Up</h2>
						<form onSubmit={handleRegister}>
							<div className="form-area">
								<div className="single-form">
									<Label value="Name" />
									<TextInput
										placeholder="Type here"
										name="name"
										color="gray"
									/>
								</div>
								<div className="single-form">
									<Label value="Email" />
									<TextInput
										placeholder="Type here"
										name="email"
										color="gray"
									/>
								</div>
								<div className="single-form">
									<Label value="Password" />
									<TextInput
										placeholder="Enter your password"
										name="password"
										type="password"
										color="gray"
									/>
								</div>
								<div className="single-form">
									<button
										className="log-btn w-full bg-[#D1A054B2] disabled:bg-gray-100 text-white py-3 text-center rounded-lg font-bold text-xl"
										type="submit"
									>
										Sign Up
									</button>
								</div>
							</div>
						</form>
						<div>
							<SocialLogin></SocialLogin>
						</div>
						<div className="mt-8 mb-6 text-center">
							<p className="text-[#D1A054] text-xl font-inter font-medium ">
								Already registered?
								<Link className="font-bold" to="/login">
									Go to log in
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
