import { Helmet } from 'react-helmet';
import { Section, Space, Photo } from '../../Symbols.js';
import clsx from 'clsx';
import { Text } from '../../components';
import MERCH_LIST from '../../../assets/data/merchList.json';
import cn from './Merch.module.scss';

const Merch = () => (
	<>
		<Helmet>
			<title>Merch – Design at UCI</title>
		</Helmet>
		<Section className={clsx(cn.header, 'center short')}>
			<Text
				size='XXL'
				className={clsx(cn.text, 'wait dx bold color white')}
			>
				Merchandise
			</Text>
			<Text className='wait dx subtle color white'>
				Help support Design at UCI—so we can continue to host our free
				programs and events.
			</Text>
		</Section>
		{MERCH_LIST.map(({ name, description, inStock, items }) => (
			<Section className='short'>
				<div className='flex left spaceChildren'>
					<Text size='XL'>{name}</Text>
					<div className='flex left spaceChildrenSmall'>
						{!inStock && (
							<Text className='color orange'>Sold out</Text>
						)}
						<Text className='color gray'>{description}</Text>
					</div>
				</div>
				<Space h='0' />
				<div className={clsx(cn.split4, 'split4')}>
					{items.map(item => (
						<div
							className='flex top left spaceChildrenSmall'
							key={item.name}
						>
							<Photo className='relative' src={item.photo}>
								<div style={{ paddingBottom: '100%' }} />
								{item?.type === 'holo' && (
									<>
										<Photo
											className={clsx(
												cn['holo-effect1'],
												'background'
											)}
											src='Sf21-frozen-effect1.png'
										/>
										<Photo
											className={clsx(
												cn['holo-effect2'],
												'background'
											)}
											src='Sf21-frozen-effect2.png'
										/>
									</>
								)}
							</Photo>
							<Text>{item.name}</Text>
							{item?.type === 'holo' && (
								<Text className='color blue'>Holographic</Text>
							)}
						</div>
					))}
				</div>
			</Section>
		))}
	</>
);

export default Merch;
