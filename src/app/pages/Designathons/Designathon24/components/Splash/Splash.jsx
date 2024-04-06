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
			<SplashLogo ref={logoRef} className={cn.logo} />
		</div>
	);
});

export { Splash };
