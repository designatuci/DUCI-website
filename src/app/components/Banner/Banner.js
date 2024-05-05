import { Link, useLocation } from "react-router-dom";

import cn from "./Banner.module.scss";
import { useCallback, useState } from "react";

function Banner() {
	const location = useLocation();
	const [show, setShow] = useState(true);

	const closeBanner = useCallback(() => {
		setShow(false);
	}, []);

	if (location.pathname.includes("/designathon")) return null;

	return (
		show && (
			<>
				<div className={`fill blue ${cn.banner}`}>
					<p>
						<Link to="/houses" className={cn.underline}>
							Join the DAUCI Houses
						</Link>{" "}
						to connect with your own design family!
					</p>
					<button className={cn.close} onClick={closeBanner}>
						x
					</button>
				</div>
			</>
		)
	);
}

export default Banner;
