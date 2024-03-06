import cn from "./About.module.scss";
import { useRef, useState, useEffect } from "react";

const About = () => {
	const [height, setHeight] = useState(0);
	const textRef = useRef(null);

	const handleResize = () => {
		if (textRef.current) {
			const height = textRef.current.clientHeight;
			setHeight(height);
		}
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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
					{/* The number of lines, determined by line height (48) and height of total text */}
					{[
						...Array(
							Math.floor(height / 48) - 1 > 0 ? Math.floor(height / 48) - 1 : 1,
						).keys(),
					].map((index) => (
						<div
							className={cn.line}
							style={{ top: `calc(128px + ${index * 48}px)` }}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export { About };
