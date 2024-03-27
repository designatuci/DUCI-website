import cn from "./Polaroid.module.scss";

import tape_black from "../../assets/graphics/speakers/tape_black.svg";
import tape_white from "../../assets/graphics/speakers/tape_white.svg";

const Polaroid = ({ photo, name, position, odd }) => {
	return (
		<div className={cn.polaroid}>
			<img
				src={odd ? tape_white : tape_black}
				alt="tape"
				className={cn.tape}
			/>

			<img
				src={require(`../../assets/${photo}`)}
				alt={`polaroid of ${name}`}
				className={cn.polaroidImage}
			/>

			<div className={cn.polaroidDetails}>
				<h6 className={cn.polaroidName}>{name}</h6>
				<p className={cn.polaroidPosition}>{position}</p>
			</div>
		</div>
	);
};

export default Polaroid;
