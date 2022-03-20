import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Section, Icon, Space, Photo } from '../Symbols.js';
import { Text } from '../components';

const Home = () => (
	<>
		<Helmet>
			<title>Welcome – Design at UCI</title>
		</Helmet>
		<Section className='center short page' wrapperClass='flex'>
			<div className='wait show scale'>
				<Icon className='wait subtle dx' w='32' h='32' src='logo.svg' />
				<Space w='16' />
				<Text size='L' className='bold'>
					Design at UCI
				</Text>
			</div>
			<Space h='0' />
			<Text
				size='XXXL'
				className='block-paragraph wait show scale l3 bold color blue'
				style={{ maxWidth: '900px' }}
			>
				{'A community for all digital designers to connect, learn, and innovate'
					.split(' ')
					.map((word, i) => (
						<Text size='XXXL' className='wait dx l2 bold' key={i}>
							{word}
							<pre> </pre>
						</Text>
					))}
			</Text>
			<Text color='gray' className='wait show d10 subtle'>
				The club for UI, UX, and graphic design at the University of
				California Irvine.
			</Text>
			<div className='wait show drop d10 l2'>
				<Link to='/join/' className='button L fill blue'>
					<Text size='L' color='white' icon='right'>
						Get involved
					</Text>
				</Link>
			</div>
			<div id='heroart' className='wait drop d05 l3'></div>
			<style>{`
                #heroart {
                    margin-bottom: 0;
                    z-index: 0;
                    position: absolute;
                    left: 0; right: 0; bottom: 0; top: 0;
                    background: url(/static/photo/hero.png) bottom / calc(768px + 38vw) no-repeat;
                }
            `}</style>
		</Section>
		<Section className='fill black'>
			<div className='split2'>
				<div>
					<Photo
						lazy
						className='wait flopL'
						src='img3.png'
						style={{ minHeight: '384px' }}
					/>
				</div>
				<div className='wait flex left'>
					<Text size='XL' className='bold'>
						Learn more about{' '}
						<Text size='XL' color='blue' className='bold'>
							Graphic Design,
						</Text>{' '}
						<Text size='XL' color='orange' className='bold'>
							UX Design,
						</Text>{' '}
						<Text size='XL' color='yellow' className='bold'>
							Creative Software,
						</Text>{' '}
						<Text size='XL' className='bold'>
							and much more in our live and interactive workshops.
						</Text>
					</Text>
					<Space block h='32' />
					<Text color='gray'>
						Hosted nearly every week during the academic quarter,
						you'll get the chance to level up your design game and
						make new friends with fellow designers.
					</Text>
					<Space block h='32' />
					<Link to='/events/'>
						<Text icon='right' color='blue'>
							Found in our events
						</Text>
					</Link>
				</div>
			</div>
			<Space h='64' />
			<div className='split2 wideFlip'>
				<div>
					<Photo
						lazy
						className='wait flopR'
						src='img2.png'
						style={{ minHeight: '384px' }}
					/>
				</div>
				<div className='wait flex left'>
					<Text size='XL' className='bold'>
						Listen to{' '}
						<Text size='XL' className='bold color green'>
							professional designers
						</Text>{' '}
						<Text size='XL' className='bold'>
							working at the top companies, and get exclusive
							insight to
						</Text>{' '}
						<Text size='XL' className='bold color pink'>
							industry practices.
						</Text>
					</Text>
					<Space block h='32' />
					<Text className='color gray '>
						We feature speakers across all fields. Get a chance to
						ask your questions and recieve a professional's advice.
					</Text>
					<Space block h='32' />
					<Link to='/events'>
						<Text icon='right' color='blue'>
							Found in our events
						</Text>
					</Link>
				</div>
			</div>
			<Space h='64' />
			<div className='split2'>
				<div>
					<Photo
						lazy
						className='wait flopL'
						src='img0.png'
						style={{ minHeight: '384px' }}
					/>
				</div>
				<div className='wait flex left'>
					{/* <Text className="color gray">Special Programs</Text>
                    <Space block h="32"/> */}
					<Text size='XL' className='bold'>
						Get invovled in our special programs, like{' '}
						<Text size='XL' className='bold color blue'>
							Design-a-thon
						</Text>{' '}
						<Text className='bold' size='XL'>
							or
						</Text>{' '}
						<Text size='XL' className='bold color yellow'>
							Project Teams,
						</Text>{' '}
						<Text size='XL' className='bold'>
							for a fun and
						</Text>{' '}
						<Text size='XL' className='bold'>
							valuable experience.
						</Text>
					</Text>
					<Space block h='32' />
					<Text className='color gray '>
						Meet other designers, get exclusive perks, and expand
						your portfolio with fresh new work.
					</Text>
					<Space block h='32' />
					<Link to='/resources/'>
						<Text icon='right' color='blue'>
							See our resources
						</Text>
					</Link>
				</div>
			</div>
		</Section>
		<Section className='center'>
			<Icon
				className='wait dx rainbow'
				src='loveDesign.svg'
				w='192'
				h='192'
			/>
			<div className='flex spaceChildrenSmall'>
				<Text
					size='XXXL'
					className='block-paragraph wait scale l3 bold'
					style={{ maxWidth: '650px' }}
				>
					{"Do you love design? Let's keep in touch."
						.split(' ')
						.map((word, i) => (
							<Text size='XXL' className='wait l2 dx' key={i}>
								{word}
								<pre> </pre>
							</Text>
						))}
				</Text>
				<Space h='16' />
				<Link to='join' className='wait dx drop button L'>
					<Text size='L' icon='right' color='blue'>
						Join Design at UCI
					</Text>
				</Link>
			</div>
		</Section>
		<div className='relative'>
			<Photo
				lazy
				src='img4.png'
				className='background'
				style={{ backgroundPosition: 'top', zIndex: '-1' }}
			/>
			<Space h='192' />
			<div
				style={{
					background: 'linear-gradient(0deg,var(--blue),#089AFF00)',
					padding: '64px 0',
					paddingTop: '256px',
				}}
			>
				<Section className='center bare relative'>
					<div className='flex spaceChildren'>
						<Text
							className='wait scale bold narrow color white'
							size='XL'
						>
							We're focused on buliding a friendly community that
							helps striving designers.
						</Text>
						<Link to='/about/'>
							<Text icon='right' color='white'>
								Learn more about us
							</Text>
						</Link>
					</div>
				</Section>
			</div>
		</div>
	</>
);

export default Home;
