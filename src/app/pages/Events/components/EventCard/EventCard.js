import clsx from 'clsx';
import { Text } from '../../../../components';
import { PageIcon } from '../../../../Symbols';
import formatRelativeDate from '../../controllers/formateDate';
import cn from './EventCard.module.scss';

const EventCard = ({ ...event }) => (
	<div
		className={clsx(
			cn.container,
			'fill white card flex left spaceChildrenSmall'
		)}
	>
		<Text color='gray'>{event.type}</Text>
		<Text size='L'>{event.title}</Text>
		{event?.links
			?.filter(
				({ label }) => label !== 'Zoom Link' || label !== 'Discord Link'
			)
			.map((item, i) =>
				item.label === 'Recording' ? (
					<a
						key={item.link}
						target='noreferer'
						className='button S fill blue'
						href={item.link}
					>
						<Text>
							{item.label}
							<PageIcon
								color='var(--sky)'
								style={{
									width: '24px',
									marginLeft: '4px',
								}}
							/>
						</Text>
					</a>
				) : (
					<a
						key={item.link}
						target='noreferer'
						className='button S fill gray'
						href={item.link}
					>
						<Text>
							{item.label}
							<PageIcon
								color='var(--gray)'
								style={{
									width: '24px',
									marginLeft: '4px',
								}}
							/>
						</Text>
					</a>
				)
			)}
		<Text className='color gray' style={{ marginTop: 'auto' }}>
			{formatRelativeDate(event.time)}
		</Text>
	</div>
);

export default EventCard;
