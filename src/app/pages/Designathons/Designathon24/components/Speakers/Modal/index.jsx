import clsx from "clsx";
import cn from "./Modal.module.scss";

import { useEffect } from "react";
import Notecard from "../../Notecard/Notecard";
import { Profile } from "../../Polaroid/Polaroid";

import close_icon from "../../../assets/close_icon.svg";

export const Modal = ({ toggleProfile, person }) => {
	const { about } = person;

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				toggleProfile();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [toggleProfile]);

	return (
		<div className={clsx(cn.modal)} /*onClick={toggleProfile}*/>
			<Notecard modalCard={true}>
				<button className={cn.close_button}>
					<img
						src={close_icon}
						alt="x icon to close notecard modal"
						onClick={toggleProfile}
					/>
				</button>

				<div className={cn.popupContainer}>
					<div className={cn.popupProfile}>
						<Profile person={person} showTape={false} />
					</div>

					<div className={cn.popupDetails}>
						<h6 className={cn.heading}>About</h6>
						<p className={cn.text}>{about}</p>
					</div>
				</div>
			</Notecard>
		</div>
	);
};
