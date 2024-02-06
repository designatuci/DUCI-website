import React from "react";
import { Section } from "app/Symbols";
import clsx from "clsx";
import cn from "./Schedule.module.scss";

function Schedule({ schedule }) {
	return (
		<div className={cn.container} id="s-schedule">
			<Section>
				<h1 className={cn.title}>Schedule</h1>
				<span className={cn.note}>
					In-person events are marked with (IP) and are open to UCI students
					only.
				</span>

				{schedule.map((day) => (
					<React.Fragment key={day.date}>
						<h2>{day.date}</h2>
						<div className={cn.list}>
							{day.events.map((event, index) => (
								<div className={cn.event} key={index}>
									<div className={cn.time}>{event.time}</div>
									<div
										className={clsx(
											cn.title,
											event.isHighlight && cn.highlight,
											event.isSpecial && cn.special
										)}
									>
										{event.title}
									</div>
									<div className={cn.description}>
										{event.description.map((paragraph, pIndex) => (
											<p key={pIndex}>{paragraph}</p>
										))}
									</div>
								</div>
							))}
						</div>
					</React.Fragment>
				))}
			</Section>
		</div>
	);
}

export default Schedule;
