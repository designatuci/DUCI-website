import "./designathon25-theme.scss";
import cn from "./Designathon25.module.scss";
import {
	Navigation,
	Hero,
	Stats,
	About,
	Prompt,
	Itinerary,
	FAQ,
	Prizes,
	Judges,
	Sponsors,
	// Team,
	Rules,
	// PastEvents,
	Footer,
} from "./components";

const Designathon25 = () => (
	<main className={`designathon25 ${cn.container}`}>
		<Navigation />
		<Hero />
		<Stats />
		<About />
		<Prompt />
		<Itinerary />
		<FAQ />
		<Prizes />
		<Judges />
		<Sponsors />
		{/* <Team /> */}
		<Rules />
		{/* <PastEvents /> */}
		<Footer />
	</main>
);

export default Designathon25;
