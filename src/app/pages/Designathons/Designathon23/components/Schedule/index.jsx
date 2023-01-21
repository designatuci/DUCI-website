import { Section } from 'app/Symbols';
import clsx from 'clsx';
import cn from './Schedule.module.scss';

function Schedule() {
	return (
		<div className={cn.container} id='s-schedule'>
			<Section>
				<h1 class='header'>Schedule</h1>
				<h2>Friday Night - Feb. 24, 2023</h2>
				<div class={cn.list}>
					<div class={cn.event}>
						<div class={cn.time}>
							5:30 pm
							<span>↓</span>
						</div>
						<div class={clsx(cn.title, cn.special)}>Opening</div>
						<div class={cn.description}>
							Join us on our{' '}
							<a
								href='https://uci.zoom.us/j/98511151139'
								target='noreferrer'
							>
								Zoom.
							</a>
							<br />
							Led by Design at UCI’s Designathon Director, Hannah.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							5:35
							<span>↓</span>
						</div>
						<div class={cn.title}>Judges Introduction</div>
						<div class={cn.description}>
							Judges share their design background and journey.
							Introducing our judges: Minjun Chen, Jeremy Marusek,
							Antonio Flamenco, Mosope Adebowale, and Yiming Wang.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							6:00
							<span>↓</span>
						</div>
						<div class={cn.title}>Keynote speech</div>
						<div class={cn.description}>
							Led by Keynote Speaker: Harrison Wheeler
							<br />
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							6:35
							<span>↓</span>
						</div>
						<div class={clsx(cn.title, cn.highlight)}>Challenge Brief and Q&A</div>
						<div class={cn.description}>
							Announcing Challenge Brief and opening Q&A.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:00
							<span>↓</span>
						</div>
						<div class={cn.title}>Mentor Office Hours</div>
						<div class={cn.description}>
							Need help or advice? Come speak with our mentors in
							the #mentor-office-hours channel on Discord! Ping
							the channel with your questions or requests. Mentors
							in the server will respond to your message and hop
							on a voice chat with you. Location: Discord
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:30
							<span>↓</span>
							8:15
						</div>
						<div class={cn.title}>Workshop</div>
						<div class={cn.description}>
							Led by WICS (Duong Vu & Amanda Hausmann) Topic:
							Design for Gender Inclusivity Location: Zoom
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							8:45
							<span>↓</span>
							9:30
						</div>
						<div class={cn.title}>Workshop</div>
						<div class={cn.description}>
							Led by Victoria Wu Topic: Intro to Figma Location:
							Zoom
						</div>
					</div>
				</div>

				<h2>Saturday - Feb. 25, 2023</h2>
				<div class={cn.list}>
					<div class={cn.event}>
						<div class={cn.time}>All Day</div>
						<div class={cn.title}>Continue Work on Projects</div>
						<div class={cn.description}>
							Any further questions related to the prompt, rubric,
							etc. can be asked on our{' '}
							<a href='/discord/' target='noreferrer'>
								Discord
							</a>{' '}
							channel. Saturday will be dedicated to continued
							work on your projects.
						</div>
					</div>
				</div>

				<h2>Sunday Morning - Feb. 26, 2023</h2>
				<div class={cn.list}>
					<div class={cn.event}>
						<div class={cn.time}>8:00 am</div>
						<div class={clsx(cn.title, cn.highlight)}>
							Submission Deadline
						</div>
						<div class={cn.description}>
							Submit your working prototype through our{' '}
							<a
								target='noreferrer'
								href='https://docs.google.com/forms/d/e/1FAIpQLScjx_kekg_6ADYDuy3pi__O91EqZeqwp-peLnmiALyreP7I_g/viewform?usp=sf_link'
							>
								Submission Form
							</a>
							.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>3:00 pm</div>
						<div class={cn.title}>Announcing 10 finalists</div>
						<div class={cn.description}>
							Our team will reach out to the email provided in the
							Submission Form to let the team know. These teams
							will move forward to and present their case study
							during the final round of the judging panel.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							3:00
							<span>↓</span>
							5:30
						</div>
						<div class={cn.title}>Work on Case Study</div>
						<div class={cn.description}>
							For all the 10 finalists, make sure to prepare your
							presentation so that it clearly elaborates your
							target user base, user research, and decision making
							process. Please refer to the rubric or ask questions
							on our{' '}
							<a href='/discord/' target='noreferrer'>
								Discord
							</a>{' '}
							channel for more information and clarification.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							5:30
							<span>↓</span>
						</div>
						<div class={clsx(cn.title, cn.special)}>
							Finale Opening
						</div>
						<div class={cn.description}>
							Led by President of Design at UCI, Jody.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							5:35
							<span>↓</span>
						</div>
						<div class={clsx(cn.title, cn.special)}>
							Presentations
						</div>
						<div class={cn.description}>
							Each finalist—there will be 10 in total—will have 8
							minutes to present their user research findings and
							analysis.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:00
							<span>↓</span>
						</div>
						<div class={clsx(cn.title, cn.special)}>
							Judging Panel
						</div>
						<div class={cn.description}>
							Speakers judge and decide on the Best Overall and
							Honorable Mention.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:15
							<span>↓</span>
						</div>
						<div class={clsx(cn.title, cn.special)}>Ceremony</div>
						<div class={cn.description}>
							President of Design at UCI, Jody, announces the
							winners and asks them to share their experience.
						</div>
					</div>
					<div class={cn.event}>
						<div class={cn.time}>
							7:25
							<span>↓</span>
							7:30
						</div>
						<div class={clsx(cn.title, cn.special)}>
							Raffle Draw and Closing
						</div>
						<div class={cn.description}>
							Led by President of Design at UCI, Jody. Two random
							attendees will be given a free Sketch license.
							Following that, Jody will ask each person how they
							feel and how their experience is.
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}

export default Schedule;
