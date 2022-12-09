import { Text } from 'app/components';
import { Section } from 'app/Symbols';

const Hosts = ({ profiles }) => (
	<Section>
		<Text size='XL'>Workshop Hosts</Text>
		<div className='split4'>
			{profiles.map(item => (
				<div className='flex left top spaceChildrenSmall'>
					<img
						src={require(`assets/${item.photo}`).default}
						alt="headshots"
						style={{
							height: 'unset',
							backgroundColor: 'var(--silver)',
							width: '100%',
							position: 'relative',
						}}
					/>
					<Text size='L'>{item.name}</Text>
					<Text>{item.role}</Text>
					<Text className='color gray'>{item.about}</Text>
				</div>
			))}
		</div>
	</Section>
);
export { Hosts };
