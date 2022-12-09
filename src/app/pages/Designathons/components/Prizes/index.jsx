import { Text } from 'app/components';
import { Section } from 'app/Symbols';

const Prizes = ({ list }) => {
	return (
		<Section >
			<Text size='XL'>Prizes</Text>
			<div className='split4'>
				{list.map(item => (
					<div className='flex left top spaceChildrenSmall'>
						<Text size='XL' style={{ color: 'var(--d-green)' }}>
							{item.symbol}
						</Text>
						<Text>{item.label}</Text>
						<div className='flex left spaceChildrenSmall'>
							{item.prizes.map(prize => {
								return (
									<Text className='color gray'>{prize}</Text>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export { Prizes };
