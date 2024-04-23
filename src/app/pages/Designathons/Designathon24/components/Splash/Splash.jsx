import { memo } from "react";
import cn from "./Splash.module.scss";
import clsx from "clsx";

import SplashGraphics from "./SplashGraphics";
import SplashLogo from "./SplashLogo";

const Splash = memo(() => {
	return (
		<div className={cn.container}>
			<SplashGraphics />

			<SplashLogo />

			<div className={clsx(cn.info, "wait")}>
				<div className={cn.time}>May 17th - May 19th</div>
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
					<div className={cn.border}>
						<a
							className={cn.app}
							target="_blank"
							rel="noreferrer noopener"
							href="https://forms.gle/bPGtCSx8VfZoGXjW6"
						>
							Apply as Mentor
						</a>
					</div>
					<div className={cn.border}>
						<a
							className={cn.app}
							target="_blank"
							rel="noreferrer noopener"
							href="https://docs.google.com/forms/d/1g6CjdlOxet1fplwTCWQE8pZ-wKzHjku-t_a-bwRwK_Q/viewform"
						>
							Apply as Volunteer
						</a>
					</div>
				</div>
			</div>
		</div>
	);
});

export { Splash };
