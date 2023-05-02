import { Route, Routes, Navigate } from 'react-router-dom';

import { Banner, Footer, Nav } from './components';
import { useScroll } from './controllers';
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
import Designathon from './pages/Designathons';

function App() {
	useScroll();

	return (
		<>
			<Banner />
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

				<Route path='designathon/*' element={<Designathon />} />
				<Route path='designathons/*' element={<Designathon />} />

				<Route path='brand' element={<Brand />} />

				{/* Redirects */}
				<Route
					path='discord'
					element={<Navigate to='//discord.com/invite/MBVrKe9' />}
				/>

				{/* Leaving this redirect here since that link is posted on our insta */}
				<Route
					path='impact22'
					element={<Navigate to='/designathon/22' />}
				/>
				<Route
					path='ptsignup'
					element={<Navigate to='//forms.gle/2uHLu1FdWZbGyYeW8' />}
				/>
				<Route
					path='ptsignups'
					element={<Navigate to='//forms.gle/2uHLu1FdWZbGyYeW8' />}
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
