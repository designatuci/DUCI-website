import React from "react";

import cn from "./Dark.module.scss";

import dark_graph from "../../../assets/graphics/background/dark_graph.svg";

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
const DarkBackground = ({ positions }) => {
	return (
		<div>
			{positions.map((position) => {
				const { top, left, right, bottom } = position;

				return (
					<img
						src={dark_graph}
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

export default DarkBackground;
