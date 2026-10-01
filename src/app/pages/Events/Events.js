import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { ReactComponent as ResourcesTl } from "app/pages/Resources/resources-tl.svg";
import { ReactComponent as ResourcesBr } from "app/pages/Resources/resources-br.svg";
import { useSheetEvents } from "./useSheetEvents";
import {
	RECENT_EVENTS_LIMIT,
	UPCOMING_EVENTS_LIMIT,
} from "./sheetConfig";

import cn from "./Events.module.scss";

const learnMoreHref = (event) => {
	const ig = event.links?.find(
		(l) => l.label === "Instagram" || /instagram\.com/i.test(l.link || ""),
	);
	return ig?.link || event.links?.[0]?.link || null;
};

const normalizeTypeKey = (type) => {
	const t = String(type || "")
		.trim()
		.toLowerCase();
	if (t.includes("social")) return "social";
	if (t.includes("workshop")) return "workshop";
	if (t.includes("industry") || t.includes("speaker")) return "speaker";
	if (t.includes("mentor")) return "mentorship";
	return "default";
};

const typeMeta = {
	social: {
		label: "Social Event",
		className: "typeSocial",
		iconSrc: "/static/file/social-icon.svg",
	},
	workshop: {
		label: "Workshop",
		className: "typeWorkshop",
		iconSrc: "/static/file/workshop-icon.svg",
	},
	speaker: {
		label: "Industry Speaker",
		className: "typeSpeaker",
		iconSrc: "/static/file/industry-logo.svg",
	},
	mentorship: {
		label: "Mentorship",
		className: "typeMentorship",
		iconSrc: null,
	},
	default: {
		label: null,
		className: "typeDefault",
		iconSrc: null,
	},
};

const TypeBadge = ({ type, grow = false }) => {
	const key = normalizeTypeKey(type);
	const meta = typeMeta[key] || typeMeta.default;
	const label = meta.label || type || "Event";

	return (
		<span
			className={`${cn.typeBadge} ${cn[meta.className] || ""} ${
				grow ? cn.badgeGrow : ""
			}`}
		>
			{meta.iconSrc ? (
				<img
					src={meta.iconSrc}
					alt=""
					className={cn.typeIconImg}
					aria-hidden="true"
				/>
			) : null}
			{label}
		</span>
	);
};

const LearnMore = ({ href, className }) =>
	href ? (
		<a
			className={className}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn More
		</a>
	) : (
		<span className={`${className} ${cn.pillDisabled}`}>Learn More</span>
	);

const UpcomingCard = ({ event }) => {
	const href = learnMoreHref(event);
	const week = event.week || "Week ?";

	const graphic = (
		<div className={cn.upcomingGraphic}>
			<span className={cn.graphicPlaceholder}>graphic here</span>
			{event.image ? (
				<img
					src={event.image}
					alt=""
					className={cn.upcomingImage}
					loading="lazy"
					referrerPolicy="no-referrer"
					onError={(e) => {
						e.currentTarget.style.display = "none";
					}}
				/>
			) : null}
		</div>
	);

	return (
		<article className={`wait show dx ${cn.upcomingCard}`}>
			<div className={cn.upcomingInner}>
				<div className={cn.badges}>
					<span className={cn.badge}>{week}</span>
					<TypeBadge type={event.type} grow />
				</div>

				{href ? (
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className={cn.imageLink}
						aria-label={event.title}
					>
						{graphic}
					</a>
				) : (
					graphic
				)}

				<LearnMore href={href} className={cn.pillBtnBlue} />
			</div>
		</article>
	);
};

const RecentCard = ({ event }) => {
	const href = learnMoreHref(event);
	const week = event.week || "Week ?";

	const media = (
		<div className={cn.recentImageWrap}>
			{event.image ? (
				<img
					src={event.image}
					alt=""
					className={cn.recentImage}
					loading="lazy"
					referrerPolicy="no-referrer"
					onError={(e) => {
						e.currentTarget.style.display = "none";
					}}
				/>
			) : (
				<div className={cn.recentImagePlaceholder}>
					<span>event photo here</span>
					<span className={cn.recentImageHint}>click me :D</span>
				</div>
			)}
		</div>
	);

	return (
		<article className={`wait show dx ${cn.recentCard}`}>
			<div className={cn.recentInner}>
				<div className={cn.badges}>
					<span className={cn.badge}>{week}</span>
					<TypeBadge type={event.type} grow />
				</div>

				<div className={cn.recentBody}>
					<h3 className={cn.recentTitle}>{event.title}</h3>
					{href ? (
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={cn.imageLink}
							aria-label={`Photo for ${event.title}`}
						>
							{media}
						</a>
					) : (
						media
					)}
				</div>

				<LearnMore href={href} className={cn.pillBtnBlue} />
			</div>
		</article>
	);
};

const Events = () => {
	const { upcoming, recent, loading, error } = useSheetEvents({
		recentLimit: RECENT_EVENTS_LIMIT,
		upcomingLimit: UPCOMING_EVENTS_LIMIT,
	});

	return (
		<>
			<Helmet>
				<title>Events – Design at UCI</title>
			</Helmet>
			<main className={cn.page}>
				<section className={cn.upcomingSection}>
					<div className={cn.blobLayer} aria-hidden="true">
						<ResourcesTl
							className={`wait show flopL ${cn.blobTl}`}
						/>
						<ResourcesBr
							className={`wait show flopR ${cn.blobBr}`}
						/>
					</div>

					<div className={cn.upcomingContent}>
						<header className={cn.sectionHeader}>
							<h1
								className={`wait show scale bold ${cn.sectionTitle}`}
							>
								Upcoming Events
							</h1>
							<p
								className={`wait show subtle ${cn.sectionSubtitle}`}
							>
								See the next time our design community is
								getting together, come say hello!
							</p>
						</header>

						{loading ? (
							<p className={`wait show ${cn.status}`}>
								Loading events…
							</p>
						) : error ? (
							<p className={`wait show ${cn.status}`}>
								Couldn&apos;t load events from the Sheet. Check
								that the spreadsheet is shared as Anyone with
								the link → Viewer.
							</p>
						) : upcoming.length === 0 ? (
							<p className={`wait show ${cn.status}`}>
								No upcoming events yet — check back soon, or
								submit one via the Form.
							</p>
						) : (
							<div className={cn.upcomingGrid}>
								{upcoming.map((event) => (
									<UpcomingCard
										key={`up-${event.time}-${event.title}`}
										event={event}
									/>
								))}
							</div>
						)}

						<div className={`wait show ${cn.ctaWrap}`}>
							<Link to="/events/schedule" className={cn.ctaBlue}>
								View All Upcoming Quarter Events
							</Link>
						</div>
					</div>
				</section>

				<section className={cn.recentSection}>
					<header className={cn.sectionHeader}>
						<h2
							className={`wait show scale bold ${cn.sectionTitle}`}
						>
							Recent Events
						</h2>
						<p
							className={`wait show subtle ${cn.sectionSubtitle}`}
						>
							See what we&apos;ve been up to as of late!
						</p>
					</header>

					{!loading && !error && recent.length === 0 ? (
						<p
							className={`wait show ${cn.status} ${cn.statusOnGradient}`}
						>
							No past events with photos yet.
						</p>
					) : (
						<div className={cn.recentGrid}>
							{recent.map((event) => (
								<RecentCard
									key={`re-${event.time}-${event.title}`}
									event={event}
								/>
							))}
						</div>
					)}

					<div className={`wait show ${cn.ctaWrap}`}>
						<Link to="/events/all" className={cn.ctaBlue}>
							View All Previous Events
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default Events;
