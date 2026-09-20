import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import heroBg from "./assets/hero-bg.png";
import iconMentorship from "./assets/icon-mentorship.svg";
import iconStatus from "./assets/icon-status.svg";
import iconHand from "./assets/icon-hand.svg";
import iconTime from "./assets/icon-time.svg";
import iconCalendar from "./assets/icon-calendar.svg";
import gallery1 from "./assets/gallery-1.png";
import gallery2 from "./assets/gallery-2.png";
import gallery3 from "./assets/gallery-3.png";
import gallery4 from "./assets/gallery-4.png";
import gallery5 from "./assets/gallery-5.png";
import avatarAlice from "./assets/avatar-alice.jpg";
import avatarKylie from "./assets/avatar-kylie.jpg";
import avatarEvelyn from "./assets/avatar-evelyn.jpg";

import cn from "./Mentorship.module.scss";

const APPLY_URL = "/join";
/** @type {"open" | "soon" | "closed"} */
const APPLICATIONS_STATUS = "soon";

const GALLERY = [
	{ src: gallery1, className: cn.galleryWide },
	{ src: gallery2, className: cn.galleryTall },
	{ src: gallery3, className: cn.galleryWide },
	{ src: gallery4, className: cn.galleryMid },
	{ src: gallery5, className: cn.galleryMid },
];

// TODO: replace with real mentorship testimonials
const TESTIMONIALS = [
	{
		quote:
			"“As a mentee, I finally felt like I had a place in UCI’s design community. My mentor helped me build confidence in my process, and our family check-ins made every week feel supportive and motivating.”",
		name: "Alice Ger",
		role: "Mentorship Committee",
		photo: avatarAlice,
	},
	{
		quote:
			"“Mentoring through Design at UCI was one of the most rewarding parts of my year. Watching mentees grow and bonding with my mentorship family reminded me why sharing design knowledge matters.”",
		name: "Kylie Nguyen",
		role: "Mentorships Director",
		photo: avatarKylie,
	},
	{
		quote:
			"“The curriculum gave us structure without making things feel rigid. Between family activities and design conversations, I grew so much as a designer and made friends I still keep in touch with.”",
		name: "Evelyn Wang",
		role: "Mentorship Committee",
		photo: avatarEvelyn,
	},
];

const Mentorship = () => (
	<div className={cn.page}>
		<Helmet>
			<title>Mentorship – Design at UCI</title>
		</Helmet>

		<header className={cn.hero}>
			<img src={heroBg} alt="" className={cn.heroBg} aria-hidden="true" />
			<div className={cn.heroContent}>
				<img
					src={iconMentorship}
					alt=""
					className={cn.heroIcon}
					width={152}
					height={152}
				/>
				<h1 className={cn.heroTitle}>Mentorship</h1>
			</div>
		</header>

		<main className={cn.main}>
			{APPLICATIONS_STATUS !== "closed" ? (
				<div
					className={`${cn.statusBanner}${
						APPLICATIONS_STATUS === "soon" ? ` ${cn.statusBannerSoon}` : ""
					}`}
				>
					<div className={cn.statusCopy}>
						<div className={cn.statusLabel}>
							<img src={iconStatus} alt="" width={16} height={16} />
							<span>Status</span>
						</div>
						<p className={cn.statusText}>
							{APPLICATIONS_STATUS === "open"
								? "Fall ‘26 Mentee applications are currently open."
								: "Fall ‘26 Mentee applications are opening soon this fall."}
						</p>
					</div>
					{APPLICATIONS_STATUS === "open" ? (
						<Link to={APPLY_URL} className={cn.applyBtn}>
							Apply Now
						</Link>
					) : null}
				</div>
			) : null}

			<section className={cn.intro}>
				<div className={cn.introTitle}>
					<p className={cn.eyebrow}>What is Mentorship?</p>
					<div className={cn.headlineRow}>
						<h2 className={cn.headline}>
							Connecting Designers of all Levels & Strengthening
							UCI’s Design Community
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
				<p className={cn.body}>
					Our Mentorship program occurs during Fall & Winter quarter
					students get paired into “families” of 2+ with a minimum of
					one mentor and one mentee. Design at UCI’s Mentorship
					committee creates a curriculum structure filled with ways to
					bond and learn more about design within your mentorship
					families. No experience is required and any level of
					designer is welcome to join us as a mentee!
				</p>
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

		<section className={cn.gallery} aria-label="Mentorship photos">
			<div className={cn.galleryTrack}>
				{GALLERY.map((item) => (
					<img
						key={item.src}
						src={item.src}
						alt=""
						className={`${cn.galleryImg} ${item.className}`}
					/>
				))}
			</div>
		</section>

		<section className={cn.testimonials}>
			<p className={cn.eyebrow}>why should you join?</p>
			<div className={cn.headlineRow}>
				<h2 className={cn.headline}>From the people who make it work</h2>
				<span className={cn.commentIcon} aria-hidden="true" />
			</div>
			<div className={cn.testimonialGrid}>
				{TESTIMONIALS.map((t) => (
					<article key={t.name} className={cn.testimonialCard}>
						<p className={cn.quote}>{t.quote}</p>
						<div className={cn.person}>
							<img
								src={t.photo}
								alt=""
								className={cn.avatar}
								width={53}
								height={67}
							/>
							<div>
								<p className={cn.personName}>{t.name}</p>
								<p className={cn.personRole}>{t.role}</p>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	</div>
);

export default Mentorship;
