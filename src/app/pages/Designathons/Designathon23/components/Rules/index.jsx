import { Text } from "app/components";
import { Section } from "app/Symbols";

import cn from "./Rules.module.scss";

const Rules = ({ rules }) => {
    return (
        <Section id="s-rules" className={cn.container}>
            <h2>Rules</h2>
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
                            color: "var(--deepBlue)",
                            fontWeight: "bold",
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
