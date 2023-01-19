import cn from './Profile.module.scss';

const Profile = ({ name, photo, role }) => {
	return (
		<div className={cn.container}>
			<img src={require(`assets/${photo}`)} alt={name} />
			<p>{name}</p>
			<span>{role}</span>
		</div>
	);
};

export { Profile };
