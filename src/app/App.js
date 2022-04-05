import { Route, Routes, Navigate } from 'react-router-dom';
import Hey from './pages/Hey';
import Designathons from './pages/Designathons';
import Designathon22 from './pages/Designathon22';
import {
	About,
	Brand,
	Contact,
	Events,
	EventsAll,
	Home,
	Join,
	Merch,
	NotFound,
	PT,
	Resources,
	ResourcesFeatured,
} from './pages';
import { useScroll } from './controllers';
import { Footer, Nav } from './components';

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
				<Route path='merch' element={<Merch />} />
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
					element={<Navigate to='//bit.ly/3DpZBz9' />}
				/>
				<Route
					path='ptsignups'
					element={<Navigate to='//bit.ly/3DpZBz9' />}
				/>
				<Route
					path='buy'
					element={<Navigate to='//forms.gle/RVoUbLPQnHYzeWMA6' />}
				/>
				{/* <Route
					path='apply'
					element={<Navigate to='//forms.gle/YAy83sW8pni4b61U9' />}
				/> */}

				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
