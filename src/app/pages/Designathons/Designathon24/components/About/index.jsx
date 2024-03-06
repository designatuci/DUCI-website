import cn from "./About.module.scss";

import { useRef, useState, useEffect } from "react";
import airplane from "../../assets/graphics/about/airplane.svg";
import paperclip from "../../assets/graphics/about/paperclip.svg";
import tr_gradient from "../../assets/graphics/about/tr_gradient.svg";
import bl_gradient from "../../assets/graphics/about/bl_gradient.svg";
import tr_stars from "../../assets/graphics/about/tr_stars.svg";
import bl_stars from "../../assets/graphics/about/bl_stars.svg";

const LINE_BREAKPOINTS = {
	XL: 48,
	LG: 40,
	SM: 32,
};

const About = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [lines, setLines] = useState(0);
	const [notecardLineHeight, setNotecardLineHeight] = useState(0);
	const [notecardLineTop, setNotecardLineTop] = useState(0);

	const textRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			if (textRef.current) {
				const height = textRef.current.clientHeight;
				setHeight(height);
			}

			if (window) {
				const width = window.innerWidth;
				setWidth(width);
			}

			const numLines = Math.floor(height / notecardLineHeight) - 1;
			setLines(numLines > 0 ? numLines : 1);

			/* Distance from top (pink) border of card */
			setNotecardLineHeight(
				width >= 1280
					? LINE_BREAKPOINTS.XL
					: width >= 640
						? LINE_BREAKPOINTS.LG
						: LINE_BREAKPOINTS.SM,
			);

			/* Distance from top (pink) border of card */
			setNotecardLineTop(width >= 640 ? 128 : 96);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [height, notecardLineHeight, width]);

	return (
		<div className={cn.container} id="s-about">
			<h2 className={cn.aboutHeading}>About</h2>
			<div className={cn.noteCard}>
				<div className={cn.noteCardHeader} />

				<div className={cn.text} ref={textRef}>
					<p>
						Design-a-thon is a 3 day long hybrid event where you or a team
						design a product focused on the theme: community and inclusivity. It
						takes place on February 24, starting at 5:30 pm and ends February
						26, 8:00 pm PST.
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
						improving your confidence and creativity as a human-centric
						designer.
					</p>
				</div>

				<div className={cn.lines}>
					{/* The number of lines, determined by line height and height of total text */}
					{[...Array(lines).keys()].map((index) => (
						<div
							className={cn.line}
							style={{
								top: `calc(${notecardLineTop}px + ${index * notecardLineHeight}px)`,
							}}
							key={index}
						/>
					))}
				</div>
			</div>

			<img
				src={airplane}
				alt="airplane"
				className={`${cn.airplane} wait show flopR`}
			/>
			<img src={paperclip} alt="paperclip" className={cn.paperclip} />
			<img src={tr_gradient} alt="tr_gradient" className={cn.tr_gradient} />
			<img src={bl_gradient} alt="bl_gradient" className={cn.bl_gradient} />
			<img src={tr_stars} alt="tr_stars" className={cn.tr_stars} />
			<img src={bl_stars} alt="bl_stars" className={cn.bl_stars} />
		</div>
	);
};

export { About };
