import clsx from 'clsx';
import { Helmet } from 'react-helmet';
import PhotoAlbum from 'react-photo-album';
import { Link } from 'react-router-dom';

import { Section } from 'app/Symbols.js';

import IMG1 from './assets/1.jpg';
import IMG2 from './assets/2.jpg';
import IMG3 from './assets/3.jpg';
import IMG4 from './assets/4.jpg';
import IMG5 from './assets/5.jpg';
import IMG6 from './assets/6.jpeg';
import IMG7 from './assets/7.jpeg';
import IMG9 from './assets/9.png';
import IMG10 from './assets/10.png';
// import IMG11 from './assets/11.png';
// import IMG8 from './assets/8.jpeg';

import cn from './Shirt22.module.scss';

const Shirt22 = () => {
	const photos = [
		{
			src: IMG2,
			width: 800,
			height: 600,
		},
		{
			src: IMG3,
			width: 900,
			height: 900,
		},
		{
			src: IMG4,
			width: 3984,
			height: 2656,
		},
		{
			src: IMG5,
			width: 900,
			height: 900,
		},
		{
			src: IMG6,
			width: 900,
			height: 900,
		},
		{
			src: IMG7,
			width: 900,
			height: 900,
		},
		{
			src: IMG9,
			width: 900,
			height: 900,
		},
		{
			src: IMG10,
			width: 900,
			height: 900,
		},
	];

	return (
		<>
			<Helmet>
				<title>Merch – Spring '22 Shirt</title>
			</Helmet>
			<Section className={clsx(cn.container, 'short')}>
				<div className={cn.twofold}>
					<div>
						<div className={cn.breadcrumb}>
							<Link to='/merch'>Merch</Link> {'>'}
							<span>Spring '22 Shirt</span>
						</div>
						<h1 className={cn.label}>Spring '22 Shirt</h1>
						<span
							className={'color blue'}
							style={{ margin: '45px 0 0px', fontSize: '1.5em' }}
						>
							$20 •{' '}
							<span
								className={'color red'}
								style={{
									display: 'inline-block',
									marginBottom: '5px',
								}}
							>
								Out of Stock{' '}
							</span>
						</span>
						<p className={cn.description}>
							Support Design at UCI with style by purchasing our
							limited-edition embroidered t-shirts! Rock your UC
							Irvine pride and our club's colors — comes in unisex
							Small, Medium, and Large.
						</p>

						{/* <a
							className={clsx(cn.buy, 'color blue')}
							target='_blank'
							rel='noopener noreferrer'
							href='https://forms.gle/RVoUbLPQnHYzeWMA6'
						>
							Buy Here
						</a> */}
					</div>
					<div className={cn.image}>
						{/* <img className={cn.behind} src={IMG2} alt='shirt with embroidered uci logo' /> */}
						<img src={IMG1} alt='shirt with embroidered uci logo' />
					</div>
				</div>
				<div className={cn.gallery}>
					<h1 style={{ textAlign: 'center', margin: '200px 0 50px' }}>
						More Photos
					</h1>
					<PhotoAlbum layout='masonry' photos={photos} columns={2} />
				</div>
			</Section>
		</>
	);
};

export default Shirt22;
