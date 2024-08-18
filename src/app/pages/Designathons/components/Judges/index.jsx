import { Text } from "app/components";
import { Section } from "app/Symbols";
import clsx from "clsx";

import cn from "./Judges.module.scss";

const Judges = ({ profiles }) => {
	return (
		<Section className={clsx(cn.container, "flatBot")}>
			<Text size="XL">Judges</Text>
			<div className="split3 s-judges">
				{profiles.map((item) => (
					<div
						key={item.name}
						className="flex left top spaceChildrenSmall"
					>
						<img
							src={require(`assets/${item.photo}`)}
							alt={"headshot"}
							style={{
								height: "unset",
								backgroundColor: "var(--silver)",
								width: "100%",
								position: "relative",
							}}
						/>
						{/* <Text className="color gray">{item.pronouns}</Text> */}
						<Text size="L">{item.name}</Text>
						<Text>{item.role}</Text>
						<Text className="color gray">{item.about}</Text>
					</div>
				))}
			</div>
		</Section>
	);
};

export { Judges };
