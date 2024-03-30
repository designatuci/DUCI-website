import cn from "./Polaroid.module.scss";

import { useCallback, useState } from "react";

import { Modal } from "../Speakers/Modal";

import tape_black from "../../assets/graphics/speakers/tape_black.svg";
import tape_white from "../../assets/graphics/speakers/tape_white.svg";

export const Profile = ({ person, odd, tape: showTape }) => {
	const { photo, name, role } = person;

	return (
		<div className={cn.polaroid}>
			{showTape ? (
				<img
					src={odd ? tape_white : tape_black}
					alt="tape"
					className={cn.tape}
				/>
			) : null}

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
	);
};

const Polaroid = ({ person, odd, container }) => {
	const [open, setOpen] = useState(false);

	const handleClick = useCallback(() => {
		container.current.style.zIndex = open ? "1" : "100";
		setOpen((prev) => !prev);
	}, [container, open]);

	return (
		<>
			<div
				className={cn.polaroidContainer}
				onClick={handleClick}
				style={{ cursor: "pointer" }}
			>
				<Profile person={person} odd={odd} showTape={true} />
			</div>

			{open ? (
				<Modal
					person={person}
					open={open}
					toggleProfile={handleClick}
				/>
			) : null}
		</>
	);
};

export default Polaroid;
