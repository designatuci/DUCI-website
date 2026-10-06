import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Text } from "app/components";
import { Section, Space } from "app/Symbols.js";
import { ReactComponent as ResourcesTl } from "app/pages/Resources/resources-tl.svg";
import { ReactComponent as ResourcesBr } from "app/pages/Resources/resources-br.svg";

import cardPt from "./assets/card-pt.png";
import cardMentorship from "./assets/card-mentorship.png";
import cardMockup from "./assets/card-mockup.png";
import cardDot from "./assets/card-dot.png";
import iconPt from "./assets/icon-pt.svg";
import iconMentorship from "./assets/icon-mentorship.svg";
import iconMockup from "./assets/icon-mockup.svg";
import iconDot from "./assets/icon-dot.svg";

import cn from "./Programs.module.scss";

const PROGRAMS = [
	{
		title: "Project Teams",
		desc: "Work on a team to create a product from scratch.",
		link: "/project-teams",
		background: cardPt,
		icon: iconPt,
		titleColor: "#88005b",
		descColor: "#bb4393",
		appsOpen: false,
	},
	{
		title: "Mentorship",
		desc: "Connect with others designers in our community.",
		link: "/mentorship",
		background: cardMentorship,
		icon: iconMentorship,
		titleColor: "#884d00",
		descColor: "#a77549",
		appsOpen: false,
	},
	{
		title: "Design: Mockup",
		desc: "Get real industry experience working with clients.",
		link: "/mockup",
		background: cardMockup,
		icon: iconMockup,
		titleColor: "#000788",
		descColor: "#4365bb",
		appsOpen: false,
	},
	{
		title: "Design-a-thon",
		desc: "Our annual nation-wide design competition.",
		link: "/designathons/",
		background: cardDot,
		icon: iconDot,
		titleColor: "#008807",
		descColor: "#629b54",
		appsOpen: true,
	},
];

const ProgramCard = ({ program }) => {
	const content = (
		<>
			<img
				src={program.background}
				alt=""
				className={cn.cardBg}
				aria-hidden="true"
			/>
			{program.appsOpen ? (
				<span className={cn.appsPill}>Applications open</span>
			) : null}
			<div className={cn.cardContent}>
				<div className={cn.cardTitleRow}>
					<img
						src={program.icon}
						alt=""
						className={cn.cardIcon}
						width={50}
						height={50}
					/>
					<span
						className={cn.cardTitle}
						style={{ color: program.titleColor }}
					>
						{program.title}
					</span>
				</div>
				<p
					className={cn.cardDesc}
					style={{ color: program.descColor }}
				>
					{program.desc}
				</p>
			</div>
		</>
	);

	if (program.link) {
		return (
			<Link to={program.link} className={cn.card}>
				{content}
			</Link>
		);
	}

	return <div className={cn.card}>{content}</div>;
};

const anyAppsOpen = PROGRAMS.some((p) => p.appsOpen);

const Programs = () => (
	<div className={cn.page}>
		<Helmet>
			<title>Programs – Design at UCI</title>
		</Helmet>

		<section className={cn.hero}>
			<ResourcesTl className={cn.heroTl} aria-hidden="true" />
			<ResourcesBr className={cn.heroBr} aria-hidden="true" />
			<div className={cn.heroCopy}>
				<Text size="XXL" className="wait show scale bold">
					Programs
				</Text>
				<Text className="wait show subtle color gray">
					Learn new skills & be more active in UCI’s design community!
				</Text>
			</div>
		</section>

		{anyAppsOpen ? (
			<div className={cn.statusWrap}>
				<div className={`wait show ${cn.statusBanner}`}>
					<span className={cn.statusDot} aria-hidden="true" />
					<p className={cn.statusText}>
						Applications are currently open for Design-a-thon —
						pick a card below to learn more and apply.
					</p>
				</div>
			</div>
		) : null}

		<Section className={`page short bareTop ${cn.gridSection}`}>
			<Space h="0" />
			<div className={cn.grid}>
				{PROGRAMS.map((program) => (
					<ProgramCard key={program.title} program={program} />
				))}
			</div>
		</Section>
	</div>
);

export default Programs;
