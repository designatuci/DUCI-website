import { memo, useEffect, useRef } from "react";
import anime from "animejs";

import { ReactComponent } from "./logo.svg";
import cn from "./Splash.module.scss";

const SplashLogo = memo(({ style }) => {
    const logoRef = useRef(null);
    useEffect(() => {
        anime({
            targets: "path.word",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 2000,
            delay: function (el, i) {
                return i * 300;
            },
        });
    }, []);

    return <ReactComponent ref={logoRef} className={cn.logo} style={style} />;
});

export default SplashLogo;
