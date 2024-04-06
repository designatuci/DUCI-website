import cn from "./FAQ.module.scss";
import clsx from "clsx";

import { useCallback, useState } from "react";

import down_carat from "../../assets/graphics/faq/down_carat.svg";
import star_lines from "../../assets/graphics/faq/star_lines.svg";
import GridBackground from "../Backgrounds/GridBackground";

const FAQ = () => {
	return (
		<div id="s-faq">
			<div className={cn.container}>
				<GridBackground
					positions={[{ top: 0, left: 0 }]}
					isLight={true}
				/>
				<div className={cn.content}>
					<img
						src={star_lines}
						alt=""
						className={clsx(cn.star_lines, "wait flopR")}
					/>

					<h2 className={cn.heading}>FAQ</h2>
					{/* <div className="spaceChildren">
					<Text style={{ lineHeight: "1.4em" }}>
						Join the live conversation on the{" "}
						<a
							style={{ textDecoration: "underline" }}
							href="https://discord.gg/jumJqhBy4Y"
							target="_blank"
							rel="noopener noreferrer"
						>
							You Belong Here 2023 Discord
						</a>{" "}
						for more help!
					</Text>
				</div> */}
					<div className={cn.qa_container}>
						{[
							{
								q: "Why should I join?",
								a: "Creating an aesthetically pleasing, functional product is not only what a designer does; it is to listen to what our world needs, empathize people’s gain and pain points, and produce a solution that specifically targets what our world is lacking. We hope that this event can be a platform where you can practice your design thinking—a process of ideation, research, analysis, developing, and testing—to provide a better means to our world.",
							},
							{
								q: "Who can attend?",
								a: (
									<p>
										Any undergraduate student within the
										United States (with an associated
										institutional email) is able to{" "}
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://forms.gle/MQ1zaWpUJi3mWSQy5"
											style={{
												textDecoration: "underline",
											}}
										>
											sign up
										</a>{" "}
										and attend. If you do not qualify, you
										will not be allowed to participate in
										the event.
									</p>
								),
							},
							{
								q: "How do I sign up?",
								a: (
									<p>
										Apply through our{" "}
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://forms.gle/MQ1zaWpUJi3mWSQy5"
											style={{
												textDecoration: "underline",
											}}
										>
											Participant Sign-up Form.
										</a>
									</p>
								),
							},
							{
								q: "I don’t have prior knowledge in design. Can I still participate?",
								a: "Of course! Design is all around us. We will provide opportunities and resources for beginners to get started, such as workshops, mentor office hours, and more.",
							},
							{
								q: "How much does it cost?",
								a: "You Belong Here requires no cost to participate. All you need is a working device with Zoom, Discord, and an open mind. ",
							},
							{
								q: "When is the registration deadline?",
								a: (
									<p>
										Our{" "}
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://forms.gle/MQ1zaWpUJi3mWSQy5"
											style={{
												textDecoration: "underline",
											}}
										>
											participant sign-up form
										</a>{" "}
										has been extended until February 19th at
										11:59pm (PST)
									</p>
								),
							},
							{
								q: "How do I prepare?",
								a: (
									<p>
										During the event, we will be hosting
										workshops for anyone new to design
										thinking or the design process. We
										highly encourage getting the hang of
										Figma, Sketch, Adobe XD, or the
										prototyping tool of your choice. You are
										also free to look through our Design at
										UCI{" "}
										<a
											href="https://designatuci.com/resources"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "underline",
											}}
										>
											Resources
										</a>{" "}
										page for extra information. Want to go
										the extra mile? Show your excitement by
										turning on your camera and adding our{" "}
										<a
											href="https://drive.google.com/drive/folders/1fe5vj6NJAvQFFcxWp9OFQCkc6qI7Avcn?usp=sharing"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "underline",
											}}
										>
											You Belong Here Zoom backgrounds.
										</a>
									</p>
								),
							},
							{
								q: "How do teams work?",
								a: (
									<p>
										You have the option to (1) go solo, or
										(2) form a team of up to 4 people total.
										You may list your team members in the
										sign-up form, but it’s okay if plans
										change! Take advantage of our
										#find-a-team{" "}
										<a
											style={{
												textDecoration: "underline",
											}}
											href="https://discord.gg/jumJqhBy4Y"
											target="_blank"
											rel="noopener noreferrer"
										>
											Discord channel
										</a>{" "}
										to meet potential team members. We will
										consider your final team members to be
										the ones indicated when submitting your
										project.
									</p>
								),
							},
							{
								q: "What if I don’t have a team?",
								a: (
									<p>
										Our #find-a-team Discord channel is the
										perfect place for anyone looking for a
										team at our Designathon. If you haven’t
										already, join our You Belong Here{" "}
										<a
											style={{
												textDecoration: "underline",
											}}
											href="https://discord.gg/jumJqhBy4Y"
											target="_blank"
											rel="noopener noreferrer"
										>
											Discord channel
										</a>{" "}
										. Solo participants are also allowed.
									</p>
								),
							},
							{
								q: "Where do I submit my project?",
								a: (
									<p>
										You will submit your final, working
										prototype to the{" "}
										<a
											target="_blank"
											rel="noopener noreferrer"
											href="https://forms.gle/Tf1FySVor1RC5rHq8"
											style={{
												textDecoration: "underline",
											}}
										>
											Submission Form
										</a>{" "}
										(opens during event). Only one person on
										your team should submit a form, which
										will be on behalf of all contributors.
									</p>
								),
							},
						].map((item) => {
							return (
								<Toggle
									question={item.q}
									answer={item.a}
									key={item.q}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

const AnswerTag = ({ answer }) => {
	return <div className={cn.answer_tag}>{answer}</div>;
};

const Toggle = ({ question, answer }) => {
	const [open, setOpen] = useState(false);

	const toggleExpand = useCallback(() => {
		setOpen((p) => !p);
	}, []);

	return (
		<div className={cn.qa_item} onClick={toggleExpand}>
			<div className={cn.question}>
				<img
					src={down_carat}
					alt="down carat icon for accordion menu item"
					style={{
						transform: open ? "rotate(180deg)" : "rotate(0deg)",
					}}
					className={cn.down_carat}
				/>
				{question}
			</div>

			{open ? <AnswerTag answer={answer} /> : null}
		</div>
	);
};

export { FAQ };
