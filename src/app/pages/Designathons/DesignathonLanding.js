import { Helmet } from "react-helmet";

import heroBg from "./assets/hero-bg.png";
import iconLogo from "./assets/icon-logo.svg";
import iconStatus from "./assets/icon-status.svg";
import iconHand from "./assets/icon-hand.svg";
import iconTime from "./assets/icon-time.svg";
import iconCalendar from "./assets/icon-calendar.svg";
import gallery1 from "./assets/gallery-1.png";
import gallery2 from "./assets/gallery-2.png";
import gallery3 from "./assets/gallery-3.png";
import gallery4 from "./assets/gallery-4.png";
import gallery5 from "./assets/gallery-5.png";
import avatarWilliam from "assets/images/board/current/William_Vo.jpg";
import avatarEvie from "assets/images/board/current/Evie_Ngo.jpg";

import cn from "./DesignathonLanding.module.scss";

const APPLY_URL =
	"https://docs.google.com/forms/d/e/1FAIpQLScS8LcdPkqkMVXeaXpsMG-S6NbdB6--aJ08IdMJQV2QK5OecQ/viewform";
/** @type {"open" | "soon" | "closed"} */
const APPLICATIONS_STATUS = "open";

const GALLERY = [
	{ src: gallery1, className: cn.galleryWide },
	{ src: gallery2, className: cn.galleryMid },
	{ src: gallery3, className: cn.galleryWide },
	{ src: gallery4, className: cn.galleryMid },
	{ src: gallery5, className: cn.galleryTall },
];

const TESTIMONIALS = [
	{
		quote:
			"“My experience was super rewarding! Getting to meet and get to know industry professionals from the likes of Google, Meta, Apple, and more was so insightful. And in the end, the design-a-thon was a huge success and all of our hard work paid off!”",
		name: "William Vo",
		role: "Corporate Coordinator · Fourth Year, Business Economics",
		photo: avatarWilliam,
	},
	{
		quote:
			"“Being a Designathon Director was a great experience and taught me a lot about interdisciplinary team collaboration and project management in general. There were a lot of moving parts, and I picked up many skills in the role, including project management, teamwork, and communication, which later translated directly to my internship. It was actually one of the crucial experiences they asked me about during my internship interview. Because of it, I was also able to make valuable connections with our sponsors and judges. Overall, it was not only a fun and rewarding experience, but also an extremely memorable one!”",
		name: "Evie Ngo",
		role: "Logistics Director · Fourth Year, Business Information Management",
		photo: avatarEvie,
	},
];

const DesignathonLanding = () => (
	<div className={cn.page}>
		<Helmet>
			<title>Design-a-thon – Design at UCI</title>
		</Helmet>

		<header className={cn.hero}>
			<img src={heroBg} alt="" className={cn.heroBg} aria-hidden="true" />
			<div className={cn.heroContent}>
				<img
					src={iconLogo}
					alt=""
					className={cn.heroIcon}
					width={152}
					height={152}
				/>
				<h1 className={cn.heroTitle}>Design-a-thon</h1>
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
								? "Design-a-thon committee applications are currently open."
								: "Design-a-thon committee applications are opening soon this fall."}
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
					<p className={cn.eyebrow}>What is Design-a-thon?</p>
					<div className={cn.headlineRow}>
						<h2 className={cn.headline}>
							A time-intensive event to push your limits as a designer
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
					Our Design-a-thon is held once per year, and is open to
					everyone. It’s a large-scale event where individuals can
					participate with other designers or work solo to design a
					prototype product within a few days based off the annual
					prompt. Additionally, you can attend workshops hosted during
					the event to get extra help and inspiration from industry
					professionals. To get involved, join us to get notifications
					about when the next applications come out!
				</p>
				<p className={cn.body}>
					We are recruiting individuals to help support the creation
					of this year’s Design-a-thon. From our logistics &amp;
					operations committee, to creating the promotional graphics
					or the website, apply today and become one of our committee
					members!
				</p>
				<p className={cn.body}>
					To apply as a participant, keep an eye out on our UCI
					Design-a-thon Instagram to get updates about when the
					applications come out!
				</p>
				<div className={cn.meta}>
					<div className={cn.metaItem}>
						<img src={iconTime} alt="" width={24} height={24} />
						<span>3 days</span>
					</div>
					<span className={cn.metaDivider} aria-hidden="true" />
					<div className={cn.metaItem}>
						<img src={iconCalendar} alt="" width={24} height={24} />
						<span>Yearly during Spring Quarter</span>
					</div>
				</div>
			</section>
		</main>

		<section className={cn.gallery} aria-label="Design-a-thon photos">
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

export default DesignathonLanding;
