import cn from "./Speakers.module.scss";

import tape_black from "../../assets/graphics/speakers/tape_black.svg";
import tape_white from "../../assets/graphics/speakers/tape_white.svg";

import JUDGES from "../../assets/data/judges.json";
import WORKSHOP_HOSTS from "../../assets/data/workshop-hosts.json";

const Polaroid = ({ photo, name, position, odd }) => {
	return (
		<div className={cn.polaroid}>
			<img src={odd ? tape_white : tape_black} alt="tape" className={cn.tape} />

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
			<h2 className={cn.heading}>Speakers</h2>

			<div className={cn.polaroids}>
				<div className={cn.keynote}>
					<h3 className={cn.polaroidHeading}>Keynote Speaker</h3>

					<Polaroid
						photo={JUDGES[0].photo}
						name={JUDGES[0].name}
						position={JUDGES[0].role}
					/>
				</div>

				<div className={cn.peopleContainer}>
					<h3 className={cn.polaroidHeading}>Judges</h3>

					<div className={cn.people}>
						{JUDGES.map((judge, index) => (
							<Polaroid
								key={index} // FIXME: Don't use index
								photo={judge.photo}
								name={judge.name}
								position={judge.role}
								odd={index % 2 === 0}
							/>
						))}
					</div>
				</div>

				<div className={cn.peopleContainer}>
					<h3 className={cn.polaroidHeading}>Workshop Hosts</h3>

					<div className={cn.people}>
						{WORKSHOP_HOSTS.map((host, index) => (
							<Polaroid
								key={index} // FIXME: Don't use index
								photo={host.photo}
								name={host.name}
								position={host.role}
								odd={index % 2 === 0}
							/>
						))}
					</div>
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
