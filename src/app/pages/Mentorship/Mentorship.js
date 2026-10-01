import { Helmet } from "react-helmet";

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
import avatarKrey from "./assets/avatar-krey.jpg";
import avatarEvelyn from "./assets/avatar-evelyn.jpg";
import avatarHeidi from "./assets/avatar-heidi.jpg";

import cn from "./Mentorship.module.scss";

const APPLY_URL =
	"https://docs.google.com/forms/d/e/1FAIpQLSey7dl4PawDcgfQYq3cJY7cU0A4ugWY_DZpE_L-FaMhYGlfVg/viewform";
/** @type {"open" | "soon" | "closed"} */
const APPLICATIONS_STATUS = "open";

const GALLERY = [
	{ src: gallery1, className: cn.galleryWide },
	{ src: gallery2, className: cn.galleryTall },
	{ src: gallery3, className: cn.galleryWide },
	{ src: gallery4, className: cn.galleryMid },
	{ src: gallery5, className: cn.galleryMid },
];

const TESTIMONIALS = [
	{
		quote:
			"“The DAUCI Mentorships program last quarter gave me a unique chance to build meaningful and constructive relationships with people I wouldn’t have had a chance to before. As a mentor, being matched with a mentee who shared a lot of the same interests and vibes as me, and having a positive space to socialize and work together, really allowed for a great experience. I’m so happy to have made a new friend who I will likely continue to yap with and spam reels to for the foreseeable future”",
		name: "Krey",
		role: "Mentor & Past President ‘25–‘26",
		photo: avatarKrey,
	},
	{
		quote:
			"“Mentorship allowed me to take a step into UI/UX and Design at UCI, something that I had no experience at all with before. It opened me up to a community larger than I expected, full of creative, intelligent, and helpful individuals. Through this experience I got to be more involved with the larger scope of DAUCI and am thankful for this opportunity to have met so many great people.”",
		name: "Evelyn",
		role: "Mentee & Director ‘26–‘27",
		photo: avatarEvelyn,
	},
	{
		quote:
			"“Mentorship was such a meaningful experience full of growth, new perspectives, and building a really special connection with my mentee, Tiffany. It was fulfilling to share what I've learned from my own career and life experiences, but equally rewarding to learn from her in return. I'm grateful the program brought us together, and I hope it continues to help others find their path and build lasting connections!”",
		name: "Heidi",
		role: "Mentor & Past Workshop Director ‘25–‘26",
		photo: avatarHeidi,
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
						<a
							href={APPLY_URL}
							className={cn.applyBtn}
							target="_blank"
							rel="noopener noreferrer"
						>
							Apply Now
						</a>
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
