import { Section } from "app/Symbols";
import { Text } from "app/components";
import EVENTS_2024 from "assets/data/designathon/2024/events.json";
import WINNERS_2024 from "assets/data/designathon/2024/winners.json";
import TIMER_2024 from "assets/data/designathon/2024/timer.json";
import JUDGES_2024 from "assets/data/designathon/2024/judges.json";
import KEYNOTE_2024 from "assets/data/designathon/2024/keynote.json";
import PRIZES_2024 from "assets/data/designathon/2024/prizes.json";
import WORKSHOP_HOSTS_2024 from "assets/data/designathon/2024/workshop-hosts.json";
import RULES_2024 from "assets/data/designathon/2024/rules.json";
import cn from "./Designathon24.module.scss";
import FOF from "./assets/FOF.png";
import notion from "./assets/notion.png";
import balsamiq from "./assets/balsamiq.png";
import {
	Prizes,
	SectionNavigation,
	FAQ,
	Rules,
	Timer,
	WinnerShowcase,
	Speakers,
} from "./components";
import Schedule from "./components/Schedule";
import { Splash } from "./components/Splash";

const Designathon24 = () => (
	<main className={cn.container}>
		<div className={cn.hero}>
			<div style={{ height: "100%", width: "100%" }}>
				<Splash />
			</div>
			<div className={cn.title}>
				{/* <Icon className={cn.icon} src="designathon-white.svg" w="96" h="96" /> */}
				<Text
					size="XXXL"
					className="bold"
					style={{ color: "var(--des24-black)" }}
				>
					True to You
				</Text>
				<div className={cn.timer}>
					<Timer breakpoints={TIMER_2024} />
				</div>
			</div>
		</div>

		<SectionNavigation />
		<WinnerShowcase winners={WINNERS_2024} />

		<div
			className={cn.about}
			id="s-about"
			style={{ borderBottom: "4px solid black" }}
		>
			<Section>
				<h2 className={cn.aboutHeading}>About</h2>
				<p>
					Design-a-thon is a 3 day long hybrid event where you or a team design
					a product focused on the theme: community and inclusivity. It takes
					place on February 24, starting at 5:30 pm and ends February 26, 8:00
					pm PST.
				</p>
				<p>
					Design at UCI is the premier student-run organization at UCI for
					anything graphic design, UI/UX design, product design, and more.
					Started in 2016, we foster a special community for all digital
					designers to connect, learn, and innovate.
				</p>
				<p>
					Design at UCI’s designathon is the largest collegiate designathon in
					Orange County. Each year, we bring together hundreds of student
					designers nationwide to define, develop, and pitch a product built
					from scratch. We hope that this experience can help you acquire and
					grow both your soft and hard skills in empathizing with your users,
					defining a set of goals and needs, developing your product, and
					improving your confidence and creativity as a human-centric designer.
				</p>
			</Section>
		</div>

		<Speakers />

		<Rules rules={RULES_2024} />

		<div className={cn.prizes} id="s-prizes">
			<Prizes list={PRIZES_2024} />
		</div>

		<Schedule schedule={EVENTS_2024} />

		<FAQ />

		<div className={cn.sponsors} id="s-sponsors">
			<Section>
				<h2>Sponsors</h2>
				<div className={cn.logos}>
					<div>
						<a
							href="https://friends.figma.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={FOF} alt="Friends of Figma" />
						</a>
					</div>
					<div>
						<a
							href="https://www.notion.so/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							<img src={notion} alt="Notion" />
						</a>
					</div>
					<div>
						<a
							href="https://balsamiq.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={balsamiq} alt="balsamiq" />
						</a>
					</div>
				</div>
			</Section>
		</div>
	</main>
);

export default Designathon24;
