import { Section } from 'app/Symbols';
import { Text } from '../../../components';
import {
	SectionNavigation,
	Judges,
	Prizes,
	WorkshopHosts,
	Rules,
} from '../components';
import WINNERS_2023 from 'assets/data/designathon/2023/winners.json';
import JUDGES_2023 from 'assets/data/designathon/2023/judges.json';
import PRIZES_2023 from 'assets/data/designathon/2023/prizes.json';
import WORKSHOP_HOSTS_2023 from 'assets/data/designathon/2023/workshop-hosts.json';
import RULES_2023 from 'assets/data/designathon/2023/rules.json';
import cn from './Designathon23.module.scss';
import { Profile } from './components';

const Designathon23 = () => (
	<main className={cn.container}>
		<div className={cn.hero}></div>

		<SectionNavigation />

		<div className={cn.about}>
			<Section>
				<h1>About</h1>
				<p>
					You Belong Here is a 3-day long hybrid Design-a-thon where
					student designers create a product focused on community &
					inclusivity.
				</p>
				<p>
					Our goal is to challenge and hone the design-thinking
					processes of students by facilitating conversations around
					real-life social issues and how we can build meaningful
					solutions.
				</p>
				<p>Start: February 24th, 2023 - 5:30 pm PST</p>
				<p>End: February 26th, 2023 - 8:00 pm PST</p>
				<p>
					Students from colleges all over the U.S. will be eligible to
					attend at no cost. Winners will be awarded prizes such as
					Visa gift cards, 1-on-team mentorship, and free merch from
					companies such as Figma, Notion, and Adobe, and more!
				</p>
			</Section>
		</div>

		<div className={cn.people}>
			<Section>
				<div className={cn.sections}>
					<div className={cn.section}>
						<h1>Workshops</h1>
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
				</div>
			</Section>
		</div>

		<Prizes list={PRIZES_2023} />

		<Rules rules={RULES_2023} />

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
