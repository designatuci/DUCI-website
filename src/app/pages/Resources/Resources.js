import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Text } from "app/components";
import { Section, Icon, Space } from "app/Symbols.js";
import { RESOURCES } from "assets/data/resources.ts";
import { ReactComponent as ResourcesTl } from "./resources-tl.svg";
import { ReactComponent as ResourcesBr } from "./resources-br.svg";

import cn from "./Resources.module.scss";

const TabComponent = ({ newTab, link, children, ...props }) =>
	newTab ? (
		<a href={link} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</a>
	) : (
		<Link to={link} {...props}>
			{children}
		</Link>
	);

const Resources = () => (
	<>
		<Helmet>
			<title>Resources – Design at UCI</title>
		</Helmet>

		<Section
			className={`center short`}
			style={{
				paddingTop: "32px",
				alignItems: "center",
				height: 500,
				position: "relative",
				marginLeft: "auto",
				marginRight: "auto",
				maxWidth: 1728,
			}}
		>
			<Text size="XXL" className="wait show scale bold ">
				Resources
			</Text>
			<Text className="wait show subtle color gray">
				Your One-Stop Hub for Design Tools & Tips!
			</Text>

			<ResourcesTl
				className="wait show flopL"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: -10,
					pointerEvents: "none",
				}}
			/>

			<ResourcesBr
				className={`wait show flopR ${cn.resourcesBr}`}
				style={{
					position: "absolute",
					bottom: 0,
					right: 0,
					zIndex: -10,
					pointerEvents: "none",
				}}
			/>
		</Section>

		<Section className="page short bareTop">
			<Space h="0" />
			<div className="split2" style={{ gap: "32px" }}>
				{RESOURCES.map(({ newTab, ...card }) => (
					<TabComponent
						key={card.link}
						newTab={newTab}
						link={card.link}
						style={{
							background: card.background,
						}}
						className="wait dx show card flex left fill sky spaceChildrenSmall"
					>
						<Icon
							className={cn.icon}
							w="192"
							h="96"
							src={card.icon}
						/>
						<Text size="L" className={`bold color ${card.main}`}>
							{card.title}
						</Text>
						<Text className={`color ${card.accent}`}>
							{card.desc}
						</Text>
					</TabComponent>
				))}
			</div>
		</Section>
	</>
);

export default Resources;
