import { Section } from 'app/Symbols';
import clsx from 'clsx';
import cn from './Schedule.module.scss';

function Schedule() {
	return (
		<div className={cn.container} id='s-schedule'>
			<Section>
				<h1 className={cn.title}>Schedule</h1>
				<span className={cn.note}>
					In-person events are marked with (IP) and are open to UCI
					students only.
				</span>
				<h2>Friday - Feb. 24, 2023</h2>
				<div class={cn.list}>
					<div class={cn.event}>
						<div class={cn.time}>
							5:30 pm
							<span>↓</span>
						</div>
						<div class={clsx(cn.title, cn.highlight)}>
							Opening Ceremony
						</div>
						<div class={cn.description}>
							<p>
								Join us on our{' '}
								<a
									href='https://uci.zoom.us/j/93490306811'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom.
								</a>
							</p>
							<br />
							Led by Design at UCI’s Designathon Director, Hannah.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							5:35 pm
							<span>↓</span>
						</div>
						<div class={clsx(cn.title)}>Judges Introduction</div>
						<div class={cn.description}>
							<p>
								Judges share their design background and
								journey.
							</p>
							<p>
								Introducing our judges: Minjun Chen, Jeremy
								Marusek, Antonio Flamenco, Mosope Adebowale, and
								Yiming Wang.
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							6:00 pm
							<span>↓</span>
						</div>
						<div class={clsx(cn.title)}>Keynote speech</div>
						<div class={cn.description}>
							Led by Keynote Speaker: Harrison Wheeler
							<br />
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							6:35 pm
							<span>↓</span>
						</div>
						<div class={clsx(cn.title, cn.special)}>
							Challenge Brief and Q&A
						</div>
						<div class={cn.description}>
							Announcing Challenge Brief and opening Q&A.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:00 pm
							<span>↓</span>
							7:05 pm
						</div>
						<div class={clsx(cn.title)}>Closing</div>
						<div class={cn.description}>
							<p>
								Designathon Director, Hannah, ends the Opening
								Ceremony.
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:30 pm
							<span>↓</span>
							8:15 pm
						</div>
						<div class={cn.title}>
							Workshop: Design for Gender Inclusivity
						</div>
						<div class={cn.description}>
							<p>Led by WICS (Duong Vu & Amanda Hausmann)</p>
							<p>
								In celebration of Inclusivity, we invite you to
								the talk about gender inclusivity in designs
								hosted by WiCS (Women in Computer Sciences).
								Gender inclusivity includes practicing awareness
								and using good design practice that avoids bias
								towards a particular sex or gender. We hope to
								see you there!
							</p>
							<p>
								Location:{' '}
								<a
									href='https://uci.zoom.us/j/92626479110'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom
								</a>
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							8:00 pm
							<span>↓</span>
							10:00 pm
						</div>
						<div class={cn.title}>Work session (IP)</div>
						<div class={cn.description}>
							<p>*UCI Students ONLY* </p>
							<p>
								Teams can work together in-person at our
								designated work rooms. Designathon mentors and
								event coordinators will be available to answer
								any questions! Food is provided (while supplies
								last, vegetarian options available).
							</p>
							<p>Location: DBH 3011 & DBH 4011</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							8:45 pm
							<span>↓</span>
							9:30 pm
						</div>
						<div class={cn.title}>Workshop: Intro to Figma</div>
						<div class={cn.description}>
							<p>Led by Victoria Wu </p>
							<p>
								New to UX Design and curious about the tools UX
								Designers use? Join the Intro to Figma workshop
								to learn the basics of this powerful prototyping
								and designing tool. This workshop is an
								introductory course, perfect for those who have
								little to no experience with Figma!
							</p>
							<p>
								Location:{' '}
								<a
									href='https://uci.zoom.us/j/92626479110'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom
								</a>
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							11:00 pm
							<span>↓</span>
							12:00 am
						</div>
						<div class={cn.title}>Mentor Office Hours</div>
						<div class={cn.description}>
							<p>
								Need help or advice? Come speak with our mentors
								in the #mentor-office-hours channel on Discord!
								Ping the channel with your questions or
								requests. Mentors in the server will respond to
								your message and hop on a voice chat with you.
							</p>
							<p>
								Location:{' '}
								<a
									href='https://discord.gg/jumJqhBy4Y'
									target='_blank'
									rel='noopener noreferrer'
								>
									Discord
								</a>
							</p>
						</div>
					</div>
				</div>

				<h2>Saturday - Feb. 25, 2023</h2>
				<div class={cn.list}>
					<div class={cn.event}>
						<div class={cn.time}>
							10:00 am<span>↓</span>10:45 am
						</div>
						<div class={cn.title}>
							Workshop: Designing for Diversity
						</div>
						<div class={cn.description}>
							<p>Led by Mosope Adebowale</p>
							<p>
								Do you envision yourself designing for products
								that will be used by billions of people across
								the globe? Join Mosope to learn about designing
								with an inclusive mind.
							</p>
							<p>
								Location:{' '}
								<a
									href='https://uci.zoom.us/j/92626479110'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom
								</a>
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							11:00 am
							<span>↓</span>
							12:00 pm
						</div>
						<div class={cn.title}>Mentor Office Hours</div>
						<div class={cn.description}>
							<p>
								Need help or advice? Come speak with our mentors
								in the #mentor-office-hours channel on Discord!
								Ping the channel with your questions or
								requests. Mentors in the server will respond to
								your message and hop on a voice chat with you.
							</p>
							<p>
								Location:{' '}
								<a
									href='https://discord.gg/jumJqhBy4Y'
									target='_blank'
									rel='noopener noreferrer'
								>
									Discord
								</a>
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							12:00 pm<span>↓</span>12:45 pm
						</div>
						<div class={cn.title}>
							Workshop: Be F#$%ing Authentic
						</div>
						<div class={cn.description}>
							<p>Led by Joe Cahill </p>
							<p>
								When you are in college we are told to fit in
								this box of being a professional, we are told to
								hold back or you won’t get the job. Well they
								are so damn wrong! Learn to let go and be
								yourself is one of the keys to success in any
								career but no more than in design we have to
								sell our work, sell ourselves and allow
								ourselves to shine through.
							</p>
							<p>
								Location:{' '}
								<a
									href='https://uci.zoom.us/j/92626479110'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom
								</a>
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							1:00 pm
							<span>↓</span>
							3:00 pm
						</div>
						<div class={cn.title}>Work session (IP)</div>
						<div class={cn.description}>
							<p>*UCI Students ONLY* </p>
							<p>
								Teams can work together in-person at our
								designated work rooms. Designathon mentors and
								event coordinators will be available to answer
								any questions! Food is provided (while supplies
								last, vegetarian options available).
							</p>
							<p>Location: DBH 3011 & DBH 4011</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							2:00 pm
							<span>↓</span>
							3:00 pm
						</div>
						<div class={cn.title}>Social</div>
						<div class={cn.description}>
							<p>Led by Design at UCI</p>
							<p>Game Extravaganza</p>

							<p>
								Join our virtual social, where we’ll be playing
								a series of online games including Gartic Phone,
								Spyfall, Codenames, and many others!
							</p>
							<p>
								Location: #game-extravaganza-social channel in
								our Discord
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							3:00 pm<span>↓</span>3:45 pm
						</div>
						<div class={cn.title}>
							Workshop: Creating UX Case Studies
						</div>
						<div class={cn.description}>
							Led by CTC (Alexandria (Alex) Wang & Meghna
							Kaligotla)
							<p>
								Are you interested in learning how to create
								case studies for your UX projects? Join Commit
								the Change as we discuss how to tackle
								structuring a case study, portfolio
								storytelling, and presenting design projects!
							</p>
							<p>
								Location:{' '}
								<a
									href='https://uci.zoom.us/j/92626479110'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom
								</a>
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							4:00 pm
							<span>↓</span>
							5:00 pm
						</div>
						<div class={cn.title}>Social (IP)</div>
						<div class={cn.description}>
							<p>*UCI Students ONLY* </p>
							<p>Led by Design at UCI</p>
							<p>Event: DIY Designathon Zines</p>

							<p>
								Join us for an in-person social and get the
								chance to create custom “zines” about yourself
								or related to the Designathon theme. Showcase
								your zines at the end of the event!
							</p>
							<p>Location: DBH 3011</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							5:00 pm<span>↓</span>5:45 pm
						</div>
						<div class={cn.title}>
							Workshop: Leveraging Accessibility in Design
						</div>
						<div class={cn.description}>
							<p>Led by Antonio Flamenco</p>
							<p>
								Accessible design should be universal design and
								yet most digital products out there lack basic
								accessibility standards. Most designers focus
								too heavily on how something looks rather than
								how everyone has to interact with it. Join
								Antonio in learning what accessibility means for
								design and how to make all your designs
								accessible moving forward!
							</p>
							<p>
								Location:{' '}
								<a
									href='https://uci.zoom.us/j/92626479110'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom
								</a>
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							5:00 pm
							<span>↓</span>
							7:00 pm
						</div>
						<div class={cn.title}>Work session (IP)</div>
						<div class={cn.description}>
							<p>*UCI Students ONLY* </p>
							<p>
								Teams can work together in-person at our
								designated work rooms. Designathon mentors and
								event coordinators will be available to answer
								any questions! Food is provided (while supplies
								last, vegetarian options available).
							</p>
							<p>Location: DBH 3011 & DBH 4011</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							8:00 pm
							<span>↓</span>
							9:00 pm
						</div>
						<div class={cn.title}>Mentor Office Hours</div>
						<div class={cn.description}>
							<p>
								Need help or advice? Come speak with our mentors
								in the #mentor-office-hours channel on Discord!
								Ping the channel with your questions or
								requests. Mentors in the server will respond to
								your message and hop on a voice chat with you.
							</p>
							<p>
								Location:{' '}
								<a
									href='https://discord.gg/jumJqhBy4Y'
									target='_blank'
									rel='noopener noreferrer'
								>
									Discord
								</a>
							</p>
						</div>
					</div>
				</div>

				<h2>Sunday - Feb. 26, 2023</h2>
				<div class={cn.list}>
					<div class={cn.event}>
						<div class={cn.time}>8:00 am</div>
						<div class={clsx(cn.title, cn.special)}>
							Submission Deadline
						</div>
						<div class={cn.description}>
							<p>
								Submit your working prototype through our{' '}
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://docs.google.com/forms/d/e/1FAIpQLSdxz0MG3HYpgR10XUw1IKHywhe2YuzboB3ZwzlqfsI9F_BNhQ/closedform'
								>
									Submission Form
								</a>
								.
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>1:10 pm</div>
						<div class={clsx(cn.title)}>
							Announcing 10 finalists
						</div>
						<div class={cn.description}>
							Our team will reach out to the email provided in the
							Submission Form to let the team know. Make sure to
							check your spam! These teams will move forward to
							and present their case study during the final round
							of the judging panel.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							1:10 pm
							<span>↓</span>
							4:00 pm
						</div>
						<div class={cn.title}>Work on Case Study</div>
						<div class={cn.description}>
							<p>
								For all the 10 finalists, make sure to prepare
								your presentation so that it clearly elaborates
								your target user base, user research, and
								decision making process. Please refer to the
								rubric or ask questions on our{' '}
								<a
									href='https://discord.com/invite/jumJqhBy4Y/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Discord
								</a>{' '}
								channel for more information and clarification.
							</p>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							4:00 pm
							<span>↓</span>
							5:30 pm
						</div>
						<div class={clsx(cn.title, cn.highlight)}>
							Presentations
						</div>
						<div class={cn.description}>
							<p>
								Join us on our{' '}
								<a
									href='https://uci.zoom.us/j/93490306811'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom
								</a>
								.
							</p>
							Each finalist team—there will be 10 in total—will
							have 8 minutes to present their case study. Anyone
							can attend.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							5:30 pm
							<span>↓</span>
							6:15 pm
						</div>
						<div class={clsx(cn.title)}>Judging Panel</div>
						<div class={cn.description}>
							Judges decide the Top 3 teams, as well as the
							winners for these additional awards:
							<ul>
								<li>
									&#x2022; Best presentation & story-telling
								</li>
								<li>&#x2022; Most creative & innovative</li>
								<li>&#x2022; Honorable mention</li>
							</ul>
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:00 pm
							<span>↓</span>
							7:40 pm
						</div>
						<div class={clsx(cn.title, cn.highlight)}>
							Closing Ceremony
						</div>
						<div class={cn.description}>
							<p>
								Join us on our{' '}
								<a
									href='https://uci.zoom.us/j/93490306811'
									target='_blank'
									rel='noopener noreferrer'
								>
									Zoom
								</a>
								.
							</p>
							Designathon Director, Hannah, announces the winners
							and asks them to share their experience.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:40 pm
							<span>↓</span>
							7:50 pm
						</div>
						<div class={clsx(cn.title)}>Raffle Draw</div>
						<div class={cn.description}>
							Led by Design-a-thon Director, Hannah. Raffle
							winners will be chosen.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:50 pm
							<span>↓</span>
							8:00 pm
						</div>
						<div class={clsx(cn.title)}>Q&A and Closing</div>
						<div class={cn.description}>
							During the final Q&A session, attendees can ask
							anything related to the event. Design at UCI will
							give final thanks and acknowledgments, then close
							out the event.
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}

export default Schedule;
