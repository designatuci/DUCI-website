import { Text } from "app/components";
import { Section, Space } from "app/Symbols";
import clsx from "clsx";

import MerchItem from "../MerchItem";
import cn from "./MerchDropListing.module.scss";

const MerchDropListing = ({
    name,
    inStock,
    buyLink,
    description,
    items,
    path,
}) => (
    <Section className={clsx(cn.container, "short")}>
        <div className="flex left spaceChildren">
            <Text size="XL">{name}</Text>
            <div className="flex left spaceChildrenSmall">
                {inStock ? (
                    <>
                        <Text className="color yellow">Limited Stock</Text>
                        <a
                            className={clsx(cn.link, "color blue")}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={buyLink}
                        >
                            Buy Here
                        </a>
                    </>
                ) : (
                    <Text className="color red">Sold out</Text>
                )}

                <Text className="color gray">{description}</Text>
            </div>
        </div>
        <Space h="0" />
        <div className={clsx(cn.split4, "split4")}>
            {items.map((item) => (
                <MerchItem key={item.name} path={path} {...item} />
            ))}
        </div>
    </Section>
);

export default MerchDropListing;
