import { Text } from "app/components";
import { Section, Icon } from "app/Symbols.js";
import { ReactComponent as ContentPink } from "./content-pink.svg";
import { ReactComponent as ContentOrange } from "./content-orange.svg";
import { ReactComponent as ContentBlue } from "./content-blue.svg";

const COLOR_MAP = {
	pink: {
		color: "#FFF5FE",
		svg: ContentPink,
	},
	orange: {
		color: "#FFF3F3",
		svg: ContentOrange,
	},
	blue: {
		color: "#E7F9FF",
		svg: ContentBlue,
	},
};

export function ResourcesSplash({ title, color, iconSrc }) {
	const { color: bgColor, svg: Svg } = COLOR_MAP[color];

	return (
		<Section
			className="left"
			style={{
				display: "flex",
				alignItems: "end",
				backgroundColor: bgColor,
				position: "relative",
				height: 544,
			}}
		>
			<Svg
				style={{
					position: "absolute",
					right: 0,
					top: 0,
					pointerEvents: "none",
				}}
			/>

			<Text size={"L"}>Resources</Text>

			<div
				style={{
					display: "flex",
					gap: 20,
					width: "100%",
				}}
			>
				<Icon className="wait dx scale" w="70" h="70" src={iconSrc} />

				<Text size="XXL" className="wait dx scale">
					{title}
				</Text>
			</div>
		</Section>
	);
}
