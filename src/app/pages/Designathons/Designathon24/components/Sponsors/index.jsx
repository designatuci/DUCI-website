import cn from "./Sponsors.module.scss";
import { Section } from "app/Symbols";

import FOF from "../../assets/FOF.png";
import notion from "../../assets/notion.png";
import balsamiq from "../../assets/balsamiq.png";

const Sponsors = () => {
	return (
		<div className={cn.sponsors} id="s-sponsors">
			<Section>
				<div className={cn.content}>
					<h2 className={cn.heading}>Sponsors</h2>
					<div className={cn.logos}>
						<div>
							<a
								href="https://friends.figma.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={FOF} alt="Friends of Figma" />
							</a>
						</div>
						<div>
							<a
								href="https://www.notion.so/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								<img src={notion} alt="Notion" />
							</a>
						</div>
						<div>
							<a
								href="https://balsamiq.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={balsamiq} alt="balsamiq" />
							</a>
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
};

export { Sponsors };
