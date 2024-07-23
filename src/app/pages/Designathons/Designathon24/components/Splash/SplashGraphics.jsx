import clsx from "clsx";

import bl_star_stripe from "../../assets/graphics/splash/bl_star_stripe.svg";
import br_star_stripe from "../../assets/graphics/splash/br_star_stripe.svg";
import butterfly from "../../assets/graphics/splash/butterfly.svg";
import tl_clouds from "../../assets/graphics/splash/clouds.svg";
import mr_cloud_stars from "../../assets/graphics/splash/mr_cloud_stars.svg";
import GridBackground from "../Backgrounds/GridBackground";
import cn from "./Splash.module.scss";

const SplashGraphics = () => {
    return (
        <>
            <GridBackground positions={[{ top: 0, left: 0 }]} isLight={true} />

            <img
                src={tl_clouds}
                alt=""
                className={clsx(cn.decoration, cn.tl_clouds, "wait flopL")}
            />
            <img
                src={butterfly}
                alt=""
                className={clsx(cn.decoration, cn.butterfly, "wait flopL")}
            />
            <img
                src={bl_star_stripe}
                alt=""
                className={clsx(cn.decoration, cn.bl_star_stripe, "wait flopL")}
            />
            <img
                src={mr_cloud_stars}
                alt=""
                className={clsx(cn.decoration, cn.mr_cloud_stars, "wait flopR")}
            />
            <img
                src={br_star_stripe}
                alt=""
                className={clsx(cn.decoration, cn.br_star_stripe, "wait flopR")}
            />
        </>
    );
};

export default SplashGraphics;
