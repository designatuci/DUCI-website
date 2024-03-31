import cn from "./Rules.module.scss";
import clsx from "clsx";

import RULES from "../../assets/data/rules.json";

import cream_hot_pink from "../../assets/graphics/rules/cream_hot_pink.svg";
import cream from "../../assets/graphics/rules/cream.svg";
import peach_cream from "../../assets/graphics/rules/peach_cream.svg";
import pink from "../../assets/graphics/rules/pink.svg";
import hearts from "../../assets/graphics/rules/hearts.svg";
import DarkBackground from "../Backgrounds/Dark/DarkBackground";

const BACKGROUND_MAP = {
	0: cream_hot_pink,
	1: peach_cream,
	2: pink,
	3: pink,
	4: cream,
	5: peach_cream,
	6: peach_cream,
};

export const Rules = () => (
	<div className={cn.container} id="s-rules">
		<DarkBackground positions={[{ top: 0, right: 0 }]} />

		<div className={cn.content}>
			<img
				src={hearts}
				alt=""
				className={clsx(cn.hearts, "wait flopR")}
			/>

			<h2 className={cn.heading}>Rules</h2>

			<div className={cn.rules}>
				{RULES.map((rule, index) => (
					<div
						className={cn.rule}
						key={rule}
						style={{
							backgroundImage: `url(${BACKGROUND_MAP[index]})`,
						}}
					>
						<div className={cn.text}>
							<span className={cn.number}>{index + 1}.</span>
							<span>{rule}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	</div>
);
