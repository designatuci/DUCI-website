import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Text } from "app/components";
import { Section, Space, Icon, LoadingD, PageIcon } from "app/Symbols.js";

import EventCard from "./components/EventCard/EventCard.js";

import { useEvents } from "./useEvents.js";

const Events = () => {
	const { events, loading } = useEvents();

	if (loading) {
		return (
			<Helmet>
				<title>Events - Design at UCI</title>
			</Helmet>
		);
	}

	return (
		<>
			<Helmet>
				<title>Events - Design at UCI</title>
			</Helmet>
			<Section
				className={`center short ${
					events == null || events.next != null ? "widePage hint" : ""
				}`}
				style={{ paddingTop: "32px" }}
			>
				{!events ? (
					// Loading animation
					<LoadingD width="128" />
				) : // Large next event card
				!events.next ? (
					<div className="flex spaceChildrenSmall">
						<Space h="64" />
						<Text
							size="XXL"
							className="wait show scale bold color blue"
						>
							Stay Tuned
						</Text>
						<Text className="wait show subtle color blue">
							There are currently no upcoming events.
						</Text>
						<Space h="32" />
						<Text className="wait show subtle color gray">
							Be sure to <Link to="/join/">join us</Link> for
							notifications.
						</Text>
					</div>
				) : new Date(events.next.time) > new Date() ? (
					<>
						<div className="wait show flex row">
							<Icon w="32" h="32" src="next-event.svg" />
							<Space w="16" />
							<Text size="L" className="color blue">
								Upcoming Event
							</Text>
						</div>
						<Text className="color blue wait show subtle d05">
							{formatRelativeDate(events.next.time)}
						</Text>
						<LargeEvent event={events.next} />
					</>
				) : (
					<>
						<div className="wait show flex row">
							<Icon w="32" h="32" src="live-event.svg" />
							<Space w="16" />
							<Text size="L" className="bold color red">
								Live Now
							</Text>
						</div>
						<LargeEvent event={events.next} live="true" />
					</>
				)}
			</Section>
			<div
				className="center maxWidth fill gray"
				style={{ height: "88px", marginBottom: "0" }}
			>
				<Text size="L">Past Events</Text>
			</div>
			<Section className="center bare fill gray">
				<div
					className="splitEventCard maxWidth"
					style={{ textAlign: "left" }}
				>
					{events?.past &&
						events?.past
							.slice(0, 12)
							.map((event) => (
								<EventCard
									key={event.time + event.title}
									{...event}
								/>
							))}
				</div>
			</Section>
			<Section
				className="center bare fill gray"
				style={{ height: "128px", display: "flex" }}
			>
				<Link to="/events/all/" className="button color blue">
					<Text icon="right">View all events</Text>
				</Link>
			</Section>
			<Section className="center">
				<div
					className="flex left narrow spaceChildren"
					style={{ textAlign: "left" }}
				>
					<Icon src="workshop-icon-black.svg" w="64" h="64" />
					<Text size="XL">
						We host events with a wide range of topics about each
						week during the academic quarter.
					</Text>
					<Text color="gray">
						Including UX design concepts, graphic design techniques,
						interactive advice from industry speakers, social
						events, and more.
					</Text>
					<Text color="gray">
						Have a suggestion of something you would like to see?
						<br />
						Submit your feedback to{" "}
						<a href="mailto:hello@designatuci.com">
							hello@designatuci.com
						</a>
						.
					</Text>
				</div>
			</Section>
		</>
	);
};

function LargeEvent(props) {
	return (
		<div
			className="slim flex left textAlignLeft spaceChildren largeEvent"
			style={{ textAlign: "left" }}
		>
			<Text size="XL" className="bold">
				{props.event.title}
			</Text>
			<div className="split2 info">
				<div className="flex top row">
					<Icon w="24" h="24" src="time-blue.svg" />
					<Space w="8" />
					<Text className="color blue">
						{formatDate(props.event.time)}
					</Text>
				</div>
				<div className="split2">
					<div className="flex top row">
						<Icon w="24" h="24" src="type-blue.svg" />
						<Space w="8" />
						<Text className="color blue">{props.event.type}</Text>
					</div>
					<div className="flex top row">
						<Icon w="24" h="24" src="place-blue.svg" />
						<Space w="8" />
						<Text className="color blue">{props.event.place}</Text>
					</div>
				</div>
			</div>
			{props.event.links != null && (
				<div>
					{props.event.links.map((item, i) => {
						if (item.label === "Zoom Link")
							if (props.live)
								return (
									<a
										key={item.link}
										className="button S fill red"
										target="noreferer"
										href={item.link}
									>
										<Text>
											{item.label}
											<PageIcon
												color="var(--white)"
												style={{
													width: "24px",
													marginLeft: "4px",
												}}
											/>
										</Text>
									</a>
								);
							else
								return (
									<a
										key={item.link}
										className="button S fill blue"
										target="noreferer"
										href={item.link}
									>
										<Text>
											{item.label}
											<PageIcon
												color="var(--sky)"
												style={{
													width: "24px",
													marginLeft: "4px",
												}}
											/>
										</Text>
									</a>
								);
						else
							return (
								<a
									key={item.link}
									className="button S fill gray"
									target="noreferer"
									href={item.link}
								>
									<Text>
										{item.label}
										<PageIcon
											color="var(--white)"
											style={{
												width: "24px",
												marginLeft: "4px",
											}}
										/>
									</Text>
								</a>
							);
					})}
				</div>
			)}
			<Text className="color gray">{props.event.desc}</Text>
		</div>
	);
}

export default Events;

function formatDate(date) {
	let time = new Date(date);
	let str = "";
	str += mapDay(time.getDay()) + ", ";
	str += mapMonth(time.getMonth()) + " ";
	str += time.getDate() + " at ";
	str += getHour(time.getHours()) + ":";
	str += getMinutes(time.getMinutes()) + " ";
	str += getPeriod(time.getHours());
	str += " your time";
	return str;
}
function formatRelativeDate(date) {
	let now = new Date();
	let time = new Date(date);
	let diff = now - time;
	if (diff < 0) {
		diff = Math.abs(diff);
		const days = Math.round(diff / (1000 * 60 * 60 * 24));
		if (days === 0) {
			const minutes = Math.round(diff / (1000 * 60));
			if (minutes <= 60) {
				return `in ${minutes} minutes`;
			} else {
				return `Today`;
			}
		} else if (days <= 1) {
			return `In ${days} day`;
		} else if (days <= 7) {
			return `In ${days} days`;
		} else {
			let weeks = Math.round(days / 7);
			if (weeks === 1) {
				return `In ${weeks} week`;
			} else {
				return `In ${weeks} weeks`;
			}
		}
	} else {
		const days = Math.round(diff / (1000 * 60 * 60 * 24));
		if (days === 0) {
			const minutes = Math.round(diff / (1000 * 60));
			if (minutes <= 100) {
				return `Ended moments ago`;
			} else {
				const hours = Math.ceil(diff / (1000 * 60 * 60));
				return `${hours} hours ago`;
			}
		} else if (days <= 1) {
			return `${days} day ago`;
		} else if (days < 7) {
			return `${days} days ago`;
		} else if (days < 30) {
			let weeks = Math.round(days / 7);
			if (weeks === 1) {
				return `${weeks} week ago`;
			} else {
				return `${weeks} weeks ago`;
			}
		} else if (days < 120) {
			let months = Math.round(days / 30);
			if (months === 1) {
				return `${months} month ago`;
			} else {
				return `${months} months ago`;
			}
		} else if (days < 365) {
			return "Several months ago";
		} else {
			return "Over a year ago";
		}
	}
}
function getHour(h) {
	if (h > 12) {
		return h - 12;
	} else {
		return h;
	}
}
function getMinutes(m) {
	if (m < 10) {
		return "0" + m;
	} else {
		return m;
	}
}
function getPeriod(h) {
	if (h >= 12) {
		return "PM";
	} else {
		return "AM";
	}
}

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const mapDay = (n) => days[n];
const mapMonth = (n) => months[n];
