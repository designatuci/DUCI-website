import { Text } from "app/components";
import Bow from "app/pages/Houses/assets/Bow";
import Dove from "app/pages/Houses/assets/Dove";
import Flame from "app/pages/Houses/assets/Flame";
import Lightning from "app/pages/Houses/assets/Lightning";
import clsx from "clsx";

import cn from "./Landing.module.scss";

const HEADER_SYMBOLS = [
	{
		icon: <Bow r={48} />,
		top: 10,
		left: 10,
	},
	{
		icon: <Lightning r={72} />,
		top: 10,
		left: 80,
	},
	{
		icon: <Dove gray r={48} opacity={0.35} />,
		top: 25,
		left: 25,
	},
	{
		icon: <Bow gray r={48} opacity={0.15} />,
		top: 30,
		left: 88,
	},
	{
		icon: <Flame gray r={40} opacity={0.5} />,
		top: 55,
		left: 65,
	},
	{
		icon: <Lightning gray r={40} opacity={0.25} />,
		top: 60,
		left: 15,
	},
	{
		icon: <Flame r={72} />,
		top: 70,
		left: 30,
	},
	{
		icon: <Dove r={56} />,
		top: 70,
		left: 70,
	},
];

function Landing({ scrollToJoin }) {
	return (
		<header className={cn.landing}>
			{HEADER_SYMBOLS.map(({ icon, top, left }, i) => (
				<div
					key={i}
					className={cn.decoration}
					style={{ top: top + "%", left: left + "%" }}
				>
					{icon}
				</div>
			))}
			<div className={clsx(cn.catch, "wait")}>
				<Text size="M">
					<span>WIN A PRIZE</span> • earn the most points
				</Text>
			</div>
			<Text size="XXXL" className={clsx("wait", cn.title)}>
				Greek Gods Houses
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
						Join a house
					</Text>
				</button>
			</div>
		</header>
	);
}

export default Landing;
