import cn from "./About.module.scss";
import clsx from "clsx";

import airplane from "../../assets/graphics/about/airplane.svg";
import paperclip from "../../assets/graphics/about/paperclip.svg";
import tr_gradient from "../../assets/graphics/about/tr_gradient.svg";
import bl_gradient from "../../assets/graphics/about/bl_gradient.svg";
import tr_stars from "../../assets/graphics/about/tr_stars.svg";
import bl_stars from "../../assets/graphics/about/bl_stars.svg";
import Notecard from "../Notecard/Notecard";

const About = () => {
	return (
		<div className={cn.container} id="s-about">
			<h2 className={cn.aboutHeading}>About</h2>
			<Notecard>
				<p>
					Design-a-thon is a 3 day long hybrid event where you or a team design
					a product focused on the theme: community and inclusivity. It takes
					place on February 24, starting at 5:30 pm and ends February 26, 8:00
					pm PST.
				</p>
				<p>
					Design at UCI is the premier student-run organization at UCI for
					anything graphic design, UI/UX design, product design, and more.
					Started in 2016, we foster a special community for all digital
					designers to connect, learn, and innovate.
				</p>
				<p>
					Design at UCI’s designathon is the largest collegiate designathon in
					Orange County. Each year, we bring together hundreds of student
					designers nationwide to define, develop, and pitch a product built
					from scratch. We hope that this experience can help you acquire and
					grow both your soft and hard skills in empathizing with your users,
					defining a set of goals and needs, developing your product, and
					improving your confidence and creativity as a human-centric designer.
				</p>
			</Notecard>

			<img
				src={airplane}
				alt="airplane"
				className={clsx(cn.airplane, "wait flopR")}
			/>
			<img src={paperclip} alt="paperclip" className={cn.paperclip} />
			<img
				src={tr_gradient}
				alt="tr_gradient"
				className={clsx(cn.tr, cn.gradient)}
			/>
			<img src={bl_gradient} alt="bl_gradient" className={cn.bl} />
			<img src={tr_stars} alt="tr_stars" className={cn.tr} />
			<img src={bl_stars} alt="bl_stars" className={cn.bl} />
		</div>
	);
};

export { About };