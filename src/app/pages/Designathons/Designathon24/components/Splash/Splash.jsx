import { memo, useEffect, useRef } from "react";
import { ReactComponent as SplashLogo } from "./logo.svg";
import cn from "./Splash.module.scss";
import clsx from "clsx";
import anime from "animejs";

import tl_clouds from "../../assets/graphics/splash/clouds.svg";
import butterfly from "../../assets/graphics/splash/butterfly.svg";
import bl_star_stripe from "../../assets/graphics/splash/bl_star_stripe.svg";
import mr_cloud_stars from "../../assets/graphics/splash/mr_cloud_stars.svg";
import br_star_stripe from "../../assets/graphics/splash/br_star_stripe.svg";

import GridBackground from "../Backgrounds/GridBackground";

const Splash = memo(() => {
	const logoRef = useRef(null);
	useEffect(() => {
		anime({
			targets: "path.word",
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: "easeInOutSine",
			duration: 2000,
			delay: function (el, i) {
				return i * 300;
			},
		});
	}, []);

	return (
		<div className={cn.container}>
			<img
				src={tl_clouds}
				alt=""
				className={clsx(cn.decoration, cn.tl_clouds, "wait flopL")}
			/>
			<img
				src={butterfly}
				alt=""
				className={clsx(cn.decoration, cn.butterfly, "wait flopL")}
			/>
			<img
				src={bl_star_stripe}
				alt=""
				className={clsx(cn.decoration, cn.bl_star_stripe, "wait flopL")}
			/>
			<img
				src={mr_cloud_stars}
				alt=""
				className={clsx(cn.decoration, cn.mr_cloud_stars, "wait flopR")}
			/>
			<img
				src={br_star_stripe}
				alt=""
				className={clsx(cn.decoration, cn.br_star_stripe, "wait flopR")}
			/>

			<GridBackground positions={[{ top: 0, left: 0 }]} isLight={true} />

			<div className={cn.info}>
				<div className={cn.time}>
					May 17th 6:30 PM - May 19th 4:30 PM
				</div>
				<div className={cn.wrapper}>
					<div className={cn.border}>
						<a
							className={cn.app}
							target="_blank"
							rel="noreferrer noopener"
							href="https://docs.google.com/forms/d/1dt6fiBAjGVi4M4PO3V2ZUkieRHR6fn6wWvC5E6RZoZM"
						>
							Apply as Designer
						</a>
					</div>
				</div>
			</div>
			<SplashLogo ref={logoRef} className={cn.logo} />
		</div>
	);
});

export { Splash };
