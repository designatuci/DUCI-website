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
		<div style={{ width: "100%", height: "100%" }}>
			<img src={dark_graph} alt="" className={cn.graph} />

			{/* {positions.map((position) => {
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
						key={(top, left, right, bottom)}
					/>
				);
			})} */}
		</div>
	);
};

export default DarkBackground;
