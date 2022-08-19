import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Text } from 'app/components';
import { Section, Space } from 'app/Symbols.js';

const NotFound = () => {

	return (
		<>
			<Helmet>
				<title>404 – Design at UCI</title>
			</Helmet>
			<Section className='center page hint' wrapperClass='narrow'>
				<div className='wait show flex spaceChildren'>
					<div className='flex'>
						<Text
							className='color blue wait show scale'
							style={{ fontSize: '88px' }}
						>
							404
						</Text>
						<Text className='color blue' size='L'>
							Page Not Found
						</Text>
					</div>
					<Space h='8' />
					<Text className='color gray'>
						The URL
						<Text className='bold' style={{ margin: '0 6px' }}>
							{window.location.hostname +
								window.location.pathname}
						</Text>
						does not exist.
					</Text>
					<Text className='color gray'>
						If you believe this is a mistake, please{' '}
						<Link to='/contact'>
							contact us
						</Link>
						.
					</Text>
				</div>
			</Section>
			<Section
				className='center flex bare fill black'
				style={{ height: '88px', marginBottom: '-88px' }}
			>
				<Text className='color blue'>Sitemap Directory</Text>
			</Section>
		</>
	);
};

export default NotFound;
