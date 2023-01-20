import { Text } from 'app/components';
import { Section } from 'app/Symbols';
import cn from './Prizes.module.scss';

const Prizes = ({ list }) => {
	return (
		<Section>
			<h2 className={cn.title}>Prizes</h2>
			<div className={cn.container}>
				{list.map(item => (
					<div className={cn.item}>
						<h3>{item.label}</h3>
						<div className='flex left spaceChildrenSmall'>
							{item.prizes.map(prize => (
								<p>{prize}</p>
							))}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export { Prizes };
