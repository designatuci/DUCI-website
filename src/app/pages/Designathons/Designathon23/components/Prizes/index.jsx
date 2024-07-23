import { Section } from "app/Symbols";

import cn from "./Prizes.module.scss";

const Prizes = ({ list }) => {
    return (
        <Section>
            <h2 className={cn.title}>Prizes</h2>
            <div className={cn.container}>
                {list.map((item) => (
                    <div className={cn.item} key={item.symbol}>
                        <h3>{item.label}</h3>
                        <div className="flex left spaceChildrenSmall">
                            {item.prizes.map((prize, index) => (
                                <p key={index}>{prize}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export { Prizes };
