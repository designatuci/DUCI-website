import { Section } from "app/Symbols";
import EVENTS_2024 from "assets/data/designathon/2024/events.json";
import PRIZES_2024 from "assets/data/designathon/2024/prizes.json";
import cn from "./Designathon24.module.scss";
import FOF from "./assets/FOF.png";
import notion from "./assets/notion.png";
import balsamiq from "./assets/balsamiq.png";
import {
	About,
	Prizes,
	SectionNavigation,
	FAQ,
	Rules,
	Speakers,
} from "./components";
import Schedule from "./components/Schedule";
import { Splash } from "./components/Splash/Splash";

const Designathon24 = () => (
	<main className={cn.container}>
		<div className={cn.hero}>
			<Splash />
			<div className={cn.title}>
				{/* <Icon className={cn.icon} src="designathon-white.svg" w="96" h="96" /> */}
				{/* <Text
					size="XXXL"
					className="bold"
					style={{ color: "var(--des24-black)" }}
				>
					True to You
				</Text>
				<div className={cn.timer}>
					<Timer breakpoints={TIMER_2024} />
				</div> */}
			</div>
		</div>

		<SectionNavigation />
		{/* Winners section will be updated when winners are announced */}
		{/* <WinnerShowcase winners={WINNERS_2024} /> */}

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
