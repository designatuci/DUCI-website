import React from "react";

import cn from "./Light.module.scss";

import light_graph from "../../../assets/graphics/background/light_graph.svg";

/**
 * @typedef {Object} Positions
 * @property {number} [top]
 * @property {number} [left]
 * @property {number} [right]
 * @property {number} [bottom]
 */

/**
 * @param {Positions[]} positions
 * @returns {JSX.Element}
 */
const LightBackground = ({ positions }) => {
	return (
		<div>
			{positions.map((position) => {
				const { top, left, right, bottom } = position;

				return (
					<img
						src={light_graph}
						alt=""
						className={cn.graph}
						style={{
							top: `${top ?? "unset"}`,
							left: `${left ?? "unset"}`,
							right: `${right ?? "unset"}`,
							bottom: `${bottom ?? "unset"}`,
						}}
						key={"" + top + left + right + bottom}
					/>
				);
			})}
		</div>
	);
};

export default LightBackground;
