import { Text } from "app/components";
import icon1 from "app/pages/Houses/assets/icon1.png";
import icon2 from "app/pages/Houses/assets/icon2.png";
import icon3 from "app/pages/Houses/assets/icon3.png";
import icon4 from "app/pages/Houses/assets/icon4.png";
import { Section } from "app/Symbols";
import clsx from "clsx";

import cn from "./Perks.module.scss";

function Perks() {
	return (
		<Section className={cn.perks} id="activities-and-perks">
			<Text color="white" size="XXL" className="wait">
				Activities and Perks
			</Text>
			<div className={cn.list}>
				<div className={clsx(cn.item, "wait")}>
					<img alt="decorative" src={icon1} />
					<Text size="L" color="white">
						Networking Opportunities
					</Text>
					<Text color="gray">
						Connect with fellow designers and peers of all different
						experience levels
					</Text>
				</div>
				<div className={clsx(cn.item, "wait")}>
					<img alt="decorative" src={icon2} />
					<Text color="white">
						Hands-on Projects in Smaller Environments
					</Text>
					<Text color="gray">
						Participate in design projects in concentrated team
						environments
					</Text>
				</div>
				<div className={clsx(cn.item, "wait")}>
					<img alt="decorative" src={icon3} />
					<Text color="white"> Win Prizes by attending events</Text>
					<Text color="gray">
						Participate in more activities and boost up house points
						to win a prize!
					</Text>
				</div>
				<div className={clsx(cn.item, "wait")}>
					<img alt="decorative" src={icon4} />
					<Text color="white">
						Personalized 1:1 Communication with Board
					</Text>
					<Text color="gray">
						Talk directly with board members and schedule coffee
						chats
					</Text>
				</div>
			</div>
		</Section>
	);
}

export default Perks;
