 /* eslint-disable */
// TODO: pending refactor

import { Helmet } from 'react-helmet';
import { useState, useEffect, Component } from 'react';
import { Section, Space, Icon, Photo } from 'app/Symbols.js';
import { Text } from 'app/components';
import { Judges, Prizes, Rules, SectionNavigation, WinnerShowcase, WorkshopHosts } from './components';
import WINNERS_2022 from 'assets/data/designathon/2022/winners.json'
import JUDGES_2022 from 'assets/data/designathon/2022/judges.js'
import PRIZES_2022 from 'assets/data/designathon/2022/prizes.json';
import WORKSHOP_HOSTS_2022 from 'assets/data/designathon/2022/workshop-hosts.js';
import RULES_2023 from 'assets/data/designathon/2022/rules.json';

const Designathon22 = () => {
	useEffect(() => {
		T = 0;
		initialize();

		return () => {
			// user leaving, clean-up
			stop();
			window.removeEventListener('resize', resize);
			window.removeEventListener('scroll', scroll);
		};
	}, []);
	return (
		<>
			<Helmet>
				<title>Impact 2022</title>
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Impact 2022' />
				<meta
					property='og:description'
					content='Design-a-thon at UCI'
				/>
				<meta
					property='og:image'
					content='https://designatuci.com/ogimg-designathon22.png'
				/>
				<meta
					property='og:url'
					content='https://designatuci.com/designathon22/'
				/>
				<meta property='og:site_name' content='Impact 2022' />
			</Helmet>

			<Section
				className='bare center page fill black relative'
				style={{ background: 'var(--black)' }}
			>
				<Space h='144' />
				<Icon src='designathon-white.svg' w='96' h='96' />
				<Text size='XXXL' className='bold'>
					Impact 2022
				</Text>
				<StatusBlock />
				<canvas id='view' />
				<style>{`
                :root {
                    --d-violet: #4D82F5;
                    --d-green: #4DD68C;
                    --d-pink: #FFD6FF;
                }
                #view {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    width: 100%; height: 100%;
                    z-index: 0;
                }
                .maincontent .text {
                    color: #334;
                }
                
                #timer {
                    overflow: visible;
                    position: relative;
                    padding: 8px 16px;
                    border-radius: 24px;
                    background: var(--white);
                    color: var(--black);
                    width: unset;
                    padding-left: 24px;
                }
                #s-resources .card {
                    border-radius: 16px;
                    box-shadow: 0 4px 16px -12px var(--gray);
                }
                .maincontent .split4 {
                    gap: 32px;
                }
                .faqitem {
                    transition: 0.3s;
                }
                .faqitem:hover {
                    background: var(--silver);
                }
                .faqitem.open {
                    background: var(--white);
                    box-shadow: 0 0 0 2px var(--silver);
                }
                .faqitem.open .icon {
                    transition: 0.3s;
                }
                .faqitem.open .icon {
                    transform: rotateZ(180deg);
                }
                .maincontent .schedule .text {
                    color: white;
                }
                .maincontent .schedule > .split2.header {
                    border-top: dotted 2px var(--gray);
                    padding-top: 8px;
                }
                .maincontent .schedule > .split2 {
                    padding-bottom: 32px;
                    display: grid;
                    grid-template-columns: 96px 1fr;
                    margin-bottom: 8px;
                }
                .maincontent .schedule > .split2 .line {
                    width: 2px;
                    height: 100%;
                    background: var(--d-violet);
                    margin: 8px 4px;
                    border-radius: 2px;
                }
                .maincontent .tc13 {
                    grid-template-columns: 1fr 3fr;
                }
                .liveTimer {
                    animation: timerPulse 4s ease-in-out infinite;
                }
                .rubric {
                    display: grid;
                    gap: 8px;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                }
                .rubric .text {
                    text-align: left;
                    color: white;
                }
                .rubric .text.color.silver {
                    opacity: 0.88;
                }
                .rubric > div {
                    border-top: 1px solid var(--gray);
                    padding: 8px 2px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                }
                @keyframes timerPulse {
                    0% { opacity: 1; }
                    50% { opacity: 1; }
                    75% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
                @media only screen and (max-width: 768px) {
                    .rubric {
                        grid-template-columns: 1fr;
                    }
                    .maincontent .tc13 {
                        grid-template-columns: 1fr;
                        gap: 64px;
                    }
                    .maincontent .split4 {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 64px;
                    }
                    .maincontent .split5 {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
			</Section>
			<div class='maincontent'>
				<SectionNavigation />				
				<WinnerShowcase winners={WINNERS_2022} />
				<Section
					id='s-overview'
					className='flatBot'
					style={{
						background:
							'linear-gradient(0deg,var(--white),var(--d-pink),var(--d-violet),var(--black))',
					}}
				>
					<div className='flex center spaceChildrenLarge'>
						<Text size='XL' className='color white'>
							Impact 2022 is a 3 day long design-a-thon event
							where student designers create a product with the
							potential to impact the world.
						</Text>
						<div
							className='card flex fill black'
							style={{ borderRadius: '16px' }}
						>
							<Rubric />
						</div>
						<Space h='16' />
						<div className='split3 textAlignLeft'>
							<div className='flex top spaceChildrenSmall'>
								<Text className='color blue'>Timeline</Text>
								<Text>
									January 28 6:00pm - January 30 7:00pm
									(California, PST)
								</Text>
							</div>
							<div className='flex top spaceChildrenSmall'>
								<Text className='color blue'>Our goal</Text>
								<Text>
									To challenge and hone the design thinking
									processes of students by introducing
									real-life challenges.
								</Text>
							</div>
							<div className='flex top spaceChildrenSmall'>
								<Text className='color blue'>Eligibility</Text>
								<Text>
									Undergraduate students from colleges all
									over the country will be eligible to attend
									at no cost.
								</Text>
							</div>
						</div>
					</div>
				</Section>
				<Prizes list={PRIZES_2022} />

				<Judges profiles={JUDGES_2022}/>

				<WorkshopHosts profiles={WORKSHOP_HOSTS_2022} />

				<Rules rules={RULES_2023} />
				<Section id='s-schedule' className='fill black'>
					<div className='flex left'>
						<Text size='XL' className='color white'>
							Schedule
						</Text>
					</div>
					<div className='flex left'>
						<Text size='L' className='color gray'>
							Friday January 28th
						</Text>
					</div>
					<div className='schedule'>
						{[
							{
								line: 1,
								time: '6:00 PM',
								title: 'Opening Ceremony',
								desc: (
									<div className='flex left spaceChildren'>
										<TimerText
											className='color gray'
											start='1/28/2022 6:00:00 PM (PST)'
											end='1/28/2022 8:00:00 PM (PST)'
										/>
										<a
											className='button S fill dusk'
											href='https://www.youtube.com/watch?v=IKoF9pB88XA'
											target='noreferer'
										>
											<Text>Recording</Text>
											<Icon
												w='24'
												h='24'
												src='pagelink-white.svg'
												style={{ marginLeft: '8px' }}
											/>
										</a>
									</div>
								),
							},
							{
								line: 1,
								time: '8:00 PM',
								title: 'Mentor Office Hours on Discord',
							},
							{ time: '9:00 PM', title: '' },
						].map(item => {
							return (
								<div
									className={`split2${
										item.line ? ' header' : ''
									}`}
								>
									<div>
										<Text
											className='bold'
											style={{
												flexBasis: '128px',
												color: 'var(--d-violet)',
											}}
										>
											{item.time}
										</Text>
										{item.line && <div className='line' />}
									</div>
									<div className='flex left spaceChildren'>
										<Text size='L'>{item.title}</Text>
										{item.desc != null && item.desc}
									</div>
								</div>
							);
						})}
					</div>
					<div className='flex left'>
						<Text size='L' className='color gray'>
							Saturday January 29th
						</Text>
					</div>
					<div className='schedule'>
						{[
							{
								line: 1,
								time: '10:00 AM',
								title: 'Workshop: Designing Under Constraints with Katrina Liu',
								desc: (
									<div className='flex left spaceChildren'>
										<TimerText
											className='color gray'
											start='1/29/2022 10:00:00 AM (PST)'
											end='1/29/2022 10:30:00 AM (PST)'
										/>
										<a
											className='button S fill dusk'
											href='https://www.youtube.com/watch?v=gPScKK8MQCQ'
											target='noreferer'
										>
											<Text>Recording</Text>
											<Icon
												w='24'
												h='24'
												src='pagelink-white.svg'
												style={{ marginLeft: '8px' }}
											/>
										</a>
									</div>
								),
							},
							{ time: '10:30 AM', title: '' },
							{
								line: 1,
								time: '11:00 AM',
								title: 'Mentor Office Hours on Discord',
							},
							{ time: '12:00 PM', title: '' },
							{
								line: 1,
								time: '12:00 PM',
								title: 'Workshop: How to Effectively Present Your Design with Samanvay Kasarala',
								desc: (
									<div className='flex left spaceChildren'>
										<TimerText
											className='color gray'
											start='1/29/2022 12:00:00 PM (PST)'
											end='1/29/2022 12:30:00 PM (PST)'
										/>
										<a
											className='button S fill dusk'
											href='https://drive.google.com/file/d/1bz7rmeKhZBEXDMd_rE_iixe922tWHqDz/view?usp=sharing'
											target='noreferer'
										>
											<Text>Recording</Text>
											<Icon
												w='24'
												h='24'
												src='pagelink-white.svg'
												style={{ marginLeft: '8px' }}
											/>
										</a>
									</div>
								),
							},
							{ time: '12:30 PM', title: '' },
							{
								line: 1,
								time: '2:00 PM',
								title: "Workshop: How to build Tech for Social Good with CTC's Alan Chang and Mingjia Wang",
								desc: (
									<div className='flex left spaceChildren'>
										<TimerText
											className='color gray'
											start='1/29/2022 2:00:00 PM (PST)'
											end='1/29/2022 2:30:00 PM (PST)'
										/>
										<a
											className='button S fill dusk'
											href='https://drive.google.com/file/d/1kBLKAahM0FmaftYxnDryiMuuNYP-dEAu/view?usp=sharing'
											target='noreferer'
										>
											<Text>Recording</Text>
											<Icon
												w='24'
												h='24'
												src='pagelink-white.svg'
												style={{ marginLeft: '8px' }}
											/>
										</a>
									</div>
								),
							},
							{ time: '2:30 PM', title: '' },
							{
								line: 1,
								time: '3:00 PM',
								title: 'Workshop: Prototyping in Figma with Evangeline Gao',
								desc: (
									<div className='flex left spaceChildren'>
										<TimerText
											className='color gray'
											start='1/29/2022 3:00:00 PM (PST)'
											end='1/29/2022 3:30:00 PM (PST)'
										/>
										<a
											className='button S fill dusk'
											href='https://drive.google.com/file/d/16PyW7AiRz9yzfOf15CDpWuKSPBHrHGZu/view?usp=sharing'
											target='noreferer'
										>
											<Text>Recording</Text>
											<Icon
												w='24'
												h='24'
												src='pagelink-white.svg'
												style={{ marginLeft: '8px' }}
											/>
										</a>
									</div>
								),
							},
							{ time: '3:30 PM', title: '' },
							{
								line: 1,
								time: '5:00 PM',
								title: 'Workshop: Design Basics with Hannah Limary',
								desc: (
									<div className='flex left spaceChildren'>
										<TimerText
											className='color gray'
											start='1/29/2022 5:00:00 PM (PST)'
											end='1/29/2022 5:30:00 PM (PST)'
										/>
										<a
											className='button S fill dusk'
											href='https://drive.google.com/file/d/1VrH2I56WJFUXmrEYMiwMYltx4gzpixbX/view?usp=sharing'
											target='noreferer'
										>
											<Text>Recording</Text>
											<Icon
												w='24'
												h='24'
												src='pagelink-white.svg'
												style={{ marginLeft: '8px' }}
											/>
										</a>
									</div>
								),
							},
							{ time: '5:30 PM', title: '' },
							{
								line: 1,
								time: '7:00 PM',
								title: 'Design Petor 101, a social with Isabel Pham on Discord',
							},
							{ time: '7:30 PM', title: '' },
							{
								line: 1,
								time: '8:00 PM',
								title: 'Mentor Office Hours on Discord',
							},
							{ time: '9:00 PM', title: '' },
						].map(item => {
							return (
								<div
									className={`split2${
										item.line ? ' header' : ''
									}`}
								>
									<div>
										<Text
											className='bold'
											style={{
												flexBasis: '128px',
												color: 'var(--d-violet)',
											}}
										>
											{item.time}
										</Text>
										{item.line && <div className='line' />}
									</div>
									<div className='flex left spaceChildren'>
										<Text size='L'>{item.title}</Text>
										{item.desc != null && item.desc}
									</div>
								</div>
							);
						})}
					</div>
					<div className='flex left'>
						<Text size='L' className='color gray'>
							Sunday January 30th
						</Text>
					</div>
					<div className='schedule'>
						<div className='split2 header'>
							<div>
								<Text
									className='bold'
									style={{
										flexBasis: '128px',
										color: 'var(--pink)',
									}}
								>
									1:00 PM
								</Text>
							</div>
							<div className='flex left spaceChildren'>
								<Text size='L' style={{ color: 'var(--pink)' }}>
									Submissions Due
								</Text>
								<TimerText
									className='color gray'
									start='1/30/2022 1:00:00 PM (PST)'
								/>
								<a
									className='button S fill green'
									href='https://forms.gle/B4cpgMFtYRawP2ue8'
									target='noreferer'
								>
									<Text>Submission Form</Text>
									<Icon
										w='24'
										h='24'
										src='pagelink-white.svg'
										style={{ marginLeft: '8px' }}
									/>
								</a>
							</div>
						</div>
						{[
							{ time: '3:00 PM', title: 'Finalists Notified' },
							{
								time: '3:45 PM',
								title: 'Optional Slide Decks Due for Finalists',
							},
							{
								time: '4:00 PM',
								title: 'Presentations',
								desc: (
									<div className='flex left spaceChildren'>
										<TimerText
											className='color gray'
											start='1/30/2022 4:00:00 PM (PST)'
											end='1/30/2022 5:00:00 PM (PST)'
										/>
										<a
											className='button S fill dusk'
											href='https://drive.google.com/file/d/1l5oAqun2yqJOTyl4RpRdAX3VTOnEwnFu/view?usp=sharing'
											target='noreferer'
										>
											<Text>Recording</Text>
											<Icon
												w='24'
												h='24'
												src='pagelink-white.svg'
												style={{ marginLeft: '8px' }}
											/>
										</a>
									</div>
								),
							},
							{
								time: '6:00 PM',
								title: 'Closing Ceremony',
								desc: (
									<div className='flex left spaceChildren'>
										<TimerText
											className='color gray'
											start='1/30/2022 6:00:00 PM (PST)'
											end='1/30/2022 7:00:00 PM (PST)'
										/>
										<a
											className='button S fill dusk'
											href='https://drive.google.com/file/d/1_f6PA_-dBKhNTTEV2ZvCUCjjErohQeZ0/view?usp=sharing'
											target='noreferer'
										>
											<Text>Recording</Text>
											<Icon
												w='24'
												h='24'
												src='pagelink-white.svg'
												style={{ marginLeft: '8px' }}
											/>
										</a>
									</div>
								),
							},
						].map(item => {
							return (
								<div className='split2 header'>
									<div>
										<Text
											className='bold'
											style={{
												flexBasis: '128px',
												color: 'var(--d-violet)',
											}}
										>
											{item.time}
										</Text>
										{item.line && <div className='line' />}
									</div>
									<div className='flex left spaceChildren'>
										<Text size='L'>{item.title}</Text>
										{item.desc != null && item.desc}
									</div>
								</div>
							);
						})}
					</div>
				</Section>

				<Section id='s-resources' className='fill gray'>
					<Text size='XL'>Resources</Text>
					<div
						style={{ background: 'var(--white)' }}
						className='wait dx show card flex left fill sky spaceChildrenSmall'
					>
						<Icon
							w='192'
							h='96'
							src='res-designathon-recordings.svg'
							style={{
								marginTop: '-32px',
								margin: '-16px',
								marginBottom: '0',
							}}
						/>
						<Text
							size='L'
							className='bold'
							style={{ color: '#1CC29A' }}
						>
							Design-a-thon Workshop Recordings
						</Text>
						<Text className='color gray'>
							We will be recording the workshops happening during
							Impact 2022 and uploading them here. If you miss an
							event, check back here later!
						</Text>
						<Space h='16' />
						<div className='split3 maxWidth'>
							<a
								href='https://www.youtube.com/watch?v=IKoF9pB88XA'
								target='noreferer'
								className='flex top left card spaceChildrenSmall'
								style={{ background: 'var(--silver)' }}
							>
								<Icon src='icon-movie.svg' w='48' h='48' />
								<Text className='color gray'>25:37</Text>
								<Text className='bold'>Opening Ceremony</Text>
							</a>
							<a
								href='https://www.youtube.com/watch?v=gPScKK8MQCQ'
								target='noreferer'
								className='flex top left card spaceChildrenSmall'
								style={{ background: 'var(--silver)' }}
							>
								<Icon src='icon-movie.svg' w='48' h='48' />
								<Text className='color gray'>39:18</Text>
								<Text className='bold'>
									Workshop: Designing Under Constraints with
									Katrina Liu
								</Text>
							</a>
							<a
								href='https://drive.google.com/file/d/1bz7rmeKhZBEXDMd_rE_iixe922tWHqDz/view?usp=sharing'
								target='noreferer'
								className='flex top left card spaceChildrenSmall'
								style={{ background: 'var(--silver)' }}
							>
								<Icon src='icon-movie.svg' w='48' h='48' />
								<Text className='color gray'>36:42</Text>
								<Text className='bold'>
									Workshop: How to Effectively Present Your
									Design with Samanvay Kasarala
								</Text>
							</a>
							<a
								href='https://drive.google.com/file/d/1kBLKAahM0FmaftYxnDryiMuuNYP-dEAu/view?usp=sharing'
								target='noreferer'
								className='flex top left card spaceChildrenSmall'
								style={{ background: 'var(--silver)' }}
							>
								<Icon src='icon-movie.svg' w='48' h='48' />
								<Text className='color gray'>18:35</Text>
								<Text className='bold'>
									Workshop: How to build Tech for Social Good
									with CTC's Alan Chang and Mingjia Wang
								</Text>
							</a>
							<a
								href='https://drive.google.com/file/d/16PyW7AiRz9yzfOf15CDpWuKSPBHrHGZu/view?usp=sharing'
								target='noreferer'
								className='flex top left card spaceChildrenSmall'
								style={{ background: 'var(--silver)' }}
							>
								<Icon src='icon-movie.svg' w='48' h='48' />
								<Text className='color gray'>13:57</Text>
								<Text className='bold'>
									Workshop: Prototyping in Figma with
									Evangeline Gao
								</Text>
							</a>
							<a
								href='https://drive.google.com/file/d/1VrH2I56WJFUXmrEYMiwMYltx4gzpixbX/view?usp=sharing'
								target='noreferer'
								className='flex top left card spaceChildrenSmall'
								style={{ background: 'var(--silver)' }}
							>
								<Icon src='icon-movie.svg' w='48' h='48' />
								<Text className='color gray'>13:57</Text>
								<Text className='bold'>
									Workshop: Design Basics with Hannah Limary
								</Text>
							</a>
							<a
								href='https://drive.google.com/file/d/1l5oAqun2yqJOTyl4RpRdAX3VTOnEwnFu/view?usp=sharing'
								target='noreferer'
								className='flex top left card spaceChildrenSmall'
								style={{ background: 'var(--silver)' }}
							>
								<Icon src='icon-movie.svg' w='48' h='48' />
								<Text className='color gray'>58:28</Text>
								<Text className='bold'>Presentations</Text>
							</a>
							<a
								href='https://drive.google.com/file/d/1_f6PA_-dBKhNTTEV2ZvCUCjjErohQeZ0/view?usp=sharing'
								target='noreferer'
								className='flex top left card spaceChildrenSmall'
								style={{ background: 'var(--silver)' }}
							>
								<Icon src='icon-movie.svg' w='48' h='48' />
								<Text className='color gray'>9:13</Text>
								<Text className='bold'>Closing Ceremony</Text>
							</a>
						</div>
					</div>
					<Text className='color gray'>Other resources</Text>
					<div className='split2'>
						<a
							href='https://designatuci.com/resources/featured/'
							target='noreferrer'
							style={{ background: 'var(--white)' }}
							className='wait dx show card flex left fill sky spaceChildrenSmall'
						>
							<Icon
								w='192'
								h='96'
								src='res-featured.svg'
								style={{
									marginTop: '-32px',
									margin: '-16px',
									marginBottom: '0',
								}}
							/>
							<Text size='L' className='bold color orange'>
								Featured Resources
							</Text>
							<Text className='color gray'>
								Explore our curated collection of useful online
								tools, guides, and more.
							</Text>
						</a>
						<a
							href='https://designatuci.com/events/all/'
							target='noreferrer'
							style={{ background: 'var(--white)' }}
							className='wait dx show card flex left fill sky spaceChildrenSmall'
						>
							<Icon
								w='192'
								h='96'
								src='res-recordings.svg'
								style={{
									marginTop: '-32px',
									margin: '-16px',
									marginBottom: '0',
								}}
							/>
							<Text size='L' className='bold color blue'>
								Past Workshop Slides & Recordings
							</Text>
							<Text className='color gray'>
								View our past events and their slide decks.
							</Text>
						</a>
					</div>
				</Section>

				<Section id='s-faq'>
					<Text size='XL'>FAQ</Text>
					<div className='split2 tc13'>
						<div className='spaceChildren'>
							<Text>
								Join the live conversation on the{' '}
								<a
									target='noreferer'
									href='https://discord.gg/mY8QSNaEtb'
									style={{ textDecoration: 'underline' }}
								>
									Impact22 Discord
								</a>{' '}
								for more help!
							</Text>
						</div>
						<div
							style={{ marginTop: '-16px' }}
							className='spaceChildrenSmall'
						>
							{[
								{
									q: 'Why should I join?',
									a: "Designers create aesthetically pleasing, functional products. They listen to what our world needs, empathize with people's gain and pain points, and produce a solution that specifically targets what our world is lacking. We hope that this event can be a platform where you can start practicing your design thinking—a process of ideation, research, analysis, developing, and testing—to provide a better means to our world.",
								},
								{
									q: 'When is the registration deadline?',
									a: 'Our registration form will close at January 26, 2022 at 11:59pm (PST)',
								},
								{
									q: 'How do I sign up?',
									a: (
										<Text className='color gray'>
											Apply through our{' '}
											<a
												target='noreferer'
												href='https://docs.google.com/forms/d/e/1FAIpQLScL-FDRROA8UJth_aMA4aHEChAGeiPu7fzN40eTLjmOyrPxDA/viewform?usp=sf_link'
												style={{
													textDecoration: 'underline',
												}}
											>
												registration form
											</a>
										</Text>
									),
								},
								{
									q: 'Where do I submit my project?',
									a: (
										<Text className='color gray'>
											Please submit your final, working
											prototype to the{' '}
											<a
												target='noreferer'
												href='https://docs.google.com/forms/d/e/1FAIpQLSeaptGRVmxzyztUX3ZxEwVTkucHmXMPN9UtqTzNa8jH1arcKA/viewform?usp=sf_link'
												style={{
													textDecoration: 'underline',
												}}
											>
												Submission form
											</a>
											.
										</Text>
									),
								},
								{
									q: 'Who can attend?',
									a: 'Any undergraduate student within the US (with an associated institutional email) is able to sign up and attend.',
								},
								{
									q: 'How much does it cost?',
									a: 'Impact 2022 requires no cost to attend. All you need is a working device with Zoom, Discord, and an open mind.',
								},
								{
									q: 'I don’t have prior knowledge in design. Can I still attend?',
									a: 'Of course! Design is all around us. We will provide workshops and resources for beginners to get started.',
								},
								{
									q: 'How do I prepare?',
									a: (
										<Text className='color gray'>
											During the event, we will be hosting
											Workshops for anyone new to Design
											thinking or the Design process. We
											highly encourage getting the hang of
											Figma, Sketch, Adobe XD, or the
											prototyping tool of your choice. You
											may find something useful in our
											resources section as well. You can
											also show your excitement by turning
											on your camera, and adding our{' '}
											<a
												target='noreferer'
												href='https://drive.google.com/drive/folders/1ER3La0q8k1WByZt_Cn-hDhP4knOPukRD?usp=sharing'
												style={{
													textDecoration: 'underline',
												}}
											>
												Impact 2022 backgrounds
											</a>
										</Text>
									),
								},
								{
									q: 'How do teams work?',
									a: 'You have the option to (1) go solo, (2) request individuals to team up with (up to 3 other members) on the Application form, (3) be randomly assigned, (4) meet your team members through our Discord and simply note them in the Submission form.',
								},
								{
									q: 'What if I don’t have a team?',
									a: (
										<Text className='color gray'>
											We will provide a Discord channel
											specifically for anyone looking for
											a team at our Designathon. Feel free
											to join our Discord at{' '}
											<a
												target='noreferer'
												href='https://discord.gg/mY8QSNaEtb'
												style={{
													textDecoration: 'underline',
												}}
											>
												https://discord.gg/mY8QSNaEtb
											</a>
											. Solo participants are also
											allowed.
										</Text>
									),
								},
							].map(item => {
								return (
									<Toggle
										closed={
											<div className='faqitem gray card S flex left spaceChildrenSmall'>
												<div className='flex row top'>
													<Icon
														src='d22-arrow.svg'
														w='18'
														h='18'
														style={{
															marginRight: '16px',
														}}
													/>
													<Text className='bold'>
														{item.q}
													</Text>
												</div>
											</div>
										}
										opened={
											<div className='faqitem open card S flex left spaceChildrenSmall'>
												<div className='flex row top'>
													<Icon
														src='d22-arrow.svg'
														w='18'
														h='18'
														style={{
															marginRight: '16px',
														}}
													/>
													<Text className='bold'>
														{item.q}
													</Text>
												</div>
												<Text
													className='color gray'
													style={{
														paddingLeft: '34px',
													}}
												>
													{item.a}
												</Text>
											</div>
										}
									/>
								);
							})}
						</div>
					</div>
				</Section>

				<Section id='s-about' className='fill gray'>
					<Text size='XL'>About</Text>
					<div></div>
					<div className='split2 textAlignLeft'>
						<div className='spaceChildrenSmall'>
							<Text size='L'>Hosted by Design at UCI</Text>
							<Text>
								Design at UCI is the premiere student-run
								organization at UCI for anything graphic design,
								UI/UX design, product design, and more. Started
								in 2016, It has amassed many relationships in
								the Design community of OC and SoCal.
							</Text>
						</div>
					</div>
					<Text size='L'>Event Organizers</Text>
					<div className='split4'>
						{[
							{
								name: 'Vivian Lin',
								photo: 'portrait/Vivian_Lin.png',
								role: 'Industry Outreach Coordinator, Logistics Organizer, Judge & Speaker Outreach',
							},
							{
								name: 'Kevin Tsai',
								photo: 'portrait-placeholder-gray.svg',
								role: 'Industry Outreach Coordinator, Sketch Sponsorship Coordinator',
							},
							{
								name: 'Hannah Limary',
								photo: 'portrait/Hannah_Limary.png',
								role: 'President, Sponsorship Coordinator, Workshop Host',
							},
							{
								name: 'Evangeline Gao',
								photo: 'portrait/Evangeline_Gao.png',
								role: 'Vice President, Workshop Host',
							},
							{
								name: 'Kailer Garcia',
								photo: 'portrait/Kailer_Garcia.png',
								role: 'Graphic Designer, Developer & Webmaster',
							},
							{
								name: 'Isabel PhAM (PST)',
								photo: 'portrait/Isabel_Pham.png',
								role: 'Graphic Designer, Social Host',
							},
							{
								name: 'Vivian Chu',
								photo: 'portrait/Vivian_Chu.png',
								role: 'Workshop Coordinator, Discord Bot Moderator',
							},
							{
								name: 'Meghna Kaligotla',
								photo: 'portrait-placeholder-gray.svg',
								role: 'Workshop Committee',
							},
							{
								name: 'Jolin Huang',
								photo: 'portrait/Jolin_Huang.png',
								role: 'Marketing',
							},
							{
								name: 'Carly Chan',
								photo: 'portrait/Carly_Chan.png',
								role: 'Marketing',
							},
							{
								name: 'Iantha Khan',
								photo: 'portrait-placeholder-gray.svg',
								role: 'Marketing',
							},
							{
								name: 'Sonali Chellappa',
								photo: 'portrait/Sonali_Chellappa.png',
								role: 'Project Teams Committee',
							},
							{
								name: 'Juhi Patel',
								photo: 'portrait-placeholder-gray.svg',
								role: 'Project Teams Committee',
							},
							{
								name: 'Vivian Nguyen',
								photo: 'portrait/Vivian_Nguyen.png',
								role: 'Content Creation & Marketing',
							},
							{
								name: 'Amy Steinmetz',
								photo: 'portrait/Amy_Steinmetz.png',
								role: 'Financial Chair',
							},
						].map(item => {
							return (
								<div className='flex left top spaceChildrenSmall'>
									<Photo
										src={item.photo}
										style={{
											height: 'unset',
											backgroundColor: 'var(--white)',
											width: '100%',
											position: 'relative',
										}}
									>
										<div
											style={{ paddingBottom: '100%' }}
										/>
									</Photo>
									<Text size='L'>{item.name}</Text>
									<Text>{item.role}</Text>
									<Text className='color gray'>
										{item.about}
									</Text>
								</div>
							);
						})}
					</div>
					<Space h='96' />
					<Text size='XL'>Sponsors</Text>
					<div className='split2 slim' style={{ margin: 'auto' }}>
						<a
							className='flex spaceChildren'
							target='noreferer'
							href='https://rosenfeldmedia.com/'
						>
							<Icon
								src='logo-rosenfeldmedia.svg'
								w='256'
								h='140'
							/>
						</a>
						<a
							className='flex spaceChildren'
							target='noreferer'
							href='https://www.sketch.com'
						>
							<Icon src='Sketch-Logo-Light.svg' w='256' h='128' />
						</a>
					</div>
				</Section>
			</div>
		</>
	);
};

export default Designathon22;

class TimeRouter extends Component {
	constructor(props) {
		super(props);
		this.state = { time: new Date() };
		this.updateItem = () => {
			this.setState({ time: new Date() });
			this.setNextTimer();
		};
		this.setNextTimer = () => {
			let now = new Date();
			let selection = this.props.timeline[0];
			let next = null;
			for (let plan of this.props.timeline) {
				if (new Date(plan.start) < now) {
					selection = plan;
				} else {
					next = plan;
					break;
				}
			}
			if (next != null) {
				let diff = new Date(next.start) - now;
				this.timer = setTimeout(this.updateItem, diff + 1000);
			}
		};
	}
	componentDidMount() {
		this.setNextTimer();
	}
	render() {
		let now = new Date();
		let selection = this.props.timeline[0];
		for (let plan of this.props.timeline) {
			if (new Date(plan.start) < now) {
				selection = plan;
			} else {
				break;
			}
		}
		return selection.item;
	}
}

function Rubric(params) {
	const [expand, setExpand] = useState(false);
	function toggleExpand() {
		setExpand(!expand);
		console.log(`Toggle: ${expand}`);
	}
	return (
		<>
			<Text
				style={{
					borderRadius: '8px',
					padding: '8px 12px',
					color: 'var(--black)',
					background: 'var(--d-green)',
				}}
			>
				Challenge Brief
			</Text>
			<TimeRouter
				timeline={[
					{
						start: 0,
						item: (
							<div className='flex card spaceChildren'>
								<Text size='L' className='color white'>
									The prompt will be revealed{' '}
									<TimerText
										style={{
											color: 'white',
											fontSize: 'inherit',
											fontWeight: 'inherit',
										}}
										start='1/28/2022 6:30:00 PM (PST)'
									/>
									.
								</Text>
							</div>
						),
					},
					{
						start: '1/28/2022 6:30:00 PM (PST)',
						item: (
							<div className='flex card spaceChildren'>
								<Text
									size='L'
									className='color white'
									style={{ maxWidth: '768px' }}
								>
									Design your own desktop or mobile
									application that advocates for either (1)
									social justice or (2) sustainability.
								</Text>
								<Text className='color gray'>
									To elaborate, examples of potential
									solutions are:
								</Text>
								<div className='split2'>
									<div>
										<Text className='color pink'>
											Social Justice
										</Text>
										<Text className='color silver textAlignLeft'>
											A product/service that encourages or
											provides the opportunity for equity
											in economic, political, or social
											issues.
										</Text>
									</div>
									<div>
										<Text className='color pink'>
											Sustainability
										</Text>
										<Text className='color silver textAlignLeft'>
											A product/service that promotes
											sustainable behaviors to combat the
											climate crisis.
										</Text>
									</div>
								</div>

								<div
									onClick={() => {
										toggleExpand();
									}}
									className='pointer flex row'
									style={{
										border: 'solid 1px var(--d-green)',
										width: 'unset',
										borderRadius: '12px',
									}}
								>
									<Text
										style={{
											whiteSpace: 'nowrap',
											borderRadius: '8px',
											padding: '8px 12px',
											color: 'var(--black)',
											background: 'var(--d-green)',
											width: 'unset',
										}}
									>
										Grading Rubric
									</Text>
									<div
										style={{ padding: '4px 16px' }}
										className='flex row'
									>
										<Text className='color white'>
											{expand ? 'Hide' : 'View'} Full
											Rubric
										</Text>
										<svg
											viewBox='0 0 12 12'
											xmlns='http://www.w3.org/2000/svg'
											xmlSpace='preserve'
											style={{
												fillRule: 'evenodd',
												clipRule: 'evenodd',
												strokeLinejoin: 'round',
												strokeMiterlimit: 2,
												width: '12px',
												marginLeft: '8px',
												transform: expand
													? 'rotateZ(0deg)'
													: 'rotateZ(180deg)',
												transition: '0.4s',
											}}
										>
											<path
												style={{ fill: '#fff' }}
												d='M2.425 7.735 6 4.16l3.575 3.575a1 1 0 0 0 1.414-1.414L6.707 2.039a.999.999 0 0 0-1.414 0L1.011 6.321a.999.999 0 1 0 1.414 1.414Z'
											/>
										</svg>
									</div>
								</div>

								{!expand ? (
									<div className='flex'>
										<div
											className='split2 rubric'
											style={{
												gap: '8px',
												gridTemplateColumns: '1fr 2fr',
												width: '100%',
												maxWidth: '768px',
											}}
										>
											<div className='flex left'>
												<Text
													style={{ color: '#7dffcf' }}
												>
													70 Points
												</Text>
											</div>
											<div className='flex left'>
												<Text className='bold'>
													Total
												</Text>
											</div>

											<div className='flex left'>
												<Text className='color green'>
													20 Points
												</Text>
											</div>
											<div className='flex left'>
												<Text className='bold'>
													User Experience
												</Text>
											</div>

											<div className='flex left'>
												<Text className='color green'>
													10 Points
												</Text>
											</div>
											<div className='flex left'>
												<Text className='bold'>
													User Interface
												</Text>
											</div>

											<div className='flex left'>
												<Text className='color pink'>
													5 Points
												</Text>
											</div>
											<div className='flex left'>
												<Text className='bold'>
													Target Audience
												</Text>
											</div>

											<div className='flex left'>
												<Text className='color pink'>
													15 Points
												</Text>
											</div>
											<div className='flex left'>
												<Text className='bold'>
													User Research
												</Text>
											</div>

											<div className='flex left'>
												<Text className='color pink'>
													20 Points
												</Text>
											</div>
											<div className='flex left'>
												<Text className='bold'>
													Design Thinking Process
												</Text>
											</div>
										</div>
									</div>
								) : (
									<div className='open'>
										<div className='rubric'>
											<div className='flex left'>
												<Text
													style={{ color: '#7dffcf' }}
												>
													70 Total Points
												</Text>
											</div>
											<div className='wideOnly'>
												<Text>Excellent</Text>
											</div>
											<div className='wideOnly'>
												<Text>Great</Text>
											</div>
											<div className='wideOnly'>
												<Text>Good</Text>
											</div>
											<div className='wideOnly'>
												<Text>Adequate</Text>
											</div>

											<div className='spaceChildrenSmall'>
												<Text className='color green'>
													20 Points
												</Text>
												<Text className='bold'>
													User Experience
												</Text>
												<Text>
													Is the final product
													user-friendly and intuitive?
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Intuitive and easily used
													without guidance.
													Call-to-action elements are
													obvious, and the flow is
													instinctual. There is a
													clear path to complete tasks
													or reach a goal.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Solution is mostly
													intuitive, but some guidance
													is needed. Flow only meets
													expectations. User is
													eventually able to reach the
													goal and complete the task.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Requires some effort to use
													and interact with. Users can
													complete tasks, but in
													longer times and with more
													effort.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Heavily unintuitive. Does
													not reflect much effort.
													User is not able to complete
													the task.
												</Text>
											</div>

											<div className='spaceChildrenSmall'>
												<Text className='color green'>
													10 Points
												</Text>
												<Text className='bold'>
													User Interface
												</Text>
												<Text>
													Is the overall user
													interface visually appealing
													without sacrificing its
													functionality?
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Follows the visual design
													principles with powerful
													design choices of
													typography, color, grids
													that seamlessly integrates
													with the functionality.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Uses a clear system of
													grids, typography, color,
													and design principles.
													Visuals may not be relevant
													to the target audience or be
													used meaningfully to the
													solution.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Does not employ clear use of
													grids, typography, and
													color. Only some design
													principles are applied.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Lack of visual design
													principles.
												</Text>
											</div>
										</div>

										<div
											className='spaceChildrenSmall'
											style={{ padding: '32px 0' }}
										>
											<Text className='color pink'>
												The following sections will be
												graded based on your
												presentations (only applicable
												to finalists!)
											</Text>
										</div>

										<div className='rubric'>
											<div className='spaceChildrenSmall'>
												<Text className='color green'>
													5 Points
												</Text>
												<Text className='bold'>
													Target Audience
												</Text>
												<Text>
													Does your solution target
													the correct audience and
													their needs?
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													A clear understanding of an
													appropriate target audience
													and their needs. It is
													designed with navigation,
													visuals, and language to
													communi-cate clearly to a
													specific persona and their
													needs.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Solution sufficiently
													addresses a specific
													audience’s needs. However
													they are not addressed in
													their entirety.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Correctly addresses problems
													and needs. Only a specific
													group in the target audience
													is included.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													No specific target audience
													addressed.
												</Text>
											</div>

											<div className='spaceChildrenSmall'>
												<Text className='color green'>
													15 Points
												</Text>
												<Text className='bold'>
													User Research
												</Text>
												<Text>
													Are the suggested solutions
													backed up with extensive
													research of the users’
													needs?
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Pulls data from a variety of
													credible, meaningful
													sources. Research is
													conducted using both general
													and specific lenses. Results
													are processed and presented
													in a clear way.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Collects thorough data
													regarding potential users.
													Sources may be surface-level
													and not rigorous. Research
													may not be relevant to the
													specific problem.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Average data about the
													general audiences’ consensus
													is provided but does not tap
													into users’ specific needs.
													Conducted research does not
													seem credible and rational.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Little to no research to
													empathize with the target
													user base. Data is not based
													on factual situations.
												</Text>
											</div>

											<div className='spaceChildrenSmall'>
												<Text className='color green'>
													20 Points
												</Text>
												<Text className='bold'>
													Design Thinking Process
												</Text>
												<Text>
													Does your product properly
													address the issues through a
													set of well-thought
													solutions?
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Thoughtfully proposes an
													innovative approach that
													addresses the issue on hand.
													Considers the real-world
													implications of the product.
													Solutions are creative and
													crafted carefully with users
													in mind.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Solution is practical and
													relevant, but not creative.
													Concept is strong and is
													helpful to the user, but
													meets typical expectations.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Solution is not clear or
													relevant. Does not improve
													upon other typical
													solutions.
												</Text>
											</div>
											<div className='wideOnly'>
												<Text className='color silver'>
													Lack of creativity and
													relevance. Does not solve
													the problem.
												</Text>
											</div>
										</div>
									</div>
								)}
							</div>
						),
					},
				]}
			/>
		</>
	);
}

function StatusBlock(props) {
	return (
		<div id='timer' className='flex spaceChildrenSmall'>
			<div>
				<TimeRouter
					timeline={[
						{
							start: 0,
							item: (
								<Text>
									Registration open and closing{' '}
									<TimerText start='1/26/2022 11:59:00 PM (PST)' />
								</Text>
							),
						},
						{
							start: '1/26/2022 11:59:00 PM (PST)',
							item: (
								<Text>
									Join the opening ceremony{' '}
									<TimerText start='1/28/2022 6:00:00 PM (PST)' />
								</Text>
							),
						},
						{
							start: '1/28/2022 5:00:00 PM (PST)',
							item: (
								<>
									<Text>
										Opening ceremony starts{' '}
										<TimerText start='1/28/2022 6:00:00 PM (PST)' />
									</Text>
									<a
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										href='https://uci.zoom.us/j/94495432963'
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/28/2022 6:00:00 PM (PST)',
							item: (
								<>
									<Text>Join the opening ceremony now</Text>
									<a
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										href='https://uci.zoom.us/j/94495432963'
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/28/2022 7:00:00 PM (PST)',
							item: (
								<>
									<Text>
										Design-a-thon has begun! Tune into our
										workshops tomorrow
									</Text>
								</>
							),
						},

						{
							start: '1/29/2022 1:00:00 AM (PST)',
							item: (
								<>
									<Text>
										Next Workshop: Designing Under
										Constraints with Katrina Liu{' '}
										<TimerText start='1/29/2022 10:00:00 AM (PST)' />
									</Text>
								</>
							),
						},
						{
							start: '1/29/2022 9:55:00 AM (PST)',
							item: (
								<>
									<Text>
										Workshop{' '}
										<TimerText start='1/29/2022 10:00:00 AM (PST)' />
										: Designing Under Constraints with
										Katrina Liu{' '}
									</Text>
									<a
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										href='https://uci.zoom.us/j/97624894611'
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/29/2022 10:00:00 AM (PST)',
							item: (
								<>
									<Text>
										<Text className='color red'>
											<Icon
												src='live-event.svg'
												w='22'
												h='22'
											/>{' '}
											Live Workshop:
										</Text>{' '}
										Designing Under Constraints with Katrina
										Liu
									</Text>
									<a
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										href='https://uci.zoom.us/j/97624894611'
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},

						{
							start: '1/29/2022 10:30:00 AM (PST)',
							item: (
								<>
									<Text>
										Next Workshop{' '}
										<TimerText start='1/29/2022 12:00:00 PM (PST)' />
										: How to Effectively Present Your Design
										with Samanvay Kasarala
									</Text>
								</>
							),
						},
						{
							start: '1/29/2022 11:55:00 AM (PST)',
							item: (
								<>
									<Text>
										Workshop{' '}
										<TimerText start='1/29/2022 12:00:00 PM (PST)' />
										: How to Effectively Present Your Design
										with Samanvay Kasarala
									</Text>
									<a
										href='https://uci.zoom.us/j/91028660488'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/29/2022 12:00:00 PM (PST)',
							item: (
								<>
									<Text>
										<Text className='color red'>
											<Icon
												src='live-event.svg'
												w='22'
												h='22'
											/>{' '}
											Live Workshop:
										</Text>{' '}
										How to Effectively Present Your Design
										with Samanvay Kasarala
									</Text>
									<a
										href='https://uci.zoom.us/j/91028660488'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},

						{
							start: '1/29/2022 12:30:00 PM (PST)',
							item: (
								<>
									<Text>
										Next Workshop{' '}
										<TimerText start='1/29/2022 2:00:00 PM (PST)' />
										: How to Build Tech for Social Good with
										Alan Chang and Mingjia Wang
									</Text>
								</>
							),
						},
						{
							start: '1/29/2022 1:55:00 PM (PST)',
							item: (
								<>
									<Text>
										Workshop{' '}
										<TimerText start='1/29/2022 2:00:00 PM (PST)' />
										: How to Build Tech for Social Good with
										Alan Chang and Mingjia Wang
									</Text>
									<a
										href='https://uci.zoom.us/j/96665045518'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/29/2022 2:00:00 PM (PST)',
							item: (
								<>
									<Text>
										<Text className='color red'>
											<Icon
												src='live-event.svg'
												w='22'
												h='22'
											/>{' '}
											Live Workshop:
										</Text>{' '}
										How to Build Tech for Social Good with
										Alan Chang and Mingjia Wang
									</Text>
									<a
										href='https://uci.zoom.us/j/96665045518'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},

						{
							start: '1/29/2022 2:30:00 PM (PST)',
							item: (
								<>
									<Text>
										Next Workshop{' '}
										<TimerText start='1/29/2022 3:00:00 PM (PST)' />
										: Prototyping in Figma with Evangeline
										Gao
									</Text>
								</>
							),
						},
						{
							start: '1/29/2022 2:55:00 PM (PST)',
							item: (
								<>
									<Text>
										Workshop{' '}
										<TimerText start='1/29/2022 3:00:00 PM (PST)' />
										: Prototyping in Figma with Evangeline
										Gao
									</Text>
									<a
										href='https://uci.zoom.us/j/97913505371'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/29/2022 3:00:00 PM (PST)',
							item: (
								<>
									<Text>
										<Text className='color red'>
											<Icon
												src='live-event.svg'
												w='22'
												h='22'
											/>{' '}
											Live Workshop:
										</Text>{' '}
										Prototyping in Figma with Evangeline Gao
									</Text>
									<a
										href='https://uci.zoom.us/j/97913505371'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},

						{
							start: '1/29/2022 3:30:00 PM (PST)',
							item: (
								<>
									<Text>
										Next Workshop{' '}
										<TimerText start='1/29/2022 5:00:00 PM (PST)' />
										: Design Basics with Hannah Limary
									</Text>
								</>
							),
						},
						{
							start: '1/29/2022 4:55:00 PM (PST)',
							item: (
								<>
									<Text>
										Workshop{' '}
										<TimerText start='1/29/2022 5:00:00 PM (PST)' />
										: Design Basics with Hannah Limary
									</Text>
									<a
										href='https://uci.zoom.us/j/94069827938'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/29/2022 5:00:00 PM (PST)',
							item: (
								<>
									<Text>
										<Text className='color red'>
											<Icon
												src='live-event.svg'
												w='22'
												h='22'
											/>{' '}
											Live Workshop:
										</Text>{' '}
										Design Basics with Hannah Limary
									</Text>
									<a
										href='https://uci.zoom.us/j/94069827938'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},

						{
							start: '1/29/2022 5:30:00 PM (PST)',
							item: (
								<>
									<Text>
										Submissions due{' '}
										<TimerText start='1/30/2022 1:00:00 PM (PST)' />
										. You got this!
									</Text>
									<a
										href='https://forms.gle/B4cpgMFtYRawP2ue8'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Submission Form</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},

						{
							start: '1/30/2022 1:00:00 PM (PST)',
							item: (
								<>
									<Text>
										Submissions closed – Judges are
										reviewing prototypes now
									</Text>
								</>
							),
						},

						{
							start: '1/30/2022 3:00:00 PM (PST)',
							item: (
								<>
									<Text>
										The Finalists have been notified,
										presentations due{' '}
										<TimerText start='1/30/2022 3:45:00 PM (PST)' />
									</Text>
								</>
							),
						},

						{
							start: '1/30/2022 3:45:00 PM (PST)',
							item: (
								<>
									<Text>
										Finalists presentations{' '}
										<TimerText start='1/30/2022 4:00:00 PM (PST)' />
									</Text>
									<a
										href='https://uci.zoom.us/j/94953727209'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/29/2022 4:00:00 PM (PST)',
							item: (
								<>
									<Text>
										<Text className='color red'>
											<Icon
												src='live-event.svg'
												w='22'
												h='22'
											/>{' '}
											Live:{' '}
										</Text>
										Finalist Presentations
									</Text>
									<a
										href='https://uci.zoom.us/j/94953727209'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},

						{
							start: '1/30/2022 5:00:00 PM (PST)',
							item: (
								<>
									<Text>
										Closing ceremony{' '}
										<TimerText start='1/30/2022 6:00:00 PM (PST)' />
									</Text>
									<a
										href='https://uci.zoom.us/j/98486611942'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},
						{
							start: '1/29/2022 6:00:00 PM (PST)',
							item: (
								<>
									<Text>
										<Text className='color red'>
											<Icon
												src='live-event.svg'
												w='22'
												h='22'
											/>{' '}
											Live:
										</Text>{' '}
										Closing Ceremony
									</Text>
									<a
										href='https://uci.zoom.us/j/98486611942'
										className='button S fill blue'
										style={{
											marginLeft: '12px',
											marginRight: '-8px',
											padding: '4px 12px',
										}}
										target='noreferer'
									>
										<Text>Zoom Link</Text>
										<Icon
											w='24'
											h='24'
											src='pagelink-white.svg'
											style={{ marginLeft: '4px' }}
										/>
									</a>
								</>
							),
						},

						{
							start: '1/30/2022 6:30:00 PM (PST)',
							item: (
								<>
									<Text>
										Design-a-thon has concluded, thank you
										every one!
									</Text>
								</>
							),
						},
					]}
				/>
			</div>
		</div>
	);
}

function TimerText(props) {
	return <></>;
}

function Toggle(props) {
	const [expand, setExpand] = useState(false);
	function toggleExpand() {
		setExpand(!expand);
	}
	if (expand) {
		return (
			<div
				className='pointer'
				onClick={() => {
					toggleExpand();
				}}
			>
				{props.opened}
			</div>
		);
	} else {
		return (
			<div
				className='pointer'
				onClick={() => {
					toggleExpand();
				}}
			>
				{props.closed}
			</div>
		);
	}
}

function scrollToSection(id) {
	window.scrollTo(0, document.getElementById(id).offsetTop - 80); // document.getElementById(id).offsetTop
}

//
//  Animation
//
var view, gl;
var Main = {};
const RESOLUTION = window.devicePixelRatio;
function initialize() {
	view = document.getElementById('view');
	// gl = view.getContext("webgl2", {antialias: false, preserveDrawingBuffer: true, premultipliedAlpha: false })
	gl = view.getContext('webgl', {
		antialias: false,
		preserveDrawingBuffer: true,
		premultipliedAlpha: false,
	});

	window.addEventListener('resize', resize);
	window.addEventListener('scroll', scroll);

	Main.target = {};
	Main.target.view = {
		w: Math.ceil(view.getBoundingClientRect().width * RESOLUTION),
		h: Math.ceil(view.getBoundingClientRect().height * RESOLUTION),
		buffer: null,
	};

	view.width = Main.target.view.w;
	view.height = Main.target.view.h;

	Main.prog = {};

	Main.prog.render = new Program(SHADER_VERT, SHADER_FRAG, Main.target.view);

	resize();
	start();
}
var run = false;
function start() {
	run = true;
	requestAnimationFrame(frame);
}
function stop() {
	run = false;
}
var T = 0;
function frame() {
	T += 1 / 60;
	if (T > 310) {
		T -= 300;
	}

	Main.prog.render.prepareDraw();
	Main.prog.render.setUniform['u_T'](T + 0.5);
	Main.prog.render.draw();

	if (run) requestAnimationFrame(frame);
}
function resize() {
	Main.target.view.w = Math.ceil(
		view.getBoundingClientRect().width * RESOLUTION
	);
	Main.target.view.h = Math.ceil(
		view.getBoundingClientRect().height * RESOLUTION
	);

	view.width = Main.target.view.w;
	view.height = Main.target.view.h;

	Main.prog.render.setUniform['aspect'](
		Main.target.view.w / Main.target.view.h
	);
}
function scroll() {
	if (window.scrollY > window.innerHeight - 90) {
		if (run) stop();
	} else {
		if (!run) start();
	}
}
class Program {
	// Create a new program
	constructor(vertCode, fragCode, target) {
		gl.useProgram(null);

		this.program = gl.createProgram();
		this.target = target;

		// Compile shaders
		const vertShader = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vertShader, vertCode);
		gl.compileShader(vertShader);
		const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(fragShader, fragCode);
		gl.compileShader(fragShader);

		// Attach shaders
		gl.attachShader(this.program, vertShader);
		gl.attachShader(this.program, fragShader);
		gl.linkProgram(this.program);
		gl.useProgram(this.program);
		gl.clearColor(0, 0, 0, 1);

		// Upload render triangles
		const Verticies = new Float32Array([
			-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
		]);
		const vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, Verticies, gl.STATIC_DRAW);
		const positionAttribLocation = gl.getAttribLocation(
			this.program,
			'vertex'
		);
		gl.vertexAttribPointer(
			positionAttribLocation,
			2,
			gl.FLOAT,
			gl.FALSE,
			2 * Float32Array.BYTES_PER_ELEMENT,
			0
		);
		gl.enableVertexAttribArray(positionAttribLocation);

		// Generate uniform setters
		this.setUniform = {};
		this.uLocation = {};
		let uniformArgs = (vertCode + fragCode).matchAll(
			'uniform +(.+) +(.+);'
		);
		for (let i of uniformArgs) {
			let location = gl.getUniformLocation(this.program, i[2]);
			this.uLocation[i[2]] = location;
			let setFuncName = 'uniform';
			if (!['sampler2D'].includes(i[1])) {
				switch (i[1]) {
					case 'float':
						setFuncName += '1f';
						break;
					case 'vec2':
						setFuncName += '2fv';
						break;
					case 'vec3':
						setFuncName += '3fv';
						break;
					case 'vec4':
						setFuncName += '4fv';
						break;
					case 'int':
						setFuncName += '1i';
						break;
					default:
						alert('Undefined uniform type');
						break;
				}
				this.setUniform[i[2]] = value => {
					gl.useProgram(this.program);
					gl[setFuncName](location, value);
				};
			}
		}

		// Check errors
		gl.useProgram(this.program);
		if (gl.getError() !== 0) {
			// alert("Error creating progrAM (PST)")
		}

		gl.viewport(0, 0, this.target.w, this.target.h);
	}
	// Draw frame
	draw() {
		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}
	use() {
		gl.useProgram(this.program);
	}
	prepareDraw() {
		gl.useProgram(this.program);
		gl.bindFramebuffer(gl.FRAMEBUFFER, this.target.buffer);
		gl.viewport(0, 0, this.target.w, this.target.h);
	}
	clear() {
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
}
const SHADER_VERT = `precision highp float;

attribute vec2 vertex;

varying vec2 UV;

uniform float aspect;

void main() {
    UV = vertex * vec2(aspect*0.5,0.5);
    gl_Position = vec4(vertex, 0.0, 1.0);
}`;
const SHADER_FRAG = `precision highp float;

// out vec4 fragColor;

varying vec2 UV;

uniform float u_T;

#define PI 3.14159265359

#define C1 vec3(.3, .84, .55)
#define C2 vec3(1., .84, 1.)
#define C3 vec3(.3, .51, .96)

float hash(float r, int seed) {
    return sin( 890.69 * dot( fract(vec2(r*853.31,float(seed)*9999.1)), fract(vec2(1117.7,973.01)) ));
}
float noise(float r, int seed) {
    float value = 0.;
    float w = 2./PI;
    
    float h1 = hash(floor(r/w+.5), seed);
    float h2 = hash(floor(r/w+1.+.5), seed);

    value = mix(h1, h2, r/w - floor(r/w+.5) );
    // value = mix(h1, h2, round(r/w+1.) - r/w + round(r/w) );
    // value = mix( h1, h2,  );

    return value;
}

void main() {    
    float T = u_T;
    vec3 c = vec3(0., 0., .14);
    vec2 p = UV;

    vec3 debug = vec3(0.);

    float r = length(p)*8. - T*.2;
    float a = atan(p.x / p.y);
    if (p.y < 0.) a += 3.1415926536;
    a *= 1.8;
    r += (2.+sin(T*.5+r*.5)) * 0.38 * hash(floor(0.5 + a+T*0.01), int(r));
    r *= .06;
    a += hash(floor(0.5 + a), int(r));
    float ri = floor(r);
    
    r += 0.7 * cos(smoothstep(0., 3., T)+1.6) + 0.5;

    float w = max(mod(r, 1.), max(mod(r+.333, 1.), mod(r+.666, 1.)) );
    w += 0.68 * smoothstep(.76, 1.2, w) * smoothstep(.999, 1., hash(a, int(ri)) );

    w = pow(w, 7.);    
    w *= 1.0 - smoothstep(.2, 0., length(p));
    w *= smoothstep(0., 3., T - length(p));
    
    a += ri * 1.5707963268;   

    
    float Tc = T * .2;
    c += C1 * smoothstep(0., 1.0, sin(a - Tc) ); 
    c += C2 * smoothstep(0., 1.0, sin(2.0943951024 + a - Tc) ); 
    c += C3 * smoothstep(0., 1.0, sin(4.1887902048 + a - Tc) );
    c.r += 0.12 * smoothstep(.8, .0, w);
    c.b += 0.12 * smoothstep(.6, .0, w);
    
    c = mix(vec3(0., 0., .14), c, w);    
    
    gl_FragColor = vec4(c, 1.0);
}`;
