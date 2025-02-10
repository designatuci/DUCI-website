import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Text } from "app/components";
import { Section, Space, Icon } from "app/Symbols.js";
import ALUMNI_BOARD from "assets/data/alumniBoard.json";
import NEW_TESTIMONIALS from "assets/data/boardTestimonialsNew.json";
import CURRENT_BOARD from "assets/data/currentBoard.json";
import CURRENT_INTERNS from "assets/data/currentBoardInterns.json";

import { Profile } from "./components";
import { ReactComponent as EllipseBlue } from "./ellipse-blue.svg";
import { ReactComponent as EllipseYellow } from "./ellipse-yellow.svg";
import { ReactComponent as EllipseRed } from "./ellipse-red.svg";

import "./About.scss";

const COLOR_MAP = {
	blue: {
		color: "#079AFF",
		component: EllipseBlue,
	},
	yellow: {
		color: "#FFCC45",
		component: EllipseYellow,
	},
	red: {
		color: "#FB5A3D",
		component: EllipseRed,
	},
};

const About = () => (
	<>
		<Helmet>
			<title>About – Design at UCI</title>
		</Helmet>
		<div className="custom-carousel page hint">
			<Section className="short">
				<div className="narrow" style={{ color: "white" }}>
					<div></div>
					<Text className="wait subtle d05">Nice to meet you</Text>
					<Space block h="16" />
					<Text
						size="S"
						className="block-paragraph wait show scale l3 bold color white"
					>
						{"We're the premier club for UI, UX, and graphic design at the University of California Irvine."
							.split(" ")
							.map((word, i) => (
								<Text
									style={{ display: "inline-block" }}
									size="XXXL"
									key={i}
									className="wait dx l2 bold"
								>
									{word}
									<pre> </pre>
								</Text>
							))}
					</Text>
				</div>
			</Section>
		</div>

		<Section className="">
			<Text size="XL" className="wait slim">
				We provide a friendly space with helpful resources for students
				to become better designers.
			</Text>
			<Space block h="16" />
			<div className="split2" style={{ textAlign: "left" }}>
				<div className="narrow wait dx">
					<Text className="paragraph middle">
						Whether they're just starting out, or have been
						designing for several years. Through community,
						education, and collaboration, we strive to find
						meaningful ways to support and foster a design
						community.
					</Text>
					<Space block h="32" />
					<Link to="/resources/" className="color blue">
						<Text icon="right">View resources</Text>
					</Link>
				</div>
				<div className="narrow wait dx">
					<Text className="paragraph middle">
						Design at UCI meets once a week for a general meeting on
						most weeks while the academic quarter is in session.
						Join us on our social media pages and newsletter to get
						the latest updates regarding workshops, meetings and
						events. We can't wait to meet you!
					</Text>
					<Space block h="32" />
					<Link to="/events/" className="color blue">
						<Text icon="right">View events</Text>
					</Link>
				</div>
				<div className="narrow wait">
					<Text className="paragraph middle">
						There are no requirements to join, everyone is welcome
						to attend our meetings and use the resources we provide.
						Although some events may be exclusive to UCI students,
						we also host events with participants around the globe.
					</Text>
					<Space block h="32" />
					<Link to="/join/" className="color blue">
						<Text icon="right">Join for notifications</Text>
					</Link>
				</div>
			</div>
		</Section>

		<Section className="short fill color sky">
			<Text
				className="h2 center"
				size={"XL"}
				style={{
					textAlign: "center",
					marginTop: "50px",
					color: "black",
				}}
			>
				From our board
			</Text>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: 40,
					overflowX: "auto",
					color: "black",
					scrollbarWidth: "thin",
				}}
			>
				{NEW_TESTIMONIALS.map(({ quote, name, position }, index) => {
					const color =
						index % 3 === 0
							? "blue"
							: index % 3 === 1
							? "yellow"
							: "red";

					const { color: textColor, component: Component } =
						COLOR_MAP[color];

					return (
						<div
							key={name + position}
							style={{
								position: "relative",
								display: "flex",
								gap: 32,
								flexDirection: "column",
								justifyContent: "space-between",
								padding: 32,
								backgroundColor: "white",
								borderRadius: 16,
								width: 300,
								minWidth: 300,
							}}
						>
							<Component
								style={{
									position: "absolute",
									left: 0,
									bottom: 0,
								}}
							/>

							<div
								style={{
									display: "flex",
									gap: 64,
									flexDirection: "column",
									justifyContent: "space-between",
									zIndex: 1,
									height: "100%",
								}}
							>
								<div>
									<p
										style={{
											fontSize: 64,
											color: textColor,
										}}
									>
										&lsquo;&lsquo;
									</p>
									<Text
										style={{
											textAlign: "center",
											textWrap: "pretty",
										}}
									>
										{quote}
									</Text>
								</div>

								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										gap: 8,
									}}
								>
									<div
										style={{
											borderRadius: 1000,
											backgroundColor: "black",
											width: 80,
											height: 80,
											border: "4px solid white",
										}}
									/>

									<p
										style={{
											color: "white",
											fontWeight: 600,
										}}
									>
										{name}
									</p>

									<p className="color white">{position}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</Section>

		<Section className="board center">
			<Text size="XL">Board Members</Text>
			<div className="center row">
				{CURRENT_BOARD?.map((member, i) => (
					<Profile key={i} data={member} />
				))}
			</div>

			{Boolean(CURRENT_INTERNS?.length) && (
				<>
					<Text size="XL">Board Interns</Text>
					<div className="center row">
						{CURRENT_INTERNS.map((member, i) => (
							<Profile key={i} data={member} />
						))}
					</div>
				</>
			)}

			<Text size="XL" className="alumni-header">
				Board Alumni
			</Text>
			<div className="center row">
				{ALUMNI_BOARD?.map(({ year, members }) => (
					<Fragment key={year}>
						<Text className="color blue year-divider">
							Departed {year}
						</Text>
						{members.map((member, i) => (
							<Profile key={i} textOnly data={member} />
						))}
					</Fragment>
				))}
			</div>
		</Section>

		<Section className="short center fill color gray">
			<Text>Partners</Text>
			<div className="split3" style={{ columnGap: "128px" }}>
				<a target="noreferer" href="https://www.ics.uci.edu/">
					<Icon w="256" h="128" src="logo-uci.svg" />
				</a>
				<a target="noreferer" href="https://www.sketch.com/">
					<Icon w="256" h="128" src="logo-sketch.svg" />
				</a>
				<div className="center">
					<Link to="/contact/">
						<Text>Want to work with us?</Text>
					</Link>
				</div>
			</div>
		</Section>
	</>
);

export default About;
