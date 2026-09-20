import { Helmet } from "react-helmet";

import heroBg from "./assets/hero-bg.png";
import iconMascot from "./assets/icon-mascot.png";
import iconStatus from "./assets/icon-status.svg";
import iconHand from "./assets/icon-hand.svg";
import iconTime from "./assets/icon-time.svg";
import iconCalendar from "./assets/icon-calendar.svg";

import cn from "./Mockup.module.scss";

const MOCKUP_SITE_URL = "https://mockup.designatuci.com";
const APPLICATIONS_OPEN = true;

const Mockup = () => (
	<div className={cn.page}>
		<Helmet>
			<title>Design: Mockup – Design at UCI</title>
		</Helmet>

		<header className={cn.hero}>
			<img src={heroBg} alt="" className={cn.heroBg} aria-hidden="true" />
			<div className={cn.heroContent}>
				<img
					src={iconMascot}
					alt=""
					className={cn.heroIcon}
					width={148}
					height={150}
				/>
				<h1 className={cn.heroTitle}>Design: Mockup</h1>
			</div>
		</header>

		<main className={cn.main}>
			{APPLICATIONS_OPEN ? (
				<div className={cn.statusBanner}>
					<div className={cn.statusCopy}>
						<div className={cn.statusLabel}>
							<img src={iconStatus} alt="" width={16} height={16} />
							<span>Status</span>
						</div>
						<p className={cn.statusText}>
							Roblox x Mockup applications are currently open.
						</p>
					</div>
					<a
						href={MOCKUP_SITE_URL}
						className={cn.applyBtn}
						target="_blank"
						rel="noopener noreferrer"
					>
						Apply Now
					</a>
				</div>
			) : null}

			<section className={cn.intro}>
				<div className={cn.sectionHeader}>
					<p className={cn.eyebrow}>What is Design: Mockup?</p>
					<div className={cn.headlineRow}>
						<h2 className={cn.headline}>
							An opportunity to work on industry level, client
							projects
						</h2>
						<img
							src={iconHand}
							alt=""
							className={cn.handIcon}
							width={36}
							height={36}
						/>
					</div>
				</div>
				<a
					href={MOCKUP_SITE_URL}
					className={cn.learnMoreBtn}
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn more about our newest program on our Design: Mockup
					website!
				</a>
				<div className={cn.meta}>
					<div className={cn.metaItem}>
						<img src={iconTime} alt="" width={24} height={24} />
						<span>8 weeks</span>
					</div>
					<span className={cn.metaDivider} aria-hidden="true" />
					<div className={cn.metaItem}>
						<img src={iconCalendar} alt="" width={24} height={24} />
						<span>Quarterly</span>
					</div>
				</div>
			</section>
		</main>
	</div>
);

export default Mockup;
