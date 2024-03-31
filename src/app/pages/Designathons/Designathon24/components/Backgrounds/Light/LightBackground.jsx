import cn from "./Light.module.scss";

import light_graph from "../../../assets/graphics/background/light_graph.svg";

const LightBackground = () => {
	return <img src={light_graph} alt="" className={cn.graph} />;
};

export default LightBackground;
