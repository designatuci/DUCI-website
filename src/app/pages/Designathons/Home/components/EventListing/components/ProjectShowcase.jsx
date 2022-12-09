import { Text } from 'app/components';
import { Photo } from 'app/Symbols';

const ProjectShowcase = ({ title, image, name, creators, links }) => {
	return (
		<>
			<div className='card shadow flex spaceChildrenSmall'>
				<Text
					className='color blue'
					style={{ alignSelft: 'flex-start' }}
				>
					{title}
				</Text>
				<div className='card' style={{ width: '100%' }}>
					<Photo
						src={image}
						className='shadow'
						style={{ minHeight: '256px' }}
					></Photo>
				</div>
				<Text size='L'>{name}</Text>
				<Text className='color gray'>
					Created by {creators.join(', ')}
				</Text>
				{links.map(link => (
					<a href={link.href} target='noreferer'>
						<Text icon='right' color='blue'>
							View {link.type}
						</Text>
					</a>
				))}
			</div>
		</>
	);
};

export { ProjectShowcase };
