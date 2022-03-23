import { Icon } from '../../../../Symbols';
import cn from './Profile.module.scss';

const Profile = ({ textOnly = false, data }) => (
	<div className={cn.container}>
		{!textOnly && (
			<img
				src={'/static/photo/portrait/' + data.photo}
				alt={data.name + ' headshot'}
			/>
		)}
		<p>
			{data.name}
			<br />
			<span>{data.position}</span>
		</p>

		<div className={cn.socials}>
			{data.links?.map(({ type, href }) => (
				<a
					key={href}
					target='_blank'
                    rel='noopener noreferrer'
					href={href}
				>
					<Icon hoverable src={`nav-${type}.svg`} w='20' h='20' />
				</a>
			))}
		</div>
	</div>
);

export default Profile;
