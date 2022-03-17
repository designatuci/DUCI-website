import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import { Section, Text, LoadingD, PageIcon } from '../Symbols.js';

const EventsAll = () => {
	const [eventData, setEventData] = useState(null);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/designatuci/data/main/events.json'
		)
			.then(res => res.json())
			.then(data => {
				setEventData(data.events);
			});
	}, []);
	return (
		<>
			<Helmet>
				<title>Event Archive – Design at UCI</title>
			</Helmet>
			<Section className='center short'>
				<Text size='XL'>All Events</Text>
			</Section>
			<Section className='center short fill gray'>
				{eventData == null ? (
					// Loading animation
					<LoadingD width='128' style={{ marginBottom: '256px' }} />
				) : (
					// Large next event card
					<div className='splitEventCard maxWidth textAlignLeft'>
						{eventData.map((event, i) => {
							let future = new Date() < new Date(event.time);
							return (
								<div
									className={`fill ${
										future ? 'blue' : 'white'
									} card flex left spaceChildrenSmall`}
								>
									<Text
										className={`color ${
											future ? 'sky' : 'gray'
										}`}
									>
										{event.type}
									</Text>
									<Text size='L'>{event.title}</Text>
									{event.links &&
										event.links.map((item, i) => {
											if (item.label === 'Recording')
												return (
													<a
														target='noreferer'
														className='button S fill blue'
														href={item.link}
													>
														<Text>
															{item.label}
															<PageIcon
																color='var(--sky)'
																style={{
																	width: '24px',
																	marginLeft:
																		'4px',
																}}
															/>
														</Text>
													</a>
												);
											else if (
												item.label === 'Zoom Link' ||
												item.label === 'Discord Link'
											)
												return <></>;
											else
												return (
													<a
														target='noreferer'
														className='button S fill gray'
														href={item.link}
													>
														<Text>
															{item.label}
															<PageIcon
																color='var(--gray)'
																style={{
																	width: '24px',
																	marginLeft:
																		'4px',
																}}
															/>
														</Text>
													</a>
												);
										})}
									<Text
										className={`color ${
											future ? 'sky' : 'gray'
										}`}
										style={{ marginTop: 'auto' }}
									>
										{formatRelativeDate(event.time)}
									</Text>
								</div>
							);
						})}
					</div>
				)}
			</Section>
		</>
	);
};

export default EventsAll;

function formatRelativeDate(date) {
	let now = new Date();
	let time = new Date(date);
	let diff = now - time;
	if (diff < 0) {
		diff = Math.abs(diff);
		const days = Math.round(diff / (1000 * 60 * 60 * 24));
		if (days === 0) {
			return `Today`;
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
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		if (days === 0) {
			return `Hours ago`;
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
			return 'Several months ago';
		} else {
			return 'Over a year ago';
		}
	}
}
