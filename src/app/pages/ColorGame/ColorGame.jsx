import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Text } from "app/components";
import clsx from "clsx";
import Auto from "react-animate-height";

import cn from "./ColorGame.module.scss";
import {
    DIGITS,
    HexColorInput,
} from "./components/HexColorInput/HexColorInput";
import { Instructions } from "./components/Instructions/Instructions";
import { Leaderboard } from "./components/Leaderboard/Leaderboard";
import { Results } from "./components/Results/Results";

const generateRandomHexString = () => {
    const randomHex = [];

    for (let i = 0; i < 6; i++) {
        randomHex.push(DIGITS[Math.floor(Math.random() * 16)]);
    }
    return randomHex;
};

const PADDING = 40;

export const ColorGame = memo(function ColorGame() {
    const [color, setColor] = useState(generateRandomHexString);
    const [report, setReport] = useState();
    const [height, setHeight] = useState("auto");
    const contentRef = useRef(null);

    const resetColor = useCallback(
        () => setColor(generateRandomHexString()),
        [],
    );

    useEffect(() => {
        const element = contentRef.current;

        const resizeObserver = new ResizeObserver(() => {
            setHeight(element.clientHeight + PADDING);
        });

        resizeObserver.observe(element);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className={cn.page}>
            <Text
                size="XL"
                className={clsx(cn.centered, "wait dx bold color blue")}
            >
                Guess the color
            </Text>

            <Auto
                duration={500}
                height={height}
                className={clsx(cn.container, "slim")}
                contentRef={contentRef}
            >
                <div className={clsx(cn.split)}>
                    <div
                        className={cn.color}
                        style={{ backgroundColor: "#" + color.join("") }}
                    ></div>
                    <HexColorInput
                        color={color}
                        setReport={setReport}
                        resetColor={resetColor}
                    />
                </div>
                {report && <Results report={report} />}
            </Auto>
            <Leaderboard report={report} />
            <Instructions />
        </div>
    );
});
