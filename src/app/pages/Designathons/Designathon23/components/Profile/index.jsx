import { useCallback, useState } from "react";

import { Modal } from "./Modal";
import cn from "./Profile.module.scss";

const Profile = ({ name, photo, role, ...rest }) => {
	const [open, setOpen] = useState(false);

	const toggleProfile = useCallback(() => setOpen((p) => !p), []);

	return (
		<>
			<div className={cn.container} onClick={toggleProfile}>
				<img src={require(`assets/${photo}`)} alt={name} />
				<p>{name}</p>
				<span>{role}</span>
			</div>
			{open && (
				<Modal
					name={name}
					photo={photo}
					role={role}
					open={open}
					toggleProfile={toggleProfile}
					{...rest}
				/>
			)}
		</>
	);
};

export { Profile };
