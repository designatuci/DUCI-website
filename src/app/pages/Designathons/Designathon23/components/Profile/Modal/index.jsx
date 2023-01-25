import clsx from 'clsx';
import cn from './Modal.module.scss';

export const Modal = ({ toggleProfile, photo, name, role, about, funFact, pronouns}) => {
	return (
		<div className={clsx(cn.modal)} onClick={toggleProfile}>
			<div className={cn.container}>
				<img src={require(`assets/${photo}`)} alt={name} />
				<div className={cn.profile}>
					<h3>{name}</h3>
					<p><span>Role: </span>{role}</p>
					<p><span>Pronouns: </span>{pronouns}</p>
					<p><span>About Me: </span>{about}</p>
					{<p><span>Fun Fact: </span>{funFact}</p>}
				</div>
			</div>
		</div>
	);
};
