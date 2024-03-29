import clsx from "clsx";
import cn from "./Modal.module.scss";

export const Modal = ({ toggleProfile, photo, name, role, about }) => {
	return (
		<div className={clsx(cn.modal)} onClick={toggleProfile}>
			<div className={cn.container}>
				<img src={require(`../../../assets/${photo}`)} alt={name} />
				<div className={cn.profile}>
					<h3>{name}</h3>
					<p className={cn.role}>{role}</p>
				</div>
				<div className={cn.content}>
					<h4>About Me: </h4>
					<p>{about}</p>
					<h4>Fun Fact: </h4>
				</div>
			</div>
		</div>
	);
};
