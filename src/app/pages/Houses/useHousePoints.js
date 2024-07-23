import { useEffect, useState } from "react";

const FEED_URL = "https://docs.google.com/spreadsheets/d/";
const SPREADSHEET_KEY = "15zDinoV1T_gBtqvEvY19KRHwzQoiWZ3A92c895IsFsg";
const MODE = "pub";
const SHEET_GID = "1705286477";

const EMPTY_HOUSE_POINTS = {};

function useHousePoints() {
    const [housePoints, setHousePoints] = useState(EMPTY_HOUSE_POINTS);

    useEffect(() => {
        const dataURL = new URL(`${FEED_URL}${SPREADSHEET_KEY}/${MODE}`);
        dataURL.searchParams.set("gid", SHEET_GID);
        dataURL.searchParams.set("single", "true");
        dataURL.searchParams.set("output", "tsv");

        const getHousePoints = async () => {
            try {
                const response = await fetch(dataURL);
                const text = await response.text();

                const data = {};
                // Parse each tab-separated line
                for (const line of text.split("\n")) {
                    const [key, value] = line.split("\t");
                    data[key] = value;
                }

                setHousePoints(data);
            } catch (err) {
                console.error(
                    "Error occurred while fetching sheets data:",
                    err,
                );
            }
        };

        getHousePoints();
    }, []);

    return housePoints;
}

export default useHousePoints;
