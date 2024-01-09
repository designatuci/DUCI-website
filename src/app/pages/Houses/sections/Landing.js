import clsx from "clsx";

import { Text } from "app/components";
import Symbol1 from "app/pages/Houses/assets/1.png";
import Symbol2 from "app/pages/Houses/assets/2.png";
import Symbol3 from "app/pages/Houses/assets/3.png";
import Symbol4 from "app/pages/Houses/assets/4.png";
import Symbol5 from "app/pages/Houses/assets/5.png";
import Symbol6 from "app/pages/Houses/assets/6.png";
import Symbol7 from "app/pages/Houses/assets/7.png";
import Symbol8 from "app/pages/Houses/assets/8.png";

import cn from "./Landing.module.scss";

const HEADER_SYMBOLS = [
	{
		image: Symbol1,
		top: 10,
		left: 10,
	},
	{
		image: Symbol2,
		top: 10,
		left: 80,
	},
	{
		image: Symbol3,
		top: 25,
		left: 25,
	},
	{
		image: Symbol4,
		top: 30,
		left: 88,
	},
	{
		image: Symbol5,
		top: 55,
		left: 65,
	},
	{
		image: Symbol6,
		top: 60,
		left: 15,
	},
	{
		image: Symbol7,
		top: 70,
		left: 30,
	},
	{
		image: Symbol8,
		top: 70,
		left: 70,
	},
];

function Landing({ scrollToJoin }) {
	return (
		<header className={cn.landing}>
			{HEADER_SYMBOLS.map(({ image, top, left }, i) => (
				<div
					key={i}
					className={cn.decoration}
					style={{ top: top + "%", left: left + "%" }}
				>
					<img alt="decorative" src={image} className={"wait"} />
				</div>
			))}
			<div className={clsx(cn.catch, "wait")}>
				<Text size="M">
					<span>WIN A PRIZE</span> • earn the most points
				</Text>
			</div>
			<Text size="XXXL" className={clsx("wait", cn.title)}>
				Avatar Houses
			</Text>
			<Text color="gray" className="wait">
				be a part of your own design family
			</Text>
			<div className="wait show drop d10 l2">
				<button
					className={clsx("button L fill blue", cn.join)}
					onClick={scrollToJoin}
				>
					<Text size="L" color="white" icon="right">
						Join now
					</Text>
				</button>
			</div>
		</header>
	);
}

export default Landing;
