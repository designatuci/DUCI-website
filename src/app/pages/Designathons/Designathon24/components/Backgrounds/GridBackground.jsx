import React from "react";
import clsx from "clsx";

import dark_graph from "../../assets/graphics/background/dark_graph.svg";
import light_graph from "../../assets/graphics/background/light_graph.svg";
import cn from "./GridBackground.module.scss";

/**
 * @typedef {Object} Positions
 * @property {number} [top]
 * @property {number} [left]
 * @property {number} [right]
 * @property {number} [bottom]
 */

/**
 * @param {Positions[]} positions
 * @param {boolean} isLight
 * @returns {JSX.Element}
 */
const GridBackground = ({ positions, isLight }) => {
	return (
		<div>
			{positions.map((position) => {
				const { top, left, right, bottom } = position;

				return (
					<img
						src={isLight ? light_graph : dark_graph}
						alt=""
						className={clsx(cn.graph, isLight ? cn.light : cn.dark)}
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

export default GridBackground;
