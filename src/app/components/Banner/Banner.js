import { Link } from "react-router-dom";

import cn from "./Banner.module.scss";

function Banner() {
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
