import { Text } from "app/components";
import { Section } from "app/Symbols";
import clsx from "clsx";

import cn from "./Intro.module.scss";

function Intro() {
	return (
		<Section className={cn.intro} wrapperClass={cn.wrapper} id="about">
			<Text color="white" size="XXL" className={clsx(cn.title, "wait")}>
				Network with other designers and compete for a prize
			</Text>
			<Text
				color="gray"
				size="L"
				className={clsx(cn.description, "wait")}
			>
				Connect with a smaller group of designers, cultivate your
				industry skills, and compete against other houses by attending
				our general meetings, industry events, workshop events, and
				socials. The house with the most points at the end of the
				quarter will receive a prize!
			</Text>
		</Section>
	);
}

export default Intro;
