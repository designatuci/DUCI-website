import { Text } from "app/components";
import { Section } from "app/Symbols";

const Rules = ({ rules }) => {
	return (
		<Section id="s-rules" className="textAlignLeft">
			<Text size="XL">Rules</Text>
			{rules.map((rule, i) => (
				<div
					key={rule}
					className="flex row left top spaceChildrenSmall"
				>
					<Text
						size="L"
						style={{
							minWidth: "48px",
							display: "block",
							color: "var(--green)",
						}}
					>
						{i + 1}
					</Text>
					<Text>{rule}</Text>
				</div>
			))}
		</Section>
	);
};

export { Rules };
