import { Text } from "app/components";
import cn from "./SectionNavigation.module.scss";

const SectionNavigation = () => {
	const scrollToSection = (id) => {
		window.scrollTo(0, document.getElementById(id).offsetTop - 80); // document.getElementById(id).offsetTop
	};

	return (
		<div className={cn.container}>
			{[
				{ label: "Overview", id: "s-overview" },
				{ label: "Rules", id: "s-rules" },
				{ label: "Schedule", id: "s-schedule" },
				{ label: "Resources", id: "s-resources" },
				{ label: "FAQ", id: "s-faq" },
				{ label: "About", id: "s-about" },
			].map((item) => (
				<a
					className={cn.item}
					href={`#${item.label.toLowerCase()}`}
					onClick={() => {
						scrollToSection(item.id);
					}}
				>
					<Text>{item.label}</Text>
				</a>
			))}
		</div>
	);
};

export default SectionNavigation;
