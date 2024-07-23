import { memo } from "react";
import { Text } from "app/components";

import cn from "./Results.module.scss";

const PIXEL_RANGE = 255;

const TIPS = [
    "To get a lighter color, increase the value of all three colors",
    "To get a darker color, decrease the value of all three colors",
    "Red and blue make pink",
    "A bit of red and more of blue make purple",
    "Red and green make yellow",
    "A lot of red and bit of green make brown",
    "Black is the absence of all three colors",
    "Gray is just a shade of black and white",
    "To get a pastel color, make sure all three colors values are high",
    "To get a neon color, make sure your accent color/s is high but low in the others",
    "RGB color mixing works opposite of traditional print",
    "Hex codes are split into 3 colors: R, G and B",
];

const convertPixelValueDiffToReadablePercent = (pixelValue) =>
    (Math.abs(pixelValue / PIXEL_RANGE) * 100).toFixed(2) + "%";

const getColorOffsetLabel = (pixelValue, color) => {
    if (pixelValue === 0) return "";
    return `${convertPixelValueDiffToReadablePercent(pixelValue)} ${
        pixelValue < 0 ? "less" : "more"
    } ${color}`;
};

export const Results = memo(function Results({ report }) {
    const actualColor = "#" + report.actual;
    const guessColor = "#" + report.guess;

    return (
        <div className={cn.container}>
            <Text size="L" className="color blue">
                You were {report.similarityPercentage.toFixed(2)}% of the way
                there!
            </Text>
            <div className={cn.split}>
                <div className={cn.left}>
                    <div className={cn.description}>
                        <Text size="S" className="color gray">
                            ANSWER
                        </Text>
                        <br />
                        <p className={cn.color}>{actualColor}</p>
                    </div>
                    <div
                        className={cn.box}
                        style={{ backgroundColor: actualColor }}
                    ></div>
                </div>
                <div className={cn.right}>
                    <div
                        className={cn.box}
                        style={{ backgroundColor: guessColor }}
                    ></div>
                    <div className={cn.description}>
                        <Text size="S" className="color gray">
                            GUESS
                        </Text>
                        <br />
                        <p className={cn.color}>{guessColor}</p>
                    </div>
                </div>
            </div>
            <div className={cn.analysis}>
                <div>
                    <span>You needed:</span>
                    <br />
                    {getColorOffsetLabel(report.percentageDifference[0], "red")}
                    <br />
                    {getColorOffsetLabel(
                        report.percentageDifference[1],
                        "green",
                    )}
                    <br />
                    {getColorOffsetLabel(
                        report.percentageDifference[2],
                        "blue",
                    )}

                    {report.similarityPercentage === 100 &&
                        "Nothing... somehow you got it 👀"}
                </div>
                <div className={cn.tips}>
                    <span>tip:</span>
                    {TIPS[Math.floor(Math.random() * TIPS.length)]}
                </div>
            </div>
        </div>
    );
});
