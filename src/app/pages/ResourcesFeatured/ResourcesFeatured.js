import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
	Section,
	Icon,
	Space,
	Photo,
	LoadingD,
	PageIcon,
	CheckIcon,
} from '../../Symbols.js';
import { Text } from '../../components';
import RESOURCE_LIST from '../../../assets/data/resourceList.json';
import cn from './ResourcesFeatured.module.scss';

function mapTypeColor(type) {
	switch (type) {
		case 'Tool':
			return 'orange';
		case 'Inspiration':
			return 'blue';
		case 'Guide':
			return 'green';
		default:
			return 'gray';
	}
}

const ResourcesFeatured = props => {
	const [filterMode, setFilterMode] = useState({
		orange: true,
		blue: true,
		green: true,
		gray: true,
	});
	const toggleFilter = filter => {
		let newFilter = filterMode;
		newFilter[filter] = !newFilter[filter];
		setFilterMode({ ...newFilter });
	};
	return (
		<>
			<Helmet>
				<title>Featured Resources – Design at UCI</title>
			</Helmet>
			<Section className='short'>
				<div className='flex center spaceChildrenSmall'>
					<Icon
						className='wait dx scale'
						src='featured-resources.svg'
						w='96'
						h='96'
					/>
					<Text className='wait dx scale' size='XL'>
						Featured Resources
					</Text>
					<Text className='wait dx subtle color gray'>
						A curated list of helpful tools, guides, and more—to
						help you practice your skills.
					</Text>
				</div>
			</Section>
			<Section className='bare center' style={{ padding: '16px' }}>
				<div className='wait subtle flex row wrap'>
					{[
						{
							title: 'Tools',
							color: 'orange',
							fill: 'var(--orange)',
						},
						{
							title: 'Guides',
							color: 'green',
							fill: 'var(--green)',
						},
						{
							title: 'Inspiration',
							color: 'blue',
							fill: 'var(--blue)',
						},
						{ title: 'Other', color: 'gray', fill: 'var(--gray)' },
					].map(item => (
						<button key={item.title} className={cn.toggle} onClick={() => toggleFilter(item.color)}>
							<div
								className='flex row pointer'
								style={{ padding: '0 24px' }}
							>
								<CheckIcon
									check={filterMode[item.color]}
									r='18px'
									color={item.fill}
								/>
								<Space block w='8' />
								<Text className={`color ${item.color}`}>
									{item.title}
								</Text>
							</div>
						</button>
					))}
				</div>
			</Section>
			<Section className='short fill gray'>
				{RESOURCE_LIST == null ? (
					<div className='flex' style={{ padding: '64px 0' }}>
						<LoadingD width='128' />
					</div>
				) : (
					<div className='split4' style={{ gap: '16px' }}>
						{RESOURCE_LIST.resources
							.filter(e => filterMode[mapTypeColor(e.type)])
							.map(card => (
								<a
									key={card.link}
									href={card.link}
									target='_blank'
									rel='noopener noreferrer'
									className='wait dx show card S flex left top fill white spaceChildrenSmall'
								>
									<div
										className='flex row spaceBetween'
										style={{ margin: '-8px 0' }}
									>
										<Text
											size='S'
											className={`color ${mapTypeColor(
												card.type
											)}`}
										>
											{card.type}
										</Text>
										<PageIcon
											color='var(--silver)'
											style={{
												width: '32px',
												height: '32px',
											}}
										/>
									</div>
									<Space h='0' />
									<Photo
										className='shadow'
										style={{
											backgroundImage: `url(${
												card?.ogImg ??
												`/static/photo/featured-resource.svg`
											})`,
											height: '128px',
											width: '100%',
										}}
									></Photo>
									<Text size='L' className='color black'>
										{card.title}
									</Text>
									<Text className='color gray'>
										{card.desc}
									</Text>
								</a>
							))}
					</div>
				)}
			</Section>
		</>
	);
};

export default ResourcesFeatured;
