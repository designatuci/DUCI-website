import { memo, useEffect, useRef } from "react";
import { ReactComponent as SplashLogo } from "./logo.svg";
import cn from "./Splash.module.scss";
import anime from "animejs";

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
