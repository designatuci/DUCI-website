import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import { Section, LoadingD, PageIcon } from '../../Symbols.js';
import { Text } from '../../components';
import formatRelativeDate from './controllers/formateDate';

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
					<div
						className='splitEventCard maxWidth'
						style={{ textAlign: 'left' }}
					>
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
									{event?.links?.map((item, i) => {
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
