import { Section, Space, Icon } from 'app/Symbols';
import { Text } from '../../../components';
import {
	SectionNavigation,
	WinnerShowcase,
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

const Designathon23 = () => {
	return (
		<>
			<Section
				className='bare center page fill black relative'
				style={{ background: ' #089AFF' }}
			>
				<Space h='144' />
				<Icon src='designathon-white.svg' w='96' h='96' />
				<Text size='XXXL' className='bold'>
					You Belong Here
				</Text>
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
				<WinnerShowcase winners={WINNERS_2023} />
				<Section
					id='s-overview'
					className='flatBot'
					style={{
						background:
							'linear-gradient(0deg, #ffffff, #FFCC45cc, #FFCC4588, #089AFF)'
					}}
				>
					<div className='flex center spaceChildrenLarge'>
						<Text size='XL' className='color black'>
							Designathon 2023 is a 3 day long design-a-thon event
							where student designers create a product with the
							potential to impact the world.
						</Text>

						<Space h='16' />

						<div>
							<Text size='M' className='color black'>
								Designathon 2023's rubric will be released the
								day it starts.
							</Text>
						</div>

						<Space h='16' />

						<div className='split3 textAlignLeft'>
							<div className='flex top spaceChildrenSmall'>
								<Text className='color blue'>Timeline</Text>
								<Text>
									February 24 5:30pm - February 26 8:00pm 2023
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

				<Space h='64' />

				<Judges profiles={JUDGES_2023} />
				<WorkshopHosts profiles={WORKSHOP_HOSTS_2023} />
				<Prizes list={PRIZES_2023} />
				<Rules rules={RULES_2023} />

				<Section>
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
				</Section>
			</div>
		</>
	);
};

export default Designathon23;
