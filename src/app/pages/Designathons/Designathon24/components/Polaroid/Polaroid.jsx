import cn from "./Polaroid.module.scss";

import { useCallback, useState } from "react";

import { Modal } from "../Speakers/Modal";

import tape_black from "../../assets/graphics/speakers/tape_black.svg";
import tape_white from "../../assets/graphics/speakers/tape_white.svg";

const Polaroid = ({ photo, name, role, odd, ...rest }) => {
	const [open, setOpen] = useState(false);

	const handleClick = useCallback(() => {
		setOpen((prev) => !prev);
	}, []);

	return (
		<>
			<div className={cn.polaroid} onClick={handleClick}>
				<img
					src={odd ? tape_white : tape_black}
					alt="tape"
					className={cn.tape}
				/>
				<img
					src={require(`../../assets/${photo}`)}
					alt={`polaroid of ${name}`}
					className={cn.polaroidImage}
				/>
				<div className={cn.polaroidDetails}>
					<h6 className={cn.polaroidName}>{name}</h6>
					<p className={cn.polaroidRole}>{role}</p>
				</div>
			</div>

			{open ? (
				<Modal
					name={name}
					photo={photo}
					role={role}
					open={open}
					toggleProfile={handleClick}
					{...rest}
				/>
			) : null}
		</>
	);
};

export default Polaroid;
