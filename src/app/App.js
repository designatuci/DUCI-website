import { Route, Routes, Navigate } from 'react-router-dom';

import { Footer, Nav } from './components';
import { useScroll } from './controllers';
import Designathons from './pages/Designathons';
import Designathon22 from './pages/Designathon22';
import Hey from './pages/Hey';
import {
	About,
	Brand,
	Contact,
	Events,
	EventsAll,
	Home,
	Join,
	Mentorship,
	Merch,
	NotFound,
	PT,
	Resources,
	ResourcesFeatured,
	Shirt22,
} from './pages';

import './styles/global.scss';
import './styles/colors.scss';
import './styles/layout.scss';
import './styles/components.scss';
import './styles/animations.scss';
import './styles/forms.scss';

function App() {
	useScroll();

	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='join' element={<Join />} />
				<Route path='hey' element={<Hey />} />
				<Route path='events'>
					<Route index element={<Events />} />
					<Route path='all' element={<EventsAll />} />
				</Route>
				<Route path='resources'>
					<Route index element={<Resources />} />
					<Route path='featured' element={<ResourcesFeatured />} />
				</Route>
				<Route path='mentorship'>
					<Route index element={<Mentorship />} />
				</Route>
				<Route path='merch'>
					<Route index element={<Merch />} />
					<Route path='shirt22' element={<Shirt22 />} />
				</Route>
				<Route path='contact' element={<Contact />} />
				<Route path='about' element={<About />} />
				<Route path='pt' element={<PT />} />
				<Route path='designathons' element={<Designathons />} />
				<Route path='designathon22' element={<Designathon22 />} />
				<Route path='impact22' element={<Designathon22 />} />
				<Route path='brand' element={<Brand />} />

				{/* Redirects */}
				<Route
					path='discord'
					element={<Navigate to='//discord.com/invite/MBVrKe9' />}
				/>
				<Route
					path='ptsignup'
					element={<Navigate to='//forms.gle/hHqKT4tX6W1n8VHJ9' />}
				/>
				<Route
					path='ptsignups'
					element={<Navigate to='//forms.gle/hHqKT4tX6W1n8VHJ9' />}
				/>
				{/* <Route
					path='buy'
					element={<Navigate to='//forms.gle/RVoUbLPQnHYzeWMA6' />}
				/> */}
				{/* <Route
					path='apply'
					element={<Navigate to='//forms.gle/UXpfUfANHZ9m6fR47' />}
				/> */}

				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
