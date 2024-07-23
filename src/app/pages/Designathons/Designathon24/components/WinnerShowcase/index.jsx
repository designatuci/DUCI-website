import { Text } from "app/components";
import { Section } from "app/Symbols";
import clsx from "clsx";

import cn from "./WinnerShowcase.module.scss";

const WinnerShowcase = ({ winners }) => {
    if (!winners || winners.length === 0) {
        return null;
    }

    return (
        <div className={cn.container}>
            <Section className="center">
                <div className="flex spaceChildren">
                    <Text size="XXL" className={cn.heading}>
                        Congratulation to the winners!
                    </Text>

                    {winners.map((item) => (
                        <div
                            key={item.team}
                            className={clsx(cn.winnerContainer)}
                        >
                            <div className={cn.winnerInfo}>
                                <Text className={cn.winnerPlace}>
                                    {item.place}
                                </Text>
                                <Text className={cn.winnerTeam}>
                                    Team {item.team}
                                </Text>
                                <div className={cn.winnerTeamMembers}>
                                    {item.members.map((item, i) => {
                                        return (
                                            <Text
                                                key={item.name + item.instagram}
                                            >
                                                {item.name}
                                                <Text> - {item.school}</Text>
                                                <Text>
                                                    {" "}
                                                    - @instagram{" "}
                                                    {item.instagram}
                                                </Text>
                                            </Text>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={cn.winnerProject}>
                                <Text className={cn.winnerProjectName}>
                                    {item.project}
                                </Text>
                                <Text className={cn.winnerProjectDescription}>
                                    {item.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export { WinnerShowcase };
