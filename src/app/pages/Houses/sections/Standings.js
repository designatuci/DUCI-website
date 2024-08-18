import { Text } from "app/components";
import Bow from "app/pages/Houses/assets/Bow";
import Dove from "app/pages/Houses/assets/Dove";
import Flame from "app/pages/Houses/assets/Flame";
import Lightning from "app/pages/Houses/assets/Lightning";
import useHousePoints from "app/pages/Houses/useHousePoints";
import { Section } from "app/Symbols";
import clsx from "clsx";

import cn from "./Standings.module.scss";

const PUBLIC_POINTS_SPREADSHEET =
	"https://docs.google.com/spreadsheets/d/e/2PACX-1vSnnktxMR0eyf8AjZDYasCiN-q_JfmBnAJuHiNjtSTrXQSUkVLmzOlHTT3Ry3o1c0SNKeoqD61GzFwO/pubhtml";

const HOUSES = [
	{
		color: "blue",
		name: "Hades",
		icon: <Flame square r={45} />,
	},
	{
		color: "green",
		name: "Athena",
		icon: <Bow square r={45} />,
	},
	{
		color: "yellow",
		name: "Zeus",
		icon: <Lightning square r={45} />,
	},
	{
		color: "pink",
		name: "Aphrodite",
		icon: <Dove square r={45} />,
	},
];

function Standings() {
	const housePoints = useHousePoints();
	return (
		<Section className={cn.standings} id="houses">
			<Text size="XXL" className={clsx(cn.title, "wait")}>
				House Standings
			</Text>
			<div className={cn.list}>
				{HOUSES.map(({ color, name, icon }) => (
					<div key={name} className={clsx(cn.house, "wait")}>
						<div className={cn.houseIcon}>{icon}</div>
						<Text size="L" color={color} className={cn.houseTitle}>
							{name}
						</Text>
						<Text size="XL" className={cn.housePoints}>
							{housePoints[name] ?? "-"} points
						</Text>
					</div>
				))}
			</div>
			<div className="wait show drop d10 l2">
				<a
					href={PUBLIC_POINTS_SPREADSHEET}
					target="_blank"
					rel="noopener noreferrer"
					className={clsx("button L fill blue", cn.join)}
				>
					<Text size="L" color="white" icon="right">
						View All Points
					</Text>
				</a>
			</div>
		</Section>
	);
}

export default Standings;
