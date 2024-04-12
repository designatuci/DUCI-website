import { memo } from "react";
// import { ReactComponent as SplashLogo } from "./logo.svg";
import cn from "./Splash.module.scss";
import clsx from "clsx";

import GridBackground from "../Backgrounds/GridBackground";
import SplashGraphics from "./SplashGraphics";
import SplashLogo from "./SplashLogo";

const Splash = memo(() => {
	return (
		<div className={cn.container}>
			<GridBackground positions={[{ top: 0, left: 0 }]} isLight={true} />
			<SplashGraphics />

			<SplashLogo />

			<div className={clsx(cn.info, "wait")}>
				<div className={cn.time}>
					May 17th 5:00 PM - May 19th 6:00 PM
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
		</div>
	);
});

export { Splash };
