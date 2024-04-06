import React from "react";
import { Section } from "app/Symbols";
import clsx from "clsx";
import cn from "./Schedule.module.scss";

function Schedule() {
	return (
		<div className={cn.container} id="s-schedule">
			<Section>
				<h1 className={cn.title}>Schedule</h1>

				<span className={cn.note}>All times are in PST.</span>

				<h2>Friday - May 17th, 2024</h2>
				<div className={cn.list}>
					<div className={cn.event}>
						<div className={cn.time}>
							3:00 PM <span>↓</span> 5:00 PM
						</div>
						<div className={clsx(cn.title, cn.highlight)}>
							Check-In Begins
						</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							3:30 PM
							<span>↓</span>
							4:45 PM
						</div>
						<div className={clsx(cn.title)}>
							Team Formation Social
						</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							5:00 PM
							<span>↓</span>
							6:00 PM
						</div>
						<div className={clsx(cn.title)}>Opening Ceremony</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							6:30 PM
							<span>↓</span>
							7:30 PM
						</div>
						<div className={clsx(cn.title)}>Dinner Served</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							6:30 PM
							<span>↓</span>
							9:00 PM
						</div>
						<div className={clsx(cn.title)}>Work Hours</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							6:45 PM
							<span>↓</span>
							7:30 PM
						</div>
						<div className={cn.title}>Workshop</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							9:40 PM
							<span>↓</span>
							10:25 PM
						</div>
						<div className={cn.title}>Workshop</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							10:30 PM
							<span>↓</span>
							11:59 PM
						</div>
						<div className={cn.title}>Mentorship Hours</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
				</div>

				<h2>Saturday - May 18th, 2024</h2>
				<div className={cn.list}>
					<div className={cn.event}>
						<div className={cn.time}>
							10:00 AM<span>↓</span>10:45 AM
						</div>
						<div className={cn.title}>Check-In</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							11:00 AM
							<span>↓</span>
							11:45 AM
						</div>
						<div className={cn.title}>Breakfast Served</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							11:45 AM<span>↓</span>1:15 PM
						</div>
						<div className={cn.title}>Workshop</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							1:15 PM
							<span>↓</span>
							2:15 PM
						</div>
						<div className={cn.title}>Lunch Served</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							2:15 PM
							<span>↓</span>
							3:00 PM
						</div>
						<div className={cn.title}>Workshop</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							3:00 PM<span>↓</span>3:45 PM
						</div>
						<div className={cn.title}>Notion Social</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							4:00 PM
							<span>↓</span>
							4:45 PM
						</div>
						<div className={cn.title}>Workshop</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							4:45 PM<span>↓</span>5:45 PM
						</div>
						<div className={cn.title}>Dinner Served</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							5:45 PM
							<span>↓</span>
							7:00 PM
						</div>
						<div className={cn.title}>Work Hours</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							7:00 PM
							<span>↓</span>
							7:45 PM
						</div>
						<div className={cn.title}>Workshop</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							7:45 PM
							<span>↓</span>
							9:00 PM
						</div>
						<div className={cn.title}>Work Hours</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
					<div className={cn.event}>
						<div className={cn.time}>
							9:00 PM
							<span>↓</span>
							11:59 PM
						</div>
						<div className={cn.title}>Mentorship Hours</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
				</div>

				<h2>Sunday - May 19th, 2024</h2>
				<div className={cn.list}>
					<div className={cn.event}>
						<div className={cn.time}>
							10:00 AM
							<span>↓</span>
							11:45 AM
						</div>
						<div className={cn.title}>Check-In</div>
						<div className={cn.description}>
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
							Led by Design at UCI’s Design-a-thon Directors, Jay
							Sotelo, Jasmine Wu, & Elise Alinsug
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}

export default Schedule;
