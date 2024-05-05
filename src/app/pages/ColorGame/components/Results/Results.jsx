import { Text } from "app/components";
import { memo } from "react";
import cn from "./Results.module.scss";

export const Results = memo(function Results({ report }) {
	return (
		<div className={cn.container}>
			<Text size="L" className="color blue">
				You were {report.similarityPercentage.toFixed(2)}% of the way
				there!
			</Text>
			<div>answer: #{report.actual}</div>
			<div> you guessed: #{report.guess} </div>
		</div>
	);
});
