import { useEffect, useState } from "react";
import cn from "./SectionNavigation.module.scss";

const SectionNavigation = () => {
	const [currentTime, setCurrentTime] = useState(() => new Date().getTime());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date().getTime());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const scrollToSection = (id) => {
		window.scrollTo({
			behavior: "smooth",
			top: document.getElementById(id).offsetTop - 80,
		});
	};

	return (
		<div className={cn.container}>
			<div className={cn.navButtons}>
				{[
					{ label: "About", id: "s-about" },
					{ label: "Judges & Speakers", id: "s-people" },
					{ label: "Rules", id: "s-rules" },
					{ label: "Prizes", id: "s-prizes" },
					{ label: "Schedule", id: "s-schedule" },
					{ label: "FAQ", id: "s-faq" },
					{ label: "Sponsors", id: "s-sponsors" },
				].map((item) => (
					<a
						className={cn.item}
						href={`#${item.label.toLowerCase()}`}
						onClick={() => {
							scrollToSection(item.id);
						}}
					>
						<p>{item.label}</p>
					</a>
				))}
			</div>

			<div className={cn.linkButtons}>
				{currentTime >
					new Date(
						"Feb 24 2023 19:00:00 GMT-0800 (Pacific Standard Time)",
					).getTime() && (
					<a
						className={cn.item}
						style={{
							backgroundColor: "var(--des24-pink)",
							color: "var(--des24-cream)",
						}}
						href=" https://drive.google.com/file/d/1oZyJ3sv1O-JwIuaLdXqAUbpQ-pTtlL1o/view?usp=drivesdk"
					>
						<p>Challenge Brief</p>
					</a>
				)}
				<a
					className={cn.item}
					style={{
						backgroundColor: "var(--des24-hot-pink)",
						color: "var(--des24-cream)",
					}}
					target="_blank"
					rel="noopener noreferrer"
					href="https://forms.gle/hJmEGwbSc6mhqw9QA"
				>
					<p>Submission Form</p>
				</a>
			</div>
		</div>
	);
};

export { SectionNavigation };
