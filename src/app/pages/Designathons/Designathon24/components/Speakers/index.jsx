import cn from "./Speakers.module.scss";

import tape from "../../assets/graphics/speakers/tape.svg";
import JUDGES_2024 from "../../assets/data/judges.json";

const Polaroid = ({ photo, name, position }) => {
	console.log(photo);

	return (
		<div className={cn.polaroid}>
			<img src={tape} alt="black tape" className={cn.tape} />

			<img
				src={require(`../../assets/${photo}`)}
				alt={`polaroid of ${name}`}
				className={cn.polaroidImage}
			/>

			<div className={cn.polaroidDetails}>
				<h6 className={cn.polaroidName}>{name}</h6>
				<p className={cn.polaroidPosition}>{position}</p>
			</div>
		</div>
	);
};

const Speakers = () => {
	return (
		<div className={cn.container} id="s-speakers">
			<h2 className={cn.aboutHeading}>Speakers</h2>

			<div className={cn.polaroids}>
				<div className={cn.keynote}>
					<h3 className={cn.polaroidHeading}>Keynote Speaker</h3>

					<Polaroid
						photo={JUDGES_2024[0].photo}
						name={JUDGES_2024[0].name}
						position={JUDGES_2024[0].role}
					/>
				</div>

				<div className={cn.judges}>
					<h3 className={cn.polaroidHeading}>Judges</h3>

					<Polaroid
						photo={JUDGES_2024[0].photo}
						name={JUDGES_2024[0].name}
						position={JUDGES_2024[0].role}
					/>
				</div>
			</div>

			{/* <img
				src={airplane}
				alt="airplane"
				className={`${cn.airplane} wait flopR`}
			/>
			<img src={paperclip} alt="paperclip" className={cn.paperclip} />
			<img src={tr_gradient} alt="tr_gradient" className={cn.tr_gradient} />
			<img src={bl_gradient} alt="bl_gradient" className={cn.bl_gradient} />
			<img src={tr_stars} alt="tr_stars" className={cn.tr_stars} />
			<img src={bl_stars} alt="bl_stars" className={cn.bl_stars} /> */}
		</div>
	);
};

export { Speakers };
