import { useCallback, useRef, useState } from "react";
import cn from "./Houses.module.scss";
import Helmet from "react-helmet";
import { Icon, Section } from "app/Symbols";
import { Text } from "app/components";
import clsx from "clsx";
import Symbol1 from "./assets/1.png";
import Symbol2 from "./assets/2.png";
import Symbol3 from "./assets/3.png";
import Symbol4 from "./assets/4.png";
import Symbol5 from "./assets/5.png";
import Symbol6 from "./assets/6.png";
import Symbol7 from "./assets/7.png";
import Symbol8 from "./assets/8.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import House1 from "./assets/Group1.png";
import House2 from "./assets/Group2.png";
import House3 from "./assets/Group3.png";
import House4 from "./assets/Group4.png";
import FAQ_QUESTIONS from "./assets/FAQ.json";

const PUBLIC_POINTS_SPREADSHEET =
	"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6BbuyZ3vqmItkfe48YYgeqdiK8cN8OogbcKvQrc3W4Y5705HWqGNEEseWb-V5rZC3-Rmd21lCaVVJ/pubhtml";

const Houses = () => {
	const HOUSES = [
		{
			name: "Water Tribe",
			icon: House1,
			description: "peaceful and resilient, this group presents calm and flow",
		},
		{
			name: "Earth Kingdom",
			icon: House2,
			description: "A diverse and resourceful nation known for its resolve",
		},
		{
			name: "Fire Nation",
			icon: House3,
			description: "A powerful and ambitious empire ruled by determination",
		},
		{
			name: "Air Nomads",
			icon: House4,
			description: "A nomadic society driven by a drive for peace",
		},
	];

	const HEADER_SYMBOLS = [
		{
			image: Symbol1,
			top: 10,
			left: 10,
		},
		{
			image: Symbol2,
			top: 10,
			left: 80,
		},
		{
			image: Symbol3,
			top: 25,
			left: 25,
		},
		{
			image: Symbol4,
			top: 30,
			left: 88,
		},
		{
			image: Symbol5,
			top: 55,
			left: 65,
		},
		{
			image: Symbol6,
			top: 60,
			left: 15,
		},
		{
			image: Symbol7,
			top: 70,
			left: 30,
		},
		{
			image: Symbol8,
			top: 70,
			left: 70,
		},
	];

	const joinSectionRef = useRef(null);

	const scrollToJoin = useCallback(() => {
		joinSectionRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<main className={cn.container}>
			<Helmet>
				<title>Events – Design at UCI</title>
			</Helmet>
			<header>
				{HEADER_SYMBOLS.map(({ image, top, left }, i) => (
					<div
						key={i}
						className={cn.decoration}
						style={{ top: top + "%", left: left + "%" }}
					>
						<img alt="decorative" src={image} className={"wait"} />
					</div>
				))}
				<div className={clsx(cn.catch, "wait")}>
					<Text size="M">
						<span>WIN A PRIZE</span> • earn the most points
					</Text>
				</div>
				<Text size="XXXL" className={clsx("wait", cn.title)}>
					Avatar Houses
				</Text>
				<Text color="gray" className="wait">
					be a part of your own design family
				</Text>
				<div className="wait show drop d10 l2">
					<button
						className={clsx("button L fill blue", cn.join)}
						onClick={scrollToJoin}
					>
						<Text size="L" color="white" icon="right">
							Join now
						</Text>
					</button>
				</div>
			</header>
			<div className={cn.about} id="about">
				<Section wrapperClass={cn.wrapper}>
					<Text color="white" size="XXL" className={clsx(cn.title, "wait")}>
						Network with other designers and compete for a prize
					</Text>
					<Text color="gray" size="L" className={clsx(cn.description, "wait")}>
						Connect with a smaller group of designers, cultivate your industry
						skills, and compete against other houses by attending our general
						meetings, industry events, workshop events, and socials. The house
						with the most points at the end of the quarter will receive a prize!
					</Text>
				</Section>
			</div>
			<div className={clsx(cn.houses, "wait")} id="houses">
				<Section>
					<Text size="XXL" className={cn.title}>
						The Houses
					</Text>
					<div className={cn.list}>
						{HOUSES.map(({ name, icon, description }) => (
							<div key={name} className={clsx(cn.house, "wait")}>
								<img alt="decorative" src={icon} />
								<Text size="L">{name}</Text>
								<Text color="gray">
									{description}
									<br />
								</Text>
							</div>
						))}
					</div>
					<div className="wait show drop d10 l2">
						<a
							href={PUBLIC_POINTS_SPREADSHEET}
							target="_blank"
							rel="noopener noreferrer"
							className={clsx("button L fill blue", cn.join)}
						>
							<Text size="L" color="white" icon="right">
								View All Points
							</Text>
						</a>
					</div>
				</Section>
			</div>
			<div className={cn.activities} id="activities-and-perks">
				<Section>
					<Text color="white" size="XXL" className="wait">
						Activities and Perks
					</Text>
					<div className={cn.list}>
						<div className={clsx(cn.item, "wait")}>
							<img alt="decorative" src={icon1} />
							<Text size="L" color="white">
								Networking Opportunities
							</Text>
							<Text color="gray">
								Connect with fellow designers and peers of all different
								experience levels
							</Text>
						</div>
						<div className={clsx(cn.item, "wait")}>
							<img alt="decorative" src={icon2} />
							<Text color="white">
								Hands-on Projects in Smaller Environments
							</Text>
							<Text color="gray">
								Participate in design projects in concentrated team environments
							</Text>
						</div>
						<div className={clsx(cn.item, "wait")}>
							<img alt="decorative" src={icon3} />
							<Text color="white"> Win Prizes by attending events</Text>
							<Text color="gray">
								Participate in more activities and boost up house points to win
								a prize!
							</Text>
						</div>
						<div className={clsx(cn.item, "wait")}>
							<img alt="decorative" src={icon4} />
							<Text color="white">
								Personalized 1:1 Communication with Board
							</Text>
							<Text color="gray">
								Talk directly with board members and schedule coffee chats
							</Text>
						</div>
					</div>
				</Section>
			</div>
			<div className={cn.faq} id="FAQ">
				<Section id="s-faq">
					<Text size="XL">FAQ</Text>
					<div className="split2 tc13">
						<div className="spaceChildren">
							<Text>
								ask any questions in our{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://discord.com/invite/MBVrKe9"
									style={{ textDecoration: "underline" }}
								>
									discord server
								</a>
							</Text>
						</div>
						<div className="spaceChildrenSmall">
							{FAQ_QUESTIONS.map((item, i) => (
								<Toggle
									key={i}
									closed={
										<div
											className={clsx(
												"faqitem gray card S flex left spaceChildrenSmall"
											)}
										>
											<div className="flex row top">
												<Text className="bold">{item.q}</Text>
											</div>
										</div>
									}
									opened={
										<div className="faqitem open card S flex left spaceChildrenSmall">
											<div className={cn.answer}>
												<Text className="bold">{item.q}</Text>
												<Text className="color gray">{item.a}</Text>
											</div>
										</div>
									}
								/>
							))}
						</div>
					</div>
				</Section>
			</div>
			<section ref={joinSectionRef} className={cn.bottom} id="join">
				{new Date() <
				new Date("Fri Oct 06 2023 17:00:0 GMT-0700 (Pacific Daylight Time)") ? (
					<>
						<Text size="XXL" className={cn.title}>
							Sign Up and Get Sorted!
						</Text>
						<Text color="gray" className={cn.description}>
							form open until <Text color="red">Friday at 5pm</Text>
						</Text>
						<div className={clsx("wait show drop d10 l2", cn.button)}>
							<a
								href="https://forms.gle/FreSgK8Kuw8FP5KQ6"
								className={clsx("button L fill blue", cn.join)}
							>
								<Text size="L" color="white" icon="right">
									Sign up
								</Text>
							</a>
						</div>
					</>
				) : (
					<>
						<Text size="XL" className={cn.title}>
							Didn’t get to Join a House? Send Us an Email
						</Text>
						<Text color="gray" className={cn.description}>
							To get sorted into a house, please email us or talk to a board
							member at any meeting!
						</Text>
						<div className={clsx("wait show drop d10 l2", cn.button)}>
							<a
								href="mailto:designatuci@gmail.com"
								target="_blank"
								rel="noreferrer noopener"
								className={clsx("button L fill blue", cn.join)}
							>
								<Text size="L" color="white" icon="right">
									Contact us
								</Text>
							</a>
						</div>
					</>
				)}
			</section>
		</main>
	);
};

const Toggle = ({ opened, closed }) => {
	const [open, setOpen] = useState(false);

	const toggleExpand = useCallback(() => {
		setOpen((p) => !p);
	}, []);

	return (
		<div className={clsx(cn.question, open && cn.opened)} onClick={toggleExpand}>
			<Icon
				src="d22-arrow.svg"
				w="18"
				h="18"
				style={{
					marginTop: 16,
					transform: open ? "rotate(180deg)" : "rotate(0deg)",
				}}
			/>
			{open ? opened : closed}
		</div>
	);
};

export default Houses;
