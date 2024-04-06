import { Link, useLocation } from "react-router-dom";

import cn from "./Banner.module.scss";

function Banner() {
	const location = useLocation();
	if (location.pathname.includes("/designathon")) return null;

	return (
		<div className={`fill blue ${cn.banner}`}>
			<p>
				<Link to="/houses" className={cn.underline}>
					Join the DAUCI Houses
				</Link>{" "}
				to connect with your own design family!
			</p>
		</div>
	);
}

export default Banner;
