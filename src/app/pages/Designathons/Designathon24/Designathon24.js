import { Section } from "app/Symbols";
import { Text } from "app/components";
import EVENTS_2024 from "assets/data/designathon/2024/events.json";
import WINNERS_2024 from "assets/data/designathon/2024/winners.json";
import TIMER_2024 from "assets/data/designathon/2024/timer.json";
import JUDGES_2024 from "assets/data/designathon/2024/judges.json";
import KEYNOTE_2024 from "assets/data/designathon/2024/keynote.json";
import PRIZES_2024 from "assets/data/designathon/2024/prizes.json";
import WORKSHOP_HOSTS_2024 from "assets/data/designathon/2024/workshop-hosts.json";
import cn from "./Designathon24.module.scss";
import FOF from "./assets/FOF.png";
import notion from "./assets/notion.png";
import balsamiq from "./assets/balsamiq.png";
import {
	About,
	Profile,
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

		<About />
		<Speakers />

		<Rules />

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
