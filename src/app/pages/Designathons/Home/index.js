import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Text } from "app/components";
import { Section, Space, Icon } from "app/Symbols";

import PAST_EVENTS from "assets/data/designathon/overall.json";
import { EventListing } from "./components";
import SplashGraphics from "../Designathon24/components/Splash/SplashGraphics";
import SplashLogo from "../Designathon24/components/Splash/SplashLogo";

const Designathons = () => (
	<>
		<Helmet>
			<title>Design-a-thons – Design at UCI</title>
		</Helmet>
		<Section className="center short">
			<div className="wait dx scale flex row">
				<Icon w="64" h="64" src="designathon-logo.svg" />
				<Space w="32" block />
				<Text size="XL" className="bold color black">
					Design-a-thon at UCI
				</Text>
			</div>
			<Space h="16" />
			<div className="split2 textAlignLeft slim">
				<div className="flex left slim spaceChildrenSmall">
					<Text className="color gray">
						A large-scale event where teams work to design a
						prototype product within a few days.
					</Text>
					<Text className="color gray">
						To get involved, <Link to="/join/">join us</Link> to get
						notifications about when the next applications come out!
					</Text>
				</div>
				<div className="flex left slim spaceChildrenSmall">
					<Text className="color gray">
						Our Design-a-thon is held once per year, and is open to
						everyone. Bring your team or form one during the event,
						and compete to create the best design centered around
						the prompt. Additionally, you can attend workshops
						hosted during the event to get extra help and
						inspiration from industry professionals.
					</Text>
				</div>
			</div>
		</Section>

		<Section
			className="center fill black relative"
			style={{
				height: "90vh",
				background:
					"url(/static/photo/2024-4.png) center/cover no-repeat",
				backgroundColor: "#FFF4E0",
			}}
		>
			<div>
				<SplashGraphics />
			</div>

			<SplashLogo
				style={{
					maxWidth: "min(700px, 50%)",
					minWidth: "min(350px, 100%)",
					height: "fit-content",
					position: "absolute",
					marginBottom: "15%",
				}}
			/>

			<div style={{ position: "absolute", bottom: "10%" }}>
				<Text size="XL" className="bold" color="black">
					May 17-19, 2024
				</Text>
				<Space h="96" />
				<Link to="/designathon/24" className="flex spaceChildren">
					<Text className="button" color="blue" icon="right">
						Event Page
					</Text>
				</Link>
			</div>
		</Section>

		{PAST_EVENTS.map((event) => (
			<EventListing key={event.title} {...event} />
		))}
	</>
);

export default Designathons;
