import { Section } from 'app/Symbols';
import { Text } from '../../../components';
import { SectionNavigation, Judges, WorkshopHosts, Rules } from '../components';
import WINNERS_2023 from 'assets/data/designathon/2023/winners.json';
import JUDGES_2023 from 'assets/data/designathon/2023/judges.json';
import PRIZES_2023 from 'assets/data/designathon/2023/prizes.json';
import WORKSHOP_HOSTS_2023 from 'assets/data/designathon/2023/workshop-hosts.json';
import RULES_2023 from 'assets/data/designathon/2023/rules.json';
import cn from './Designathon23.module.scss';
import { Profile, Prizes } from './components';

const Designathon23 = () => (
	<main className={cn.container}>
		<div className={cn.hero}></div>

		<SectionNavigation />

		<div className={cn.about}>
			<Section>
				<h1>About</h1>
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

		<div className={cn.people}>
			<Section>
				<div className={cn.section}>
					<h1>Workshop Hosts</h1>
					{WORKSHOP_HOSTS_2023.map(host => (
						<Profile key={host.photo} {...host} />
					))}
				</div>
				<div className={cn.section}>
					<h1>Judges</h1>
					{JUDGES_2023.map(judge => (
						<Profile key={judge.photo} {...judge} />
					))}
				</div>
			</Section>
		</div>

		<Rules rules={RULES_2023} />

		<div className={cn.prizes}>
			<Prizes list={PRIZES_2023} />
		</div>

		<Section id='s-about' className='fill gray'>
			<Text size='XL'>About</Text>
			<div></div>
			<div className='split2 textAlignLeft'>
				<div className='spaceChildrenSmall'>
					<Text size='L'>Hosted by Design at UCI</Text>
					<Text>
						Design at UCI is the premiere student-run organization
						at UCI for anything graphic design, UI/UX design,
						product design, and more. Started in 2016, It has
						amassed many relationships in the Design community of OC
						and SoCal.
					</Text>
				</div>
			</div>
		</Section>
	</main>
);
export default Designathon23;
