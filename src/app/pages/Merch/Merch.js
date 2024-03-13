import clsx from "clsx";
import { Helmet } from "react-helmet";

import { Text } from "app/components";
import { Section } from "app/Symbols.js";
import MERCH_LIST from "assets/data/merchList.json";

import { MerchDropListing } from "./components";

import cn from "./Merch.module.scss";

const Merch = () => (
	<>
		<Helmet>
			<title>Merch – Design at UCI</title>
		</Helmet>
		<Section className={clsx(cn.header, "center short")}>
			<Text size="XXL" className={clsx(cn.text, "wait dx bold color white")}>
				Merchandise
			</Text>
			<Text className="wait dx subtle color white">
				Help support Design at UCI — so we can continue to host our free
				programs and events.
			</Text>
		</Section>
		{MERCH_LIST.map((release) => (
			<MerchDropListing key={release.path} {...release} />
		))}
	</>
);

export default Merch;
