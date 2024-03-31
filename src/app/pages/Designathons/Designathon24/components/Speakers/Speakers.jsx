import cn from "./Speakers.module.scss";
import clsx from "clsx";

import { useRef } from "react";

import Polaroid from "../Polaroid/Polaroid";

import splat from "../../assets/graphics/speakers/splat.svg";
import tr_pencil_star_stripe from "../../assets/graphics/speakers/tr_pencil_star_stripe.svg";
import tl_gradient from "../../assets/graphics/speakers/tl_gradient.svg";
import tl_star_stripe from "../../assets/graphics/speakers/tl_star_stripe.svg";
import ml_stripe from "../../assets/graphics/speakers/ml_stripe.svg";
import mr_star_stripe from "../../assets/graphics/speakers/mr_star_stripe.svg";
import br_star_stripe_gradient from "../../assets/graphics/speakers/br_star_stripe_gradient.svg";

import JUDGES from "../../assets/data/judges.json";
import WORKSHOP_HOSTS from "../../assets/data/workshop-hosts.json";

const Speakers = () => {
	return (
		<div className={cn.container} id="s-speakers">
			<img
				src={tl_gradient}
				alt=""
				className={clsx(cn.decoration, cn.tl_gradient)}
			/>
			<img
				src={tl_star_stripe}
				alt=""
				className={clsx(cn.decoration, cn.tl_star_stripe, "wait flopL")}
			/>
			<img
				src={tr_pencil_star_stripe}
				alt=""
				className={clsx(
					cn.decoration,
					cn.tr_pencil_star_stripe,
					"wait flopR"
				)}
			/>
			<img
				src={ml_stripe}
				alt=""
				className={clsx(cn.decoration, cn.m, cn.stripe, "wait flopL")}
			/>
			<img
				src={mr_star_stripe}
				alt=""
				className={clsx(
					cn.decoration,
					cn.m,
					cn.star_stripe,
					"wait flopR"
				)}
			/>
			<img
				src={br_star_stripe_gradient}
				alt=""
				className={clsx(cn.decoration, cn.br_star_stripe_gradient)}
			/>
			<h2 className={cn.heading}>Speakers</h2>

			<div className={cn.polaroids}>
				<div className={cn.keynote}>
					<h3 className={cn.polaroidHeading}>Keynote Speaker</h3>

					<div
						className={cn.keynotePolaroid}
						style={{ backgroundImage: `url(${splat})` }}
					>
						<div className={cn.content}>
							<Polaroid person={JUDGES[0]} />
						</div>
					</div>
				</div>

				<div className={cn.peopleContainer}>
					<h3 className={cn.polaroidHeading}>Judges</h3>

					<div className={cn.people}>
						{JUDGES.map((judge, index) => (
							<Polaroid
								key={judge.name}
								person={judge}
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
								key={host.name}
								person={host}
								odd={index % 2 === 0}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export { Speakers };
