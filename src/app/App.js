import { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import { Footer, Nav } from "./components";
import { useScroll } from "./controllers";
import {
	About,
	Brand,
	Contact,
	Events,
	EventsAll,
	Home,
	Houses,
	Join,
	Mentorship,
	Merch,
	NotFound,
	ProjectTeams,
	Resources,
	ResourcesFeatured,
	Shirt22,
	EventsAllDev,
	EventsDev,
} from "./pages";
import "./styles/global.scss";
import "./styles/colors.scss";
import "./styles/layout.scss";
import "./styles/components.scss";
import "./styles/animations.scss";
import "./styles/forms.scss";
import Designathon from "./pages/Designathons";
import Hey from "./pages/Hey";
import { HOUSES_SORTING_FORM } from "./pages/Houses/sections/Join";
import { PROJECT_TEAMS_GOOGLE_FORM } from "./pages/ProjectTeams/ProjectTeams";
import { ColorGame } from "./pages/ColorGame/ColorGame";

const GA_MEASUREMENT_ID = "G-0YE3JXFTSN";

function App() {
	const location = useLocation();
	useScroll();

	// Google Analytics page view tracking
	useEffect(() => {
		if (typeof window.gtag === "function") {
			window.gtag("config", GA_MEASUREMENT_ID, {
				page_path: location.pathname + location.search,
				page_title: document.title,
			});
		}
	}, [location.pathname, location.search]);

	// Google Analytics outbound link tracking
	useEffect(() => {
		const handleClick = (e) => {
			const link = e.target.closest("a");
			if (!link || !link.href) return;
			const href = link.href;
			if (href.startsWith("#")) return;
			try {
				const url = new URL(href);
				if (url.protocol !== "http:" && url.protocol !== "https:") return;
				if (url.origin === window.location.origin) return;
				if (typeof window.gtag === "function") {
					window.gtag("event", "outbound_click", {
						link_url: href,
					});
				}
			} catch (_) {}
		};
		document.addEventListener("click", handleClick, true);
		return () => document.removeEventListener("click", handleClick, true);
	}, []);

	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="join" element={<Join />} />
				<Route path="hey" element={<Hey />} />
				<Route path="events">
					<Route index element={<Events />} />
					<Route path="all" element={<EventsAll />} />
				</Route>
				<Route path="resources">
					<Route index element={<Resources />} />
					<Route path="featured" element={<ResourcesFeatured />} />
				</Route>
				<Route path="mentorship">
					<Route index element={<Mentorship />} />
				</Route>
				<Route path="merch">
					<Route index element={<Merch />} />
					<Route path="shirt22" element={<Shirt22 />} />
				</Route>
				<Route path="contact" element={<Contact />} />
				<Route path="houses" element={<Houses />} />
				<Route
					path="/houses/sorting"
					element={<Redirect to={HOUSES_SORTING_FORM} />}
				/>

				<Route path="about" element={<About />} />
				<Route path="project-teams" element={<ProjectTeams />} />

				<Route path="designathon/*" element={<Designathon />} />
				<Route path="designathons/*" element={<Designathon />} />

				<Route path="brand" element={<Brand />} />

				<Route path="color-game" element={<ColorGame />} />

				{/* Redirects */}
				<Route
					path="discord"
					element={
						<Redirect to="https://discord.com/invite/MBVrKe9" />
					}
				/>

				{/* Leaving this redirect here since that link is posted on our insta */}
				<Route
					path="impact22"
					element={<Redirect to="/designathon/22" />}
				/>
				<Route
					path="truetoyou"
					element={<Redirect to="/designathon/24" />}
				/>
				<Route
					path="true-to-you"
					element={<Redirect to="/designathon/24" />}
				/>

				<Route
					path="/ptsignup"
					element={
						<Navigate
							to="/project-teams/registration"
							replace={true}
						/>
					}
				/>
				<Route
					path="/pt-registration"
					element={
						<Navigate
							to="/project-teams/registration"
							replace={true}
						/>
					}
				/>
				<Route
					path="/project-teams/registration"
					element={<Redirect to={PROJECT_TEAMS_GOOGLE_FORM} />}
				/>
				{/* <Route
					path='buy'
					element={<Redirect to='//forms.gle/RVoUbLPQnHYzeWMA6' />}
				/> */}
				{/* <Route
					path='apply'
					element={<Redirect to='//forms.gle/UXpfUfANHZ9m6fR47' />}
				/> */}

				<Route path="*" element={<NotFound />} />

				<Route path="dev">
					<Route path="events">
						<Route index element={<EventsDev />} />
						<Route path="all" element={<EventsAllDev />} />
					</Route>
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

function Redirect({ to }) {
	window.location.href = to;
}

export default App;
