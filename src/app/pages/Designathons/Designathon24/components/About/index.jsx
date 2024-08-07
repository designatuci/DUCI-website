import cn from "./About.module.scss";
import clsx from "clsx";

import Notecard from "../Notecard/Notecard";

import airplane from "../../assets/graphics/about/airplane.svg";
import paperclip from "../../assets/graphics/about/paperclip.svg";
import tr_gradient from "../../assets/graphics/about/tr_gradient.svg";
import bl_blob_stars from "../../assets/graphics/about/bl_blob_stars.svg";
import tr_stars from "../../assets/graphics/about/tr_stars.svg";

import GridBackground from "../Backgrounds/GridBackground";

const About = () => {
	return (
		<div className={cn.container} id="s-about">
			<GridBackground positions={[{ top: 0, left: 0 }]} isLight={true} />

			<img
				src={tr_gradient}
				alt="tr_gradient"
				className={clsx(cn.tr, cn.gradient)}
			/>
			<img src={bl_blob_stars} alt="" className={cn.bl} />
			<img src={tr_stars} alt="" className={cn.tr} />

			<div className={cn.content}>
				<h2 className={cn.heading}>About</h2>

				<Notecard lineAdjustment={2}>
					<div style={{ maxWidth: "95%" }}>
						<p>
							Design-a-thon is a 3 day long hybrid event where you
							or a team design a product focused on the theme:
							True to You! It takes place on May 17th, and ends
							May 19th.
						</p>
						<p>
							Design at UCI is the premier student-run
							organization at UCI for anything graphic design,
							UI/UX design, product design, and more. Started in
							2016, we foster a special community for all digital
							designers to connect, learn, and innovate.
						</p>
						<p>
							Design at UCI’s designathon is the largest
							collegiate designathon in Orange County. Each year,
							we bring together hundreds of student designers
							nationwide to define, develop, and pitch a product
							built from scratch. We hope that this experience can
							help you acquire and grow both your soft and hard
							skills in empathizing with your users, defining a
							set of goals and needs, developing your product, and
							improving your confidence and creativity as a
							human-centric designer.
						</p>
					</div>
				</Notecard>
				<img src={paperclip} alt="" className={cn.paperclip} />
			</div>

			<img
				src={airplane}
				alt=""
				className={clsx(cn.airplane, "wait flopR")}
			/>
		</div>
	);
};

export { About };
