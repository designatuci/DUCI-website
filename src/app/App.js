import { Route, Routes, Navigate } from "react-router-dom";

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
	PT,
	Resources,
	ResourcesFeatured,
	Shirt22,
} from "./pages";
import "./styles/global.scss";
import "./styles/colors.scss";
import "./styles/layout.scss";
import "./styles/components.scss";
import "./styles/animations.scss";
import "./styles/forms.scss";
import Designathon from "./pages/Designathons";
import Hey from "./pages/Hey";
import { PROJECT_TEAMS_GOOGLE_FORM } from "./pages/PT/PT";

function App() {
	useScroll();

	return (
		<>
			{/* <Banner /> */}
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
				<Route path="about" element={<About />} />
				<Route path="pt" element={<PT />} />

				<Route path="designathon/*" element={<Designathon />} />
				<Route path="designathons/*" element={<Designathon />} />

				<Route path="brand" element={<Brand />} />

				{/* Redirects */}
				<Route
					path="discord"
					element={<Navigate to="//discord.com/invite/MBVrKe9" />}
				/>

				{/* Leaving this redirect here since that link is posted on our insta */}
				<Route path="impact22" element={<Navigate to="/designathon/22" />} />
				<Route
					path="ptsignup"
					element={<Navigate to={PROJECT_TEAMS_GOOGLE_FORM} />}
				/>
				<Route
					path="ptsignups"
					element={<Navigate to={PROJECT_TEAMS_GOOGLE_FORM} />}
				/>
				{/* <Route
					path='buy'
					element={<Navigate to='//forms.gle/RVoUbLPQnHYzeWMA6' />}
				/> */}
				{/* <Route
					path='apply'
					element={<Navigate to='//forms.gle/UXpfUfANHZ9m6fR47' />}
				/> */}

				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
