import { Helmet } from 'react-helmet';
import clsx from 'clsx';
import { Text } from 'app/components';
import { Section } from 'app/Symbols.js';

import { Link } from 'react-router-dom';
import cn from './Interns.module.scss';
import CURRENT_INTERNS from 'assets/data/currentBoardInterns.json';
import { Profile } from '../About/components';

const Merch = () => {
	return (
		<>
			<Helmet>
				<title>Interns – Design at UCI</title>
			</Helmet>
			<Section className={clsx(cn.container, 'center page short')}>
				<div className={cn.bannerimage}>
					<div>
						<h1 className={cn.bannertext} size='XL'>Meet the Interns</h1>
						<p className={cn.bannertext} size='XL'>Learn more about the interns who help run Design at UCI</p>
					</div>
				</div>
				<Text size='XL'>2022-2023 Interns</Text>
				<div className={cn.list}>
					{CURRENT_INTERNS.map((member, i) => (
						<Link to={'/intern/' + (member.name.split(' ').join('-')).toLowerCase()}>
							<Profile key={i} data={member} />
						</Link>
					))}
				</div>
			</Section>
		</>
	);
};

export default Merch;
