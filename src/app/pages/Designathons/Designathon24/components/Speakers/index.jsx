import cn from "./Speakers.module.scss";

import tape_black from "../../assets/graphics/speakers/tape_black.svg";
import tape_white from "../../assets/graphics/speakers/tape_white.svg";
import splat from "../../assets/graphics/speakers/splat.svg";
import pencil from "../../assets/graphics/speakers/pencil.svg";
import tl_gradient from "../../assets/graphics/speakers/tl_gradient.svg";
import tl_star_stripe from "../../assets/graphics/speakers/tl_star_stripe.svg";
import tr_star_stripe from "../../assets/graphics/speakers/tr_star_stripe.svg";
import ml_stripe from "../../assets/graphics/speakers/ml_stripe.svg";
import mr_star_stripe from "../../assets/graphics/speakers/mr_star_stripe.svg";
import br_star_stripe_gradient from "../../assets/graphics/speakers/br_star_stripe_gradient.svg";

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

					<div className={cn.keynotePolaroid}>
						<Polaroid
							photo={JUDGES[0].photo}
							name={JUDGES[0].name}
							position={JUDGES[0].role}
						/>
						<img src={splat} alt="splat" className={cn.splat} />
					</div>
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

			<img src={pencil} alt="pencil" className={`${cn.pencil} wait flopR`} />
			<img src={tl_gradient} alt="tl_gradient" className={cn.tl_gradient} />
			<img
				src={tl_star_stripe}
				alt="tl_star_stripe"
				className={cn.tl_star_stripe}
			/>
			<img
				src={tr_star_stripe}
				alt="tr_star_stripe"
				className={cn.tr_star_stripe}
			/>
			<img src={ml_stripe} alt="ml_stripe" className={cn.ml_stripe} />
			<img
				src={mr_star_stripe}
				alt="mr_star_stripe"
				className={cn.mr_star_stripe}
			/>
			<img
				src={br_star_stripe_gradient}
				alt="br_star_stripe_gradient"
				className={cn.br_star_stripe_gradient}
			/>
		</div>
	);
};

export { Speakers };
