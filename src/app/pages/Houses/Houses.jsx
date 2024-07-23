import { useCallback, useRef } from "react";
import Helmet from "react-helmet";

import FAQ from "./sections/FAQ";
import Intro from "./sections/Intro";
import Join from "./sections/Join";
import Landing from "./sections/Landing";
import Perks from "./sections/Perks";
import Standings from "./sections/Standings";

const Houses = () => {
    const joinSectionRef = useRef(null);

    const scrollToJoin = useCallback(() => {
        joinSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <main>
            <Helmet>
                <title>Events – Design at UCI</title>
            </Helmet>
            <Landing scrollToJoin={scrollToJoin} />
            <Intro />
            <Standings />
            <Perks />
            <FAQ />
            <Join ref={joinSectionRef} />
        </main>
    );
};

export default Houses;
