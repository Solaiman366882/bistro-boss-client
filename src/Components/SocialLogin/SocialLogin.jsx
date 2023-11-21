import { Button } from "keep-react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
	const { googleLogin } = useAuth();
	const axiosPublic = useAxiosPublic();
	const navigate = useNavigate();
	const location = useLocation();

	const handleGoogleLogin = () => {
		console.log("google login handled");
		googleLogin()
			.then((res) => {
				const userInfo = {
					email: res.user.email,
					name: res.user.displayName,
				};
				axiosPublic
					.post("/users", userInfo)
					.then((res) => {
						console.log(res.data);
                        navigate(location?.state ? location.state : '/');
						Swal.fire({
							title: "Logged !n",
							text: "successfully login with google",
							icon: "success",
						});
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="mt-5">
			<p className="text-xl text-center font-bold">
				--------- Or ---------
			</p>
			<div className="flex gap-5 justify-center items-center">
				<Button type="primary" onClick={handleGoogleLogin}>
					<FaGoogle></FaGoogle>
				</Button>
				<Button type="primary">
					<FaFacebook></FaFacebook>
				</Button>
				<Button type="primary">
					<FaGithub></FaGithub>{" "}
				</Button>
			</div>
		</div>
	);
};

export default SocialLogin;
