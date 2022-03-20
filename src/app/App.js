import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Join from './pages/Join';
import Hey from './pages/Hey';
import ResourcesFeatured from './pages/ResourcesFeatured';
import PT from './pages/PT';
import Designathons from './pages/Designathons';
import Designathon22 from './pages/Designathon22';
import { About, Contact, Events, EventsAll, Merch, Resources } from './pages';
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
				<Route path='brand' element={<Brand />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
