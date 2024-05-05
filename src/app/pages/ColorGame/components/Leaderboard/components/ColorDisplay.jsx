import { memo } from "react";

import cn from "./ScoreItem.module.scss";

export const ColorDisplay = memo(function ColorDisplay({
	color,
	label,
	isShort,
}) {
	return (
		<div className={cn.label}>
			{!isShort && (
				<>
					{label}: <span>{color}</span>
				</>
			)}
			<div className={cn.box} style={{ backgroundColor: color }}></div>
		</div>
	);
});
