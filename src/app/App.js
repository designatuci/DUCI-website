import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Join from './pages/Join';
import Hey from './pages/Hey';
import Events from './pages/Events';
import EventsAll from './pages/EventsAll';
import Resources from './pages/Resources';
import ResourcesFeatured from './pages/ResourcesFeatured';
import Merch from './pages/Merch/Merch';
import PT from './pages/PT';
import Designathons from './pages/Designathons';
import Designathon22 from './pages/Designathon22';
import { About, Contact } from './pages';
import Brand from './pages/Brand';
import { useScroll } from './controllers';
import { Footer, Nav } from './components';

function App() {
	useScroll();

	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/join/' element={<Join />} />
				<Route path='/hey/' element={<Hey />} />
				<Route path='/events/' element={<Events />} />
				<Route path='/events/all' element={<EventsAll />} />
				<Route path='/resources/' element={<Resources />} />
				<Route
					path='/resources/featured/'
					element={<ResourcesFeatured />}
				/>
				<Route path='/merch/' element={<Merch />} />
				<Route path='/contact/' element={<Contact />} />
				<Route path='/about/' element={<About />} />
				<Route path='/pt/' element={<PT />} />
				<Route path='/designathons/' element={<Designathons />} />
				<Route path='/designathon22/' element={<Designathon22 />} />
				<Route path='/brand/' element={<Brand />} />
				<Route element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
