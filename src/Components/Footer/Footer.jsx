import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
	return (
		<div>
			<div className="footer-section section-padding text-white">
				<div className="max-w-screen-xl mx-auto px-5">
					<div className="footer-area flex text-center">
						<div className="footer-left flex-1">
							<h2>CONTACT US</h2>
							<p>
								123 ABS Street, Uni 21, Bangladesh <br />
								+88 123456789 <br />
								Mon - Fri: 08:00 - 22:00 <br />
								Sat - Sun: 10:00 - 23:00
							</p>
						</div>
						<div className="footer-right flex-1">
							<h2>Follow US</h2>
							<p>Join us on social media</p>
							<ul className="social-icon flex justify-center gap-5 mt-6">
								<li>
									<FaFacebookF className="text-6xl"></FaFacebookF>
								</li>
								<li>
									<FaInstagram className="text-6xl"></FaInstagram>
								</li>
								<li>
									<FaTwitter className="text-6xl"></FaTwitter>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center text-white py-4 bg-[#151515]">
				<p className="text-xl">Copyright © CulinaryCloud. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
