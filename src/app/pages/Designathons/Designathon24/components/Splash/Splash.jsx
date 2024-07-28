import { memo } from "react";
import clsx from "clsx";

import cn from "./Splash.module.scss";
import SplashGraphics from "./SplashGraphics";
import SplashLogo from "./SplashLogo";

const Splash = memo(() => {
	return (
		<div className={cn.container}>
			<SplashGraphics />

			<SplashLogo />

			<div className={clsx(cn.info, "wait")}>
				<div className={cn.time}>May 17th - May 19th</div>
			</div>
		</div>
	);
});

export { Splash };
