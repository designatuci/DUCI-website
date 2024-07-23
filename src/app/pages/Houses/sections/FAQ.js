import { useCallback, useState } from "react";
import { Text } from "app/components";
import FAQ_QUESTIONS from "app/pages/Houses/assets/FAQ.json";
import { Icon, Section } from "app/Symbols";
import clsx from "clsx";

import cn from "./FAQ.module.scss";

function FAQ() {
    return (
        <Section className={cn.faq} id="FAQ">
            <Text size="XL">FAQ</Text>
            <div className="split2 tc13">
                <div className="spaceChildren">
                    <Text>
                        ask any questions in our{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/discord"
                            style={{ textDecoration: "underline" }}
                        >
                            Discord server
                        </a>
                    </Text>
                </div>
                <div className="spaceChildrenSmall">
                    {FAQ_QUESTIONS.map((item, i) => (
                        <Toggle
                            key={i}
                            closed={
                                <div
                                    className={clsx(
                                        "faqitem gray card S flex left spaceChildrenSmall",
                                    )}
                                >
                                    <div className="flex row top">
                                        <Text className="bold">{item.q}</Text>
                                    </div>
                                </div>
                            }
                            opened={
                                <div className="faqitem open card S flex left spaceChildrenSmall">
                                    <div className={cn.answer}>
                                        <Text className="bold">{item.q}</Text>
                                        <Text className="color gray">
                                            {item.a}
                                        </Text>
                                    </div>
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

const Toggle = ({ opened, closed }) => {
    const [open, setOpen] = useState(false);

    const toggleExpand = useCallback(() => {
        setOpen((p) => !p);
    }, []);

    return (
        <div
            className={clsx(cn.question, open && cn.opened)}
            onClick={toggleExpand}
        >
            <Icon
                src="d22-arrow.svg"
                w="18"
                h="18"
                style={{
                    marginTop: 16,
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
            />
            {open ? opened : closed}
        </div>
    );
};

export default FAQ;
