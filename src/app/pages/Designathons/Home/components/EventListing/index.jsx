import { Text } from "app/components";
import { Photo, Section, Space } from "app/Symbols";
import { Link } from "react-router-dom";
import { ProjectShowcase } from "./components/ProjectShowcase";

const EventListing = ({
	title,
	theme,
	link,
	image,
	showcase,
	participants,
}) => {
	return (
		<Section
			className="short"
			style={{
				background:
					"linear-gradient(0deg,var(--white) 50%,var(--silver) 150%",
			}}
		>
			<div className="split2">
				<div className="flex left top spaceChildrenSmall">
					<Text size="XL" className="bold">
						{title}
					</Text>
					<Space h="16" />
					<Text
						size="S"
						className="color blue"
						style={{ marginBottom: "8px" }}
					>
						Theme
					</Text>
					<Text className="color gray">{theme}</Text>
					<Text
						size="S"
						className="color blue"
						style={{ marginBottom: "8px" }}
					>
						Participants
					</Text>
					<Text className="color gray">{participants}</Text>
				</div>
				<div
					className="card L fill white shadow"
					style={{ minHeight: "256px", padding: "16px" }}
				>
					<Link
						className="relative fill white button shadow"
						to={link}
					>
						<Text icon="right" color="blue">
							Event Page
						</Text>
					</Link>
					<Photo className="background" src={image} />
				</div>
			</div>
			<Text size="L">Awarded Entries</Text>
			<div className="split2">
				{showcase.map((project) => (
					<ProjectShowcase
						{...project}
						key={project.title + project.name}
						style={project.style}
					/>
				))}
			</div>
		</Section>
	);
};

export { EventListing };
