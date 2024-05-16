import React, { useEffect, useState, useMemo, useCallback } from "react";

import { Section } from "app/Symbols";
import clsx from "clsx";
import cn from "./Schedule.module.scss";
import GridBackground from "../Backgrounds/GridBackground";

const FridaySchedule = () => {
	return (
		<div className={cn.list}>
			<h2 className={cn.date}>Friday - May 17th, 2024</h2>
			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Check In Starts</div>
						<div className={cn.location}>
							Crystal Cove Auditorium (Student Center)
						</div>
					</div>
					<div className={cn.time}>3:00 PM → 4:30 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Please check in to confirm your attendance at True to
						You!
						<br /> <br />
						If you are an in-person participant, check in at the
						Crystal Cove Auditorium. If you are an online
						participant, fill out the online check-in form!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Team Formation Social
						</div>
						<div className={cn.location}>
							Crystal Cove Auditorium (Student Center)
						</div>
					</div>
					<div className={cn.time}>3:30 PM → 4:30 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Looking for a team? Want to decorate your nametag? Come
						join your fellow designers to personalize your nametags,
						and find potential teammates for the event!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Opening Ceremony</div>
						<div className={cn.location}>
							Crystal Cove Auditorium (Student Center)
						</div>
					</div>
					<div className={cn.time}>4:30 PM → 5:30 PM</div>
				</div>
				<div className={cn.description}>
					<p>Join us for True to You's Opening Ceremony!</p>
					<p className={cn.host}>
						Led by co-directors Jasmine Wu, Jay Sotelo, and Elise
						Alinsug.
					</p>
				</div>

				<ZoomButton
					date={new Date(2024, 4, 17, 16, 30)}
					eventType={"ceremony"}
				/>
			</div>

			<div className={cn.important}>
				5:30 PM | Designing Officially Begins
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Dinner Served</div>
						<div className={cn.location}>DBH 6011 (Patio)</div>
					</div>
					<div className={cn.time}>6:30 PM → 7:30 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Feeling hungry? Get some fuel before you start
						designing!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Intro to Figma Workshop
						</div>
						<div className={cn.location}>DBH 6011</div>
					</div>
					<div className={cn.time}>6:40 PM → 7:25 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Join us for an "Intro to Figma" Workshop where we will
						cover the fundamentals of Figma.
						<br /> <br />
						Throughout the session, you will gain a comprehensive
						understanding of Figma's interface, basic
						functionalities, and workflow, empowering you to create
						stunning designs with ease!
					</p>
					<p className={cn.host}>Hosted by Commit the Change</p>
				</div>

				<ZoomButton date={new Date(2024, 4, 17, 18, 40)} />
			</div>

			<div className={cn.important}>9:00 PM | Venue Closes</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Embracing Your Authentic Self
						</div>
						<div className={cn.location}>Zoom</div>
					</div>
					<div className={cn.time}>9:40 PM → 10:35 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Be yourself.
						<br /> <br />
						Another piece of advice that’s just so much easier said
						than done.
						<br /> <br />
						Naheel was a lost and confused business student trying
						to figure out how to embrace his inner creative self,
						and build a life where he could do the creative things
						that made him happy.
						<br /> <br />
						Listen to an illustrated story of how Naheel embraced
						his authentic creative self, and got to where he is
						today.
					</p>
					<p className={cn.host}>
						Hosted by Naheel Jawaid (Product Designer @ Google)
					</p>
				</div>

				<ZoomButton date={new Date(2024, 4, 17, 21, 40)} />
			</div>
		</div>
	);
};

const SaturdaySchedule = () => {
	return (
		<div className={cn.list}>
			<h2 className={cn.date}>Saturday - May 18th, 2024</h2>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Check In Starts</div>
						<div className={cn.location}>
							Donald Bren Hall (DBH)
						</div>
					</div>
					<div className={cn.time}>8:00 AM → 9:00 AM</div>
				</div>
				<div className={cn.description}>
					<p>
						Please check in to confirm your attendance at True to
						You!
						<br /> <br />
						If you are an in-person participant, check in at Donald
						Bren Hall. If you are an online participant, fill out
						the online check-in form!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Breakfast Served</div>
						<div className={cn.location}>DBH 6011 (Patio)</div>
					</div>
					<div className={cn.time}>10:00 AM → 11:00 AM</div>
				</div>
				<div className={cn.description}>
					<p>
						Get some fuel before starting your design work for the
						day!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Research for Complexity
						</div>
						<div className={cn.location}>DBH 6011 & Online</div>
					</div>
					<div className={cn.time}>11:00 AM → 11:45 AM</div>
				</div>
				<div className={cn.description}>
					<p>
						Join this dynamic workshop as we explore the pivotal
						role of research in shaping design decisions. We'll dive
						into what research means, explain the concept of design
						research, and unveil how research enriches the user
						experience. This workshop will showcase the beauty of
						research by providing tips on how you can navigate user
						needs and market dynamics.
						<br /> <br />
						By using research and converting it to actionable
						insights, you'll be better equipped to create solutions
						that truly resonate with your audience. Whether you’re a
						seasoned designer or stepping into the world of design
						for the first time, this workshop will empower you on
						your Design-a-thon journey!
					</p>
					<p className={cn.host}>Hosted by Wenting Zhu</p>
				</div>

				<ZoomButton date={new Date(2024, 4, 18, 11, 30)} />
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Lunch Served</div>
						<div className={cn.location}>DBH 6011 (Patio)</div>
					</div>
					<div className={cn.time}>12:00 PM → 1:00 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Enjoy some lunch and treat yourself to a break from
						designing.
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Build-a-Critter LEGO Workshop
						</div>
						<div className={cn.location}>DBH 6011</div>
					</div>
					<div className={cn.time}>2:00 PM → 2:45 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Need help getting your creative juices flowing? This
						workshop will help you learn the importance of
						energizers for solo or group work to help catalyze
						motivation, creativity, and self reflection.
						<br /> <br />
						During this workshop, you will build a critter out of
						LEGO bricks that represents who you are, something that
						makes you unique, or a fear you want to get over. You
						will then have some time to talk about your critter with
						some of your classmates and draw inspiration from one
						another.
					</p>
					<br />
					<p className={cn.host}>
						Hosted by Cassandra Hoo (Senior UX Designer @ The Lego
						Group)
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Discord Social</div>
						<div className={cn.location}>Online (Discord)</div>
					</div>
					<div className={cn.time}>3:00 PM → 3:45 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Wanna take a break from designing? Join us on Discord
						and enjoy some games with your fellow designers!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Boba Break with Notion
						</div>
						<div className={cn.location}>DBH 6011 (Patio)</div>
					</div>
					<div className={cn.time}>3:00 PM → 3:45 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Break into Notion for project management with our
						exclusive Notion Workshop! Transform the way you handle
						projects by organizing tasks to collaborate seamlessly
						with your team.
						<br /> <br />
						Join us for ready-to-use templates and resources and to
						learn how to utilize customizations, databases, and
						integrations. Connect with an official Campus Leader at
						UC Irvine for personalized guidance and support. As a
						bonus, there will be templates for other use cases like
						creating your design portfolio and more! Don't miss out
						on this chance to boost your project management skills
						with Notion! Make sure to stop by for free boba! (While
						supplies last)
					</p>
					<br />
					<p className={cn.host}>Hosted by Notion</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Intro to Prototyping Workshop
						</div>
						<div className={cn.location}>DBH 6011</div>
					</div>
					<div className={cn.time}>3:45 PM → 4:30 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Need to prototype your designs and not sure how to
						start? Join our Intro to Prototyping workshop to learn
						how to utilize prototyping and animations to take your
						design to the next level!
						<br /> <br />
						This workshop will be focused on prototyping in Figma,
						which will bring your designs to life! We’ll be covering
						the prototyping basics, such as transitions and
						animations, to help you get hands on with your designs
						and bring them to the next level.
					</p>
					<p className={cn.host}>
						Hosted by Video Game Design Club (VGDC)
					</p>
				</div>

				<ZoomButton date={new Date(2024, 4, 18, 15, 45)} />
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Dinner Served</div>
						<div className={cn.location}>DBH 6011 (Patio)</div>
					</div>
					<div className={cn.time}>6:00 PM → 7:00 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Come have some food before locking into the final
						stretch of the event!
					</p>
				</div>
			</div>

			<div className={cn.important}>
				7:00 PM | Mid-Way Check In Form Due
			</div>

			<div className={cn.event}>
				<div className={clsx(cn.info)}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Accessibility & Cross Cultural Design
						</div>
						<div className={cn.location}>DBH 6011 & Online</div>
					</div>
					<div className={cn.time}>7:10 PM → 7:55 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						As designers and creators, it’s our responsibility to
						create accessible and inclusive spaces. Accessibility is
						often deprioritized as a “business need” and
						localization is seen as a “nice to have”. In this
						session, we’ll go over actionable steps you can take to
						create accessible products and inclusive spaces. We will
						go over how to advocate for accessibility and how to
						sell businesses on the return on investment of
						accessibility. We will also go over the nuances of
						designing for a global world and understand cultural
						differences by looking at case studies of real world
						examples.
					</p>
					<p className={cn.host}>
						Hosted by Gresshaa Mehta (Senior Product Designer @
						Microsoft)
					</p>
				</div>

				<ZoomButton date={new Date(2024, 4, 18, 19, 10)} />
			</div>

			<div className={cn.important}>9:00 PM | Venue Closes</div>
		</div>
	);
};

const SundaySchedule = () => {
	return (
		<div className={cn.list}>
			<h2 className={cn.date}>Sunday - May 19th, 2024</h2>

			<div className={cn.important}>8:00 AM | Final Submissions Due</div>

			<div className={cn.event}>
				<div className={cn.info}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Check In Starts</div>
						<div className={cn.location}>DBH 6011</div>
					</div>
					<div className={cn.time}>8:30 AM → 9:30 AM</div>
				</div>
				<div className={cn.description}>
					<p>
						Good morning designers and congrats on finishing your
						designs!
						<br /> <br />
						If you are an in-person participant, check in at Donald
						Bren Hall. If you are an online participant, fill out
						the online check-in form!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={cn.info}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Breakfast Served</div>
						<div className={cn.location}>DBH 6011 (Patio)</div>
					</div>
					<div className={cn.time}>8:30 AM → 9:30 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Come enjoy some breakfast before presenting your designs
						to your fellow participants!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={cn.info}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Discord Social</div>
						<div className={cn.location}>Online (Discord)</div>
					</div>
					<div className={cn.time}>10:00 AM → 12:00 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Want to shake off some nerves while waiting for the Top
						10 to be announced? Join us on Discord to hang out with
						your fellow designers and celebrate your designs!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={cn.info}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Expo Hall</div>
						<div className={cn.location}>DBH 6011</div>
					</div>
					<div className={cn.time}>10:00 AM → 12:00 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Welcome to the Expo Hall! Present your designs to your
						fellow designers for the chance to win the People's
						Choice Award, or the Honorable Mention Award!
					</p>
				</div>
			</div>

			<div className={cn.important}>
				12:00 PM | Announcing Top 10 Finalists
			</div>

			<div className={cn.event}>
				<div className={cn.info}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Top 10 Prepare Demos
						</div>
						<div className={cn.location}>DBH 6011</div>
					</div>
					<div className={cn.time}>12:10 PM → 1:00 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Top 10 will be given the chance to prepare their final
						pitches to the judges!
					</p>
				</div>
			</div>

			<div className={cn.important}>1:00 PM | Top 10 Demos Due</div>

			<div className={cn.event}>
				<div className={cn.info}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Top 10 Present Demos
						</div>
						<div className={cn.location}>DBH 6011</div>
					</div>
					<div className={cn.time}>1:30 PM → 3:00 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						The Top 10 teams will present their product to the
						judges, and have the chance to be crowned one of the Top
						3 teams!
					</p>
				</div>

				<ZoomButton date={new Date(2024, 4, 19, 13, 30)} />
			</div>

			<div className={cn.event}>
				<div className={cn.info}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>Lunch Served</div>
						<div className={cn.location}>DBH 6011</div>
					</div>
					<div className={cn.time}>3:00 PM → 5:00 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						Enjoy some lunch (or is it Linner?) while judges decide
						on the final Top 3 Winners!
					</p>
				</div>
			</div>

			<div className={cn.event}>
				<div className={cn.info}>
					<div className={clsx(cn.titleContainer)}>
						<div className={clsx(cn.title)}>
							Closing Ceremony & Announcing Winners
						</div>
						<div className={cn.location}>
							DBH 6011 & Online (Zoom)
						</div>
					</div>
					<div className={cn.time}>5:00 PM → 6:00 PM</div>
				</div>
				<div className={cn.description}>
					<p>
						The final Closing Ceremony of True to You! Final winners
						will be announced, alongside in-person awards!
					</p>
					<p className={cn.host}>
						Led by Design at UCI's Design-a-thon Directors, Jay
						Sotelo, Jasmine Wu, & Elise Alinsug
					</p>
				</div>

				<ZoomButton
					date={new Date(2024, 4, 19, 17, 0)}
					eventType={"ceremony"}
				/>
			</div>

			<div className={cn.important}>6:00 PM | Design-a-thon Ends</div>
		</div>
	);
};

const calculateDefaultDay = () => {
	const currentDate = new Date();

	if (currentDate < new Date(2024, 4, 17)) {
		return "Friday";
	} else if (currentDate < new Date(2024, 4, 18)) {
		return "Saturday";
	} else {
		return "Sunday";
	}
};

const DateToggle = ({ handleSelect, defaultDay }) => {
	const [selectedDay, setSelectedDay] = useState(defaultDay);

	const handleSelectDay = (event) => {
		const day = event.currentTarget.value;

		setSelectedDay(day);
		handleSelect(day);
	};

	return (
		<div className={cn.dateToggle}>
			<button
				onClick={handleSelectDay}
				value={"Friday"}
				className={clsx(
					cn.button,
					cn.friday,
					selectedDay === "Friday" && cn.selected,
				)}
			>
				Fri
			</button>
			<button
				onClick={handleSelectDay}
				value={"Saturday"}
				className={clsx(
					cn.button,
					cn.saturday,
					selectedDay === "Saturday" && cn.selected,
				)}
			>
				Sat
			</button>
			<button
				onClick={handleSelectDay}
				value={"Sunday"}
				className={clsx(
					cn.button,
					cn.sunday,
					selectedDay === "Sunday" && cn.selected,
				)}
			>
				Sun
			</button>
		</div>
	);
};

const ZoomButton = ({ date, eventType }) => {
	const [isUpcoming, setIsUpcoming] = useState(date > new Date());

	const handleClick = useCallback(() => {
		if (!isUpcoming) {
			window.open(
				eventType === "ceremony"
					? "https://uci.zoom.us/j/92344530635"
					: "https://uci.zoom.us/j/94772751120",
				"_blank",
			);
		}
	}, [eventType, isUpcoming]);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsUpcoming(date > new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, [date]);

	const buttonClassName = useMemo(() => {
		return clsx(cn.zoomButton, isUpcoming ? cn.beforeDate : cn.afterDate);
	}, [isUpcoming]);

	const buttonText = useMemo(() => {
		return isUpcoming ? "Zoom Link Posted Soon" : "Join Zoom";
	}, [isUpcoming]);

	const ariaLabel = useMemo(() => {
		return isUpcoming
			? "Zoom link will be posted soon"
			: "Join Zoom meeting in a new tab";
	}, [isUpcoming]);

	return (
		<button
			className={buttonClassName}
			onClick={handleClick}
			aria-label={ariaLabel}
		>
			<p>{buttonText}</p>
		</button>
	);
};

function Schedule() {
	const defaultDay = calculateDefaultDay();
	const [selectedDay, setSelectedDay] = useState(defaultDay);

	return (
		<div className={cn.container} id="s-schedule">
			<GridBackground
				positions={[
					{ top: 0, right: 0 },
					{ bottom: 0, left: 0 },
				]}
				isLight={false}
			/>

			<Section>
				<h1 className={cn.heading}>Schedule</h1>

				<DateToggle
					handleSelect={setSelectedDay}
					defaultDay={defaultDay}
				/>

				<span className={cn.note}>All times are in PST.</span>

				{selectedDay === "Friday" ? (
					<FridaySchedule />
				) : selectedDay === "Saturday" ? (
					<SaturdaySchedule />
				) : (
					<SundaySchedule />
				)}
			</Section>
		</div>
	);
}

export default Schedule;
