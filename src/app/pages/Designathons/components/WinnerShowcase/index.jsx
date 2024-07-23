import { Text } from "app/components";
import { Section } from "app/Symbols";

const WinnerShowcase = ({ winners }) => {
    if (!winners || winners.length === 0) return null;
    return (
        <Section className="center">
            <div className="flex spaceChildren">
                <Text size="XL" className="color blue">
                    Congratulation to the winners!
                </Text>
                {winners.map((item) => (
                    <div
                        key={item.team}
                        className="flex left spaceChildren textAlignLeft"
                        style={{
                            borderTop: "2px dotted var(--pink)",
                            marginBottom: "64px",
                        }}
                    >
                        <Text
                            size="L"
                            className="bold italic color pink"
                            style={{ marginTop: "16px" }}
                        >
                            {item.place}
                        </Text>
                        <div className="split12" style={{ width: "100%" }}>
                            <div className="flex top left">
                                <Text>Team {item.team}</Text>
                            </div>
                            <div className="flex top left spaceChildrenSmall">
                                {item.members.map((item, i) => {
                                    return (
                                        <Text key={item.name + item.school}>
                                            {item.name}
                                            <Text className="color gray">
                                                {" "}
                                                - {item.school}
                                            </Text>
                                        </Text>
                                    );
                                })}
                            </div>
                        </div>
                        <Text size="XL" className="bold">
                            {item.project}
                        </Text>
                        <Text className="color gray">{item.description}</Text>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export { WinnerShowcase };
