import { Helmet } from 'react-helmet';
import clsx from 'clsx';
import { Text } from 'app/components';
import { Icon, Section, Space } from 'app/Symbols.js';

import { Link } from 'react-router-dom';
import cn from './Internship.module.scss';

const Merch = () => {
	return (
		<>
			<Helmet>
				<title>Internship – Design at UCI</title>
			</Helmet>
			<Section className={clsx(cn.container, 'center page short')}>
				<Icon
					className='wait dx scale'
					w='96'
					h='96'
					src='mentor-main.svg'
				/>
				<Text size='XXL' className='wait dx scale'>
					Internship
				</Text>
				<Space h='16' />
				<div
					className='flex left slim spaceChildrenSmall'
					style={{ textAlign: 'left' }}
				>
					<Text className='color red'>
						Design at UCI Internship Applications are now closed.
					</Text>

					<br />
					<Text size='L'>What is the Internship Program?</Text>
					<Text className='color gray'>
					The internship program is a year-long opportunity for individuals to collaborate with current board members, gain hands-on experience and contribute to the organization's overall success. Throughout the program, interns will receive regular feedback, mentoring, and access to professional development opportunities. Successful interns will leave the program with valuable experience, new skills, and industry connections, ready to pursue a career in their chosen field.  
					</Text>
					<Text className='color gray'>
						To get involved, <Link className={cn.underlined} to='/join'>join us</Link> to get
						notifications about when the next applications come out!
					</Text>
				</div>
			</Section>
		</>
	);
};

export default Merch;
