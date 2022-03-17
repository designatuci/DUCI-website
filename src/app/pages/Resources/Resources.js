import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Section, Text, Icon, Space } from '../../Symbols.js';
import RESOURCES from '../../../assets/data/resources.json';
import cn from './Resources.module.scss';

const TabComponent = ({ newTab, link, children, ...props }) =>
	newTab ? (
		<a href={link} target='_blank' rel='noopener noreferrer' {...props}>
			{children}
		</a>
	) : (
		<Link to={link} {...props}>
			{children}
		</Link>
	);

const Resources = () => (
	<>
		<Helmet>
			<title>Resources – Design at UCI</title>
		</Helmet>

		<Section className='page short bareTop'>
			<Space h='0' />
			<div className='split2' style={{ gap: '32px' }}>
				{RESOURCES.map(({ newTab, ...card }) => (
					<TabComponent
						key={card.link}
						newTab={newTab}
						link={card.link}
						style={{
							background: card.background,
						}}
						className='wait dx show card flex left fill sky spaceChildrenSmall'
					>
						<Icon
							className={cn.icon}
							w='192'
							h='96'
							src={card.icon}
						/>
						<Text size='L' className={`bold color ${card.main}`}>
							{card.title}
						</Text>
						<Text className={`color ${card.accent}`}>
							{card.desc}
						</Text>
					</TabComponent>
				))}
			</div>
		</Section>
	</>
);

export default Resources;
