import { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

function useScroll() {
	const [scrollableElements, setScrollableElements] = useState([]);
	let { pathname } = useLocation();

	const pageScroll = useCallback(() => {
		for (let element of scrollableElements) {
			if (element.getBoundingClientRect().top < window.innerHeight * 0.84)
				element.classList.add("show");
		}
	}, [scrollableElements]);

	useEffect(() => {
		if (pathname.includes("beta")) return; // makes life easier during dev

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
		setScrollableElements(document.getElementsByClassName("wait"));
		window.addEventListener("scroll", pageScroll);
		pageScroll();

		return () => window.removeEventListener("scroll", pageScroll);
	}, [pathname, pageScroll]);
}

export default useScroll;
