import { useEffect } from "react";
import clsx from "clsx";

import Notecard from "../../Notecard/Notecard";
import { Profile } from "../../Polaroid/Polaroid";
import cn from "./Modal.module.scss";

export const Modal = ({ toggleProfile, person }) => {
	const { about } = person;

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				toggleProfile();
				event.preventDefault();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [toggleProfile]);

	return (
		<div className={clsx(cn.modal)} onClick={toggleProfile}>
			<Notecard modalCard={true} /*toggleProfile={toggleProfile}*/>
				<div className={cn.popupContainer}>
					<div className={cn.popupProfileContainer}>
						<div className={cn.popupProfile}>
							<Profile person={person} showTape={false} />
						</div>
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
