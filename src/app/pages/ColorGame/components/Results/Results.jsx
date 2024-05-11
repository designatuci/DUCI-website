import { Text } from "app/components";
import { memo } from "react";
import cn from "./Results.module.scss";

export const Results = memo(function Results({ report }) {
	const actualColor = "#" + report.actual;
	const guessColor = "#" + report.guess;

	return (
		<div className={cn.container}>
			<Text size="L" className="color blue">
				You were {report.similarityPercentage.toFixed(2)}% of the way
				there!
			</Text>
			<div className={cn.split}>
				<div className={cn.left}>
					<div className={cn.description}>
						<Text size="S" className="color gray">
							ANSWER
						</Text>
						<br />
						<p className={cn.color}>{actualColor}</p>
					</div>
					<div
						className={cn.box}
						style={{ backgroundColor: actualColor }}
					></div>
				</div>
				<div className={cn.right}>
					<div
						className={cn.box}
						style={{ backgroundColor: guessColor }}
					></div>
					<div className={cn.description}>
						<Text size="S" className="color gray">
							GUESS
						</Text>
						<br />
						<p className={cn.color}>{guessColor}</p>
					</div>
				</div>
			</div>
		</div>
	);
});
