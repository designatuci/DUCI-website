import { Section } from "app/Symbols";
import clsx from "clsx";

import balsamiq from "../../assets/graphics/sponsors/balsamiq.png";
import codazen from "../../assets/graphics/sponsors/codazen.jpg";
import ctc from "../../assets/graphics/sponsors/ctc.png";
import double_heart from "../../assets/graphics/sponsors/double_heart.svg";
import FOF from "../../assets/graphics/sponsors/FOF.png";
import heart from "../../assets/graphics/sponsors/heart.svg";
import ml_squiggle from "../../assets/graphics/sponsors/ml_squiggle.svg";
import mr_squiggle from "../../assets/graphics/sponsors/mr_squiggle.svg";
import notion from "../../assets/graphics/sponsors/notion.png";
import odit from "../../assets/graphics/sponsors/odit.svg";
import tape from "../../assets/graphics/sponsors/tape.svg";
import tilt_down from "../../assets/graphics/sponsors/tilt_down.svg";
import tilt_up from "../../assets/graphics/sponsors/tilt_up.svg";
import tr_squiggle from "../../assets/graphics/sponsors/tr_squiggle.svg";
import vgdc from "../../assets/graphics/sponsors/vgdc.png";
import cn from "./Sponsors.module.scss";

const SPONSOR_DETAILS = [
	{
		id: 1,
		backgroundImage: tilt_up,
		link: "https://www.notion.so/",
		img: notion,
		alt: "Notion",
		tape: true,
	},
	{
		id: 2,
		backgroundImage: tilt_down,
		link: "https://friends.figma.com/",
		img: FOF,
		alt: "Friends of Figma",
	},
	{
		id: 3,
		backgroundImage: tilt_up,
		link: "https://odit.uci.edu/",
		img: odit,
		alt: "UCI Office of Data and Information Technology",
		tape: true,
		mirrorTape: true,
	},
	{
		id: 4,
		backgroundImage: tilt_up,
		link: "https://www.codazen.com/",
		img: codazen,
		alt: "Codazen",
		tape: true,
		mirrorTape: true,
	},
];

const PARTNER_DETAILS = [
	{
		id: 1,
		backgroundImage: tilt_down,
		link: "https://balsamiq.com/",
		img: balsamiq,
		alt: "balsamiq",
	},
	{
		id: 2,
		backgroundImage: tilt_up,
		link: "https://sites.google.com/uci.edu/vgdcuci",
		img: vgdc,
		alt: "Video Game Development Club",
	},
	{
		id: 3,
		backgroundImage: tilt_up,
		link: "https://ctc-uci.com/",
		img: ctc,
		alt: "Commit the Change",
		tape: true,
		mirrorTape: true,
	},
];

const Sponsors = () => {
	return (
		<div className={cn.sponsors} id="s-sponsors">
			<img
				src={tr_squiggle}
				alt=""
				className={clsx(cn.tr, cn.decoration)}
			/>
			<img
				src={ml_squiggle}
				alt=""
				className={clsx(cn.ml, cn.decoration)}
			/>
			<img
				src={mr_squiggle}
				alt=""
				className={clsx(cn.mr, cn.decoration)}
			/>

			<Section>
				<div className={cn.content}>
					<div className={cn.headingContainer}>
						<img
							src={heart}
							alt=""
							className={clsx(cn.heart, cn.decoration)}
						/>
						<h2 className={cn.heading}>Sponsors</h2>
					</div>
					<div className={cn.logos}>
						{SPONSOR_DETAILS.map((item) => (
							<div
								style={{
									backgroundImage: `url(${item.backgroundImage})`,
								}}
								key={item.alt + item.id}
							>
								{item.tape ? (
									<img
										src={tape}
										alt=""
										className={clsx(
											cn.tape,
											item.mirrorTape && cn.mirrorTape,
										)}
									/>
								) : null}
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={item.img} alt={item.alt} />
								</a>
							</div>
						))}
					</div>
				</div>

				<div className={cn.content}>
					<div className={cn.headingContainer}>
						<img
							src={double_heart}
							alt=""
							className={clsx(cn.decoration, cn.double_heart)}
						/>
						<h2 className={cn.heading}>Partners</h2>
					</div>
					<div className={cn.logos}>
						{PARTNER_DETAILS.map((item) => (
							<div
								style={{
									backgroundImage: `url(${item.backgroundImage})`,
								}}
								key={item.alt + item.id}
							>
								{item.tape ? (
									<img
										src={tape}
										alt=""
										className={clsx(
											cn.tape,
											item.mirrorTape && cn.mirrorTape,
										)}
									/>
								) : null}
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={item.img} alt={item.alt} />
								</a>
							</div>
						))}
					</div>
				</div>
			</Section>
		</div>
	);
};

export { Sponsors };
