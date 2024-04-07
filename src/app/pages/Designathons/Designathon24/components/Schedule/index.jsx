import React from "react";
import { Section } from "app/Symbols";
import clsx from "clsx";
import cn from "./Schedule.module.scss";
import GridBackground from "../Backgrounds/GridBackground";

function Schedule() {
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

				<span className={cn.note}>All times are in PST.</span>

				<h2 className={cn.date}>Friday - May 17th, 2024</h2>
				<div className={cn.list}>
					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Check-In Begins
								</div>
								<div className={cn.location}>
									Crystal Cove Auditorium (Student Center)
								</div>
							</div>
							<div className={cn.time}>3:00 PM → 5:00 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us live at Crystal Cove or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
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
							<div className={cn.time}>3:30 PM → 4:45 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Opening Ceremony
								</div>
								<div className={cn.location}>
									Location of the Event
								</div>
							</div>
							<div className={cn.time}>5:00 PM → 6:00 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.important}>
						6:30 PM | Designing Officially Begins
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Dinner Served
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>6:30 PM → 7:30 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Work Hours</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>6:30 PM → 9:00 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Workshop</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>6:45 PM → 7:30 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.important}>9:00 PM | Venue Closes</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Workshop</div>
								<div className={cn.location}>Online</div>
							</div>
							<div className={cn.time}>9:40 PM → 10:25 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Mentorship Hours
								</div>
								<div className={cn.location}>Online</div>
							</div>
							<div className={cn.time}>10:30 PM → 11:59 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<h2 className={cn.date}>Saturday - May 18th, 2024</h2>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Check-In</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>9:00 AM → 10:00 AM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Breakfast Served
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>10:00 AM → 11:00 AM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Workshop</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>11:00 AM → 11:45 AM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Work Hours</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>11:45 AM → 1:15 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Lunch Served
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>1:15 PM → 2:15 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Workshop</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>2:15 PM → 3:00 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Notion Social
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>3:00 PM → 3:45 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Workshop</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>4:00 PM → 4:45 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Dinner Served
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>4:45 PM → 5:45 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Work Hours</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>5:45 PM → 7:00 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.important}>
						7:00 PM | Team Check-In Due
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Workshop</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>7:00 PM → 7:45 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Work Hours</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>7:45 PM → 9:00 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.important}>9:00 PM | Venue Closes</div>

					<div className={cn.event}>
						<div className={clsx(cn.info)}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Mentorship Hours
								</div>
								<div className={cn.location}>Online</div>
							</div>
							<div className={cn.time}>9:00 PM → 11:59 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<h2 className={cn.date}>Sunday - May 19th, 2024</h2>

					<div className={cn.important}>
						8:00 AM | Final Submissions Due
					</div>

					<div className={cn.event}>
						<div className={cn.info}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>Check-In</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>10:00 AM → 11:45 AM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>
					<div className={cn.event}>
						<div className={cn.info}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Mentorship Hours
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>10:00 AM → 12:00 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
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
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.important}>
						1:00 PM | Top 10 Demos Due
					</div>

					<div className={cn.event}>
						<div className={cn.info}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Top 10 Present Demos
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>1:00 PM → 1:30 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>
					<div className={cn.event}>
						<div className={cn.info}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Mentorship Hours
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>2:30 PM → 3:30 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>
					<div className={cn.event}>
						<div className={cn.info}>
							<div className={clsx(cn.titleContainer)}>
								<div className={clsx(cn.title)}>
									Winners Announced & Closing Ceremony
								</div>
								<div className={cn.location}>DBH 6011</div>
							</div>
							<div className={cn.time}>3:30 PM → 4:30 PM</div>
						</div>
						{/* <div className={cn.description}>
							<p>
								Join us or on our{" "}
								<a
									href="https://uci.zoom.us/j/93490306811"
									target="_blank"
									rel="noopener noreferrer"
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI's Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div> */}
					</div>

					<div className={cn.important}>
						4:30 PM | Design-a-thon Ends
					</div>
				</div>
			</Section>
		</div>
	);
}

export default Schedule;
