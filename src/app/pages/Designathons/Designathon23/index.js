import { Icon, Section } from 'app/Symbols';
import { Text } from '../../../components';
import WINNERS_2023 from 'assets/data/designathon/2023/winners.json';
import JUDGES_2023 from 'assets/data/designathon/2023/judges.json';
import KEYNOTE_2023 from 'assets/data/designathon/2023/keynote.json';
import PRIZES_2023 from 'assets/data/designathon/2023/prizes.json';
import WORKSHOP_HOSTS_2023 from 'assets/data/designathon/2023/workshop-hosts.json';
import RULES_2023 from 'assets/data/designathon/2023/rules.json';
import cn from './Designathon23.module.scss';
import HERO_BG from './assets/hero.png';
import { Profile, Prizes, SectionNavigation, FAQ, Rules } from './components';
import Schedule from './components/Schedule';

const Designathon23 = () => (
	<main className={cn.container}>
		<div className={cn.hero}>
			<div className={cn.title}>
				<Icon className={cn.icon} src='designathon-white.svg' w='96' h='96' />
				<Text size='XXXL' className='bold'>
					You Belong Here
				</Text>
			</div>
			{/* <img
				src={HERO_BG}
				alt='yellow and blue dots rotating in a circle'
			/> */}
		</div>

		<SectionNavigation />

		<div className={cn.about} id="s-overview">
			<Section>
				<h1 >About</h1>
				<p>
					Design-a-thon is a 3 day long hybrid event where you or a
					team design a product focused on the theme: community and
					inclusivity. It takes place on February 24, starting at 5:30
					pm and ends February 26, 8:00 pm PST.
				</p>
				<p>
					Design at UCI is the premier student-run organization at UCI
					for anything graphic design, UI/UX design, product design,
					and more. Started in 2016, we foster a special community for
					all digital designers to connect, learn, and innovate.
				</p>
				<p>
					Design at UCI’s designathon is the largest collegiate
					designathon in Orange County. Each year, we bring together
					hundreds of student designers nationwide to define, develop,
					and pitch a product built from scratch. We hope that this
					experience can help you acquire and grow both your soft and
					hard skills in empathizing with your users, defining a set
					of goals and needs, developing your product, and improving
					your confidence and creativity as a human-centric designer.
				</p>
			</Section>
		</div>

		<div className={cn.people} id="s-people">
			<Section>
				<div className={cn.section} >
					<h2>Keynote Speaker</h2>
					{KEYNOTE_2023.map(speaker => (
						<Profile key={speaker.photo} {...speaker} />
					))}
				</div>
				<div className={cn.section} >
					<h2>Judges</h2>
					{JUDGES_2023.map(judge => (
						<Profile key={judge.photo} {...judge} />
					))}
				</div>
				<div className={cn.section}>
					<h2>Workshop Hosts</h2>
					{WORKSHOP_HOSTS_2023.map(host => (
						<Profile key={host.photo} {...host} />
					))}
				</div>
			</Section>
		</div>

		<Rules rules={RULES_2023} />

		<div className={cn.prizes} id="s-prizes">
			<Prizes list={PRIZES_2023} />
		</div>

		<Schedule />

		<FAQ />

	</main>
);
export default Designathon23;
