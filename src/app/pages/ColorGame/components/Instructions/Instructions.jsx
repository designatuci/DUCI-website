import { memo } from "react";
import { Text } from "app/components";
import clsx from "clsx";

import COLOR_BREAKDOWN from "./breakdown.png";
import cn from "./Instructions.module.scss";

export const Instructions = memo(function Instructions() {
    return (
        <div className={clsx(cn.container, "slim")}>
            <div className={cn.header}>
                <Text color="blue" className={clsx(cn.title, "bold")} size="L">
                    How to play
                </Text>
            </div>
            <p>
                Hex colors are made up of 6 hexadecimal characters (hexadecimals
                are numbers that go from 0-9, A, B, C, D, E, F, rather than just
                0-9 in our normal decimal system) and are split into 3 sections:
                Red, Green and Blue - commonly known as RGB.
            </p>
            <img
                src={COLOR_BREAKDOWN}
                alt="color hex code with individual groups color coded with highlights"
            />
            <p>
                Each hex color is essentially a blend of these three primary
                colors. Compared to traditional print (CYMK), adding more of
                each color makes the overall color brighter so #FFFFFF would be
                white and #000000 would be black.
            </p>
        </div>
    );
});
