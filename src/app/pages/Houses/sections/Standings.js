import clsx from "clsx";

import { Text } from "app/components";
import { Section } from "app/Symbols";

import useHousePoints from "app/pages/Houses/useHousePoints";

import House1 from "app/pages/Houses/assets/Group1.png";
import House2 from "app/pages/Houses/assets/Group2.png";
import House3 from "app/pages/Houses/assets/Group3.png";
import House4 from "app/pages/Houses/assets/Group4.png";

import cn from "./Standings.module.scss";

const PUBLIC_POINTS_SPREADSHEET =
	"https://docs.google.com/spreadsheets/d/e/2PACX-1vSnnktxMR0eyf8AjZDYasCiN-q_JfmBnAJuHiNjtSTrXQSUkVLmzOlHTT3Ry3o1c0SNKeoqD61GzFwO/pubhtml";

const HOUSES = [
	{
		name: "Hades",
		icon: House1,
	},
	{
		name: "Athena",
		icon: House2,
	},
	{
		name: "Zeus",
		icon: House3,
	},
	{
		name: "Aphrodite",
		icon: House4,
	},
];

function Standings() {
	const housePoints = useHousePoints();
	return (
		<Section className={cn.standings} id="houses">
			<Text size="XXL" className={clsx(cn.title, "wait")}>
				The Houses
			</Text>
			<div className={cn.list}>
				{HOUSES.map(({ name, icon }) => (
					<div key={name} className={clsx(cn.house, "wait")}>
						<img alt="decorative" src={icon} />
						<div>
							<Text size="L">{name}</Text>
						</div>
						<div className={cn.housePoints}>
							<Text color="blue" size="XL">
								{housePoints[name] ?? "-"}
							</Text>
							<span>points</span>
						</div>
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
