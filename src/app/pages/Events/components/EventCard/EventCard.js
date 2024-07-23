import { Text } from "app/components";
import { PageIcon } from "app/Symbols";
import clsx from "clsx";

import formatRelativeDate from "../../controllers/formateDate";
import cn from "./EventCard.module.scss";

const EventCard = ({ ...event }) => (
    <div
        className={clsx(
            cn.container,
            "fill white card flex left spaceChildrenSmall",
        )}
    >
        <Text color="gray">{event.type}</Text>
        <Text size="L">{event.title}</Text>
        <Text color="gray">{event?.desc}</Text>

        {event?.links
            ?.filter(
                ({ label }) =>
                    label !== "Zoom Link" && label !== "Discord Link",
            )
            .map(({ label, link }) => (
                <a
                    key={link}
                    target="noreferer"
                    className={
                        "button S fill " +
                        (label === "Recording" ? "blue" : "gray")
                    }
                    style={{
                        color: label === "Recording" ? "white" : "black",
                        paddingTop: "8px",
                    }}
                    href={link}
                >
                    <Text>
                        {label}
                        <PageIcon
                            color={
                                label === "Recording"
                                    ? "var(--sky)"
                                    : "var(--black)"
                            }
                            style={{
                                width: "24px",
                                marginLeft: "4px",
                            }}
                        />
                    </Text>
                </a>
            ))}
        <Text className="color gray" style={{ marginTop: "auto" }}>
            {formatRelativeDate(event.time)}
        </Text>
    </div>
);

export default EventCard;
