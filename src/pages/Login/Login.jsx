import { Label, TextInput } from "keep-react";
import authImg from "../../assets/others/authentication2.png";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";

const Login = () => {
	const [disable, setDisable] = useState(true);
	//const [captchaValue,setCaptchaValue] = useState('');
	const handelLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
	};
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	const handleValidateCaptcha = (e) => {
		const captchaValue = e.target.value;
		if (validateCaptcha(captchaValue, false)) {
			setDisable(false);
		} else {
			setDisable(true);
		}
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
						<h2>Login</h2>
						<form onSubmit={handelLogin}>
							<div className="form-area">
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
										color="gray"
									/>
								</div>
								<div className="single-form relative">
									{/* <Label value={<LoadCanvasTemplate />} /> */}
									<label
										className="captcha border-slate-300 border block"
										htmlFor=""
									>
										<LoadCanvasTemplate />
									</label>
									<input
										className="w-full border-slate-300 border block text-slate-800 text-sm p-2 rounded-md bg-white"
										type="text"
										onChange={handleValidateCaptcha}
									/>
									{
										// captchaValue.length > 0 ? <Button size="sm" type="primary" className="absolute top-1/2 right-0 -translate-y-1/2" value={captchaValue} onClick={handleValidateCaptcha}>Check</Button> : ""
									}
								</div>
								<div className="single-form">
									<button
										className="log-btn w-full bg-[#D1A054B2] disabled:bg-gray-100 text-white py-3 text-center rounded-lg font-bold text-xl"
										type="submit"
										disabled={disable}
									>
										Sign In
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
