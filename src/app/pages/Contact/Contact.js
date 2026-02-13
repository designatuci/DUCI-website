import { Helmet } from "react-helmet";

import { Text } from "app/components";
import { Section, Space, Icon } from "app/Symbols.js";
import socials from "assets/data/socials.json";

const Contact = () => (
	<>
		<Helmet>
			<title>Contact – Design at UCI</title>
		</Helmet>
		<Section className="center page">
			<div className="center narrow">
				<div className="flex">
					<a
						className="wait scale show dx button fill blue"
						href="mailto:design@uci.edu"
					>
						<Text size="L">design@uci.edu</Text>
					</a>
					<Space h="32" block />
					<Text className="color gray">
						Do you have a question, comment, or feedback for us?
						Want to collaborate with Design at UCI? Don't hesitate
						to send us an email.
					</Text>
				</div>
			</div>
			<Space h="32" />
			<div>
				<Text className="color gray">
					Reach out to us on social media:
				</Text>
				<Space h="16" block />
				<div className="flex row">
					{socials.map(({ name, link, icons }) => (
						<a
							key={name}
							style={{ padding: "12px" }}
							target="noreferer"
							href={link}
							className="wait show dx drop item social center"
						>
							<Icon w="24" h="24" hoverable src={icons.nav} />
						</a>
					))}
				</div>
			</div>
		</Section>
	</>
);

export default Contact;
