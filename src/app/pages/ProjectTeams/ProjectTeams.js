import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import heroBg from "./assets/hero-bg.png";
import iconPt from "./assets/icon-pt.svg";
import iconStatus from "./assets/icon-status.svg";
import iconHand from "./assets/icon-hand.svg";
import iconTime from "./assets/icon-time.svg";
import iconCalendar from "./assets/icon-calendar.svg";
import iconUsers from "./assets/icon-users.svg";
import gallery1 from "./assets/gallery-1.jpg";
import gallery2 from "./assets/gallery-2.jpg";
import gallery3 from "./assets/gallery-3.jpg";
import gallery4 from "./assets/gallery-4.jpg";
import avatarAlexa from "./assets/avatar-alexa.jpg";
import avatarBranson from "./assets/avatar-branson.jpg";
import avatarYuka from "./assets/avatar-yuka.jpg";
import recapPhoto from "./assets/recap-photo.jpg";
import winnerZotshop from "./assets/winner-zotshop.png";
import winnerLifekit from "./assets/winner-lifekit.jpg";
import winnerLifekitHero from "./assets/winner-lifekit-hero.jpg";
import winnerFindy from "./assets/winner-findy.png";
import iconRecap from "./assets/icon-recap.svg";
import iconChevron from "./assets/icon-chevron.svg";
import iconFormWhite from "./assets/icon-form-white.svg";
import iconInstagramWhite from "./assets/icon-instagram-white.svg";
import iconEmailWhite from "./assets/icon-email-white.svg";
import iconExclamationWhite from "./assets/icon-exclamation-white.svg";

import cn from "./ProjectTeams.module.scss";

export const PROJECT_TEAMS_GOOGLE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScbBwpAD8fN6MYpi84wK8-AObgFvjHZkehP34VdAMr_dRi6Gg/viewform";
const APPLY_URL = "/project-teams/registration";
const APPLICATIONS_OPEN = true;
// Flip to true to restore winner click/hover popups
const WINNER_POPUPS_ENABLED = false;
const INSTAGRAM_URL = "https://www.instagram.com/designatuci/";
const EMAIL_URL = "mailto:design@uci.edu";

const GALLERY = [
	{ src: gallery1, className: cn.galleryWide },
	{ src: gallery2, className: cn.galleryTall },
	{ src: gallery3, className: cn.galleryWide },
	{ src: gallery4, className: cn.galleryMid },
];

const TESTIMONIALS = [
	{
		quote:
			"“Participating in project teams was the perfect way to learn UI/UX as a complete beginner. Working hands-on and being surrounded by talented mentors taught me what actually goes into thoughtful design, and provided an abundance of support throughout my learning journey. By the end of my first project team, my knowledge, curiosity, and passion for design had grown tremendously.”",
		name: "Alexa Lee",
		role: "Project Teams Participant",
		photo: avatarAlexa,
	},
	{
		quote:
			"“Before my first Project Teams, I didn’t really understand what product design was. But after I participated, I learned what the UX process looks like and how meaningful good design can be. Every quarter, it’s awesome to see beginner and seasoned participants alike fall deeper in love with design.”",
		name: "Branson Wong",
		role: "‘26 - ‘27 Project Teams Director",
		photo: avatarBranson,
	},
	{
		quote:
			"“I really enjoyed serving as a judge! I love meeting aspiring designers and it was eye-opening to see so many thoughtful and creative projects come together in just one quarter. Giving constructive feedback to help students grow while sharpening my own critique skills was also very rewarding. If you are thinking about judging, I highly recommend it!”",
		name: "Yuka Okina",
		role: "Designer @ Ingram Micro & Project Teams Judge",
		photo: avatarYuka,
	},
];

const WINNERS = [
	{
		id: "zotshop",
		place: "Fall 1st Place",
		name: "ZotShop",
		logo: winnerZotshop,
		rotate: cn.winnerTiltA,
		tagline: "Fall 1st Place",
		description:
			"ZotShop took 1st place in Fall Project Teams with a polished product experience designed from ideation through case study presentation.",
		hero: gallery1,
		thumbs: [null, null, null],
	},
	{
		id: "lifekit",
		place: "Winter 1st Place",
		name: "Life Kit",
		logo: winnerLifekit,
		rotate: cn.winnerTiltB,
		tagline: "Kitting you up for life.",
		description:
			"Life Kit is a quarterly in-person program where students team up and design a product from ideation to case study presentation. We provide a guided, collaborative experience through mentorship and an in-depth curriculum that will immerse yourself into the world of UI/UX design.",
		hero: winnerLifekitHero,
		thumbs: [null, null, null],
	},
	{
		id: "findy",
		place: "Spring 1st Place",
		name: "Findy",
		logo: winnerFindy,
		rotate: cn.winnerTiltC,
		tagline: "Spring 1st Place",
		description:
			"Findy earned 1st place in Spring Project Teams, delivering a thoughtful product concept shaped through mentorship, iteration, and a full UX process.",
		hero: gallery3,
		thumbs: [null, null, null],
	},
];

const CONTACT_LINKS = [
	{
		label: "application",
		href: PROJECT_TEAMS_GOOGLE_FORM,
		external: true,
		iconWhite: iconFormWhite,
	},
	{
		label: "Instagram",
		href: INSTAGRAM_URL,
		external: true,
		iconWhite: iconInstagramWhite,
	},
	{
		label: "design@uci",
		href: EMAIL_URL,
		external: false,
		iconWhite: iconEmailWhite,
	},
];

function ProjectTeams() {
	const [activeWinner, setActiveWinner] = useState(null);

	useEffect(() => {
		if (!WINNER_POPUPS_ENABLED || !activeWinner) return undefined;

		const onKeyDown = (event) => {
			if (event.key === "Escape") setActiveWinner(null);
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [activeWinner]);

	return (
		<div className={cn.page}>
			<Helmet>
				<title>Project Teams – Design at UCI</title>
			</Helmet>

			<header className={cn.hero}>
				<img
					src={heroBg}
					alt=""
					className={cn.heroBg}
					aria-hidden="true"
				/>
				<div className={cn.heroContent}>
					<img
						src={iconPt}
						alt=""
						className={cn.heroIcon}
						width={155}
						height={155}
					/>
					<h1 className={cn.heroTitle}>Project Teams</h1>
				</div>
			</header>

			<main className={cn.main}>
				{APPLICATIONS_OPEN ? (
					<div className={cn.statusBanner}>
						<div className={cn.statusCopy}>
							<div className={cn.statusLabel}>
								<img
									src={iconStatus}
									alt=""
									width={16}
									height={16}
								/>
								<span>Status</span>
							</div>
							<p className={cn.statusText}>
								Fall ‘26 Project Teams applications are currently
								open.
							</p>
						</div>
						<Link to={APPLY_URL} className={cn.applyBtn}>
							Apply Now
						</Link>
					</div>
				) : null}

				<section className={cn.intro}>
					<div className={cn.sectionHeader}>
						<p className={cn.eyebrow}>what is pt?</p>
						<div className={cn.headlineRow}>
							<h2 className={cn.headline}>
								Structured, Hands On UI/UX Experience
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
						Project Teams is a quarterly in-person program where
						students team up and design a product from ideation to
						case study presentation. We provide a guided,
						collaborative experience through mentorship and an
						in-depth curriculum that will immerse yourself into the
						world of UI/UX design. This is where you’ll level up your
						design skills no matter your background. Any UCI student
						can apply, no experience is required!
					</p>
					<div className={cn.meta}>
						<div className={cn.metaItem}>
							<img src={iconTime} alt="" width={24} height={24} />
							<span>8 weeks</span>
						</div>
						<span className={cn.metaDivider} aria-hidden="true" />
						<div className={cn.metaItem}>
							<img
								src={iconCalendar}
								alt=""
								width={24}
								height={24}
							/>
							<span>Quarterly</span>
						</div>
						<span className={cn.metaDivider} aria-hidden="true" />
						<div className={cn.metaItem}>
							<img src={iconUsers} alt="" width={24} height={24} />
							<span>54 designers</span>
						</div>
					</div>
				</section>
			</main>

			<section className={cn.gallery} aria-label="Project Teams photos">
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
				<div className={cn.sectionHeader}>
					<p className={cn.eyebrow}>why should you join?</p>
					<div className={cn.headlineRow}>
						<h2 className={cn.headline}>
							From the people who make it work
						</h2>
						<span className={cn.commentIcon} aria-hidden="true" />
					</div>
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

			<section className={cn.recap} aria-label="2026 Project Teams recap">
				<div className={cn.recapLeft}>
					<div className={cn.recapHeader}>
						<div className={cn.recapLabel}>
							<img src={iconRecap} alt="" width={16} height={16} />
							<span>recap</span>
						</div>
						<div className={cn.recapSelect} aria-hidden="true">
							<span>2026 Project Teams</span>
							<img
								src={iconChevron}
								alt=""
								width={20}
								height={20}
								className={cn.recapChevron}
							/>
						</div>
					</div>
					<div className={cn.recapPhotoWrap}>
						<img
							src={recapPhoto}
							alt=""
							className={cn.recapPhoto}
						/>
					</div>
				</div>
				<div className={cn.recapWinners}>
					{WINNERS.map((w) => {
						const content = (
							<>
								<div className={`${cn.winnerLogo} ${w.rotate}`}>
									<img src={w.logo} alt="" width={124} height={124} />
								</div>
								<div className={cn.winnerText}>
									<p className={cn.winnerPlace}>{w.place}</p>
									<p className={cn.winnerName}>{w.name}</p>
								</div>
							</>
						);

						if (!WINNER_POPUPS_ENABLED) {
							return (
								<div
									key={w.id}
									className={`${cn.winnerRow} ${cn.winnerRowStatic}`}
								>
									{content}
								</div>
							);
						}

						return (
							<button
								key={w.id}
								type="button"
								className={cn.winnerRow}
								onClick={() => setActiveWinner(w)}
								aria-haspopup="dialog"
							>
								{content}
							</button>
						);
					})}
				</div>
			</section>

			{WINNER_POPUPS_ENABLED && activeWinner ? (
				<div
					className={cn.winnerModal}
					role="presentation"
					onClick={() => setActiveWinner(null)}
				>
					<div
						className={cn.winnerPopup}
						role="dialog"
						aria-modal="true"
						aria-label={activeWinner.name}
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							className={cn.winnerPopupClose}
							onClick={() => setActiveWinner(null)}
							aria-label="Close"
						>
							×
						</button>
						<div className={cn.winnerPopupBody}>
							<div className={cn.winnerPopupMedia}>
								<div className={cn.winnerPopupHero}>
									<img
										src={activeWinner.hero}
										alt=""
									/>
								</div>
								<div className={cn.winnerPopupThumbs}>
									{activeWinner.thumbs.map((_, index) => (
										<div
											key={`${activeWinner.id}-thumb-${index}`}
											className={cn.winnerPopupThumb}
											aria-hidden="true"
										/>
									))}
								</div>
							</div>
							<div className={cn.winnerPopupInfo}>
								<div className={cn.winnerPopupHeader}>
									<img
										src={activeWinner.logo}
										alt=""
										className={cn.winnerPopupLogo}
										width={100}
										height={100}
									/>
									<div className={cn.winnerPopupTitles}>
										<p className={cn.winnerPopupName}>
											{activeWinner.name}
										</p>
										<p className={cn.winnerPopupTagline}>
											{activeWinner.tagline}
										</p>
									</div>
								</div>
								<p className={cn.winnerPopupDesc}>
									{activeWinner.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			) : null}

			<section className={cn.askBanner} aria-label="questions">
				<div className={cn.askBannerCopy}>
					<p className={cn.askBannerEyebrow}>questions?</p>
					<div className={cn.askBannerTitleRow}>
						<p className={cn.askBannerTitle}>Ask anything</p>
						<img
							src={iconExclamationWhite}
							alt=""
							width={40}
							height={40}
							className={cn.exclaimIconLight}
						/>
					</div>
				</div>
				<div className={cn.askBannerLinks}>
					{CONTACT_LINKS.map((link) => (
						<a
							key={`banner-${link.label}`}
							href={link.href}
							className={cn.askBannerLink}
							{...(link.external
								? {
										target: "_blank",
										rel: "noopener noreferrer",
								  }
								: {})}
						>
							<img
								src={link.iconWhite}
								alt=""
								width={20}
								height={20}
							/>
							<span>{link.label}</span>
						</a>
					))}
				</div>
			</section>
		</div>
	);
}

export default ProjectTeams;
