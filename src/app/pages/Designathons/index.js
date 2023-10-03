import { Route, Routes } from 'react-router-dom';
import Designathon22 from './Designathon22';
import Designathon23 from './Designathon23';
import Home from './Home';

const Designathon = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='22' element={<Designathon22 />} />
			<Route path='impact' element={<Designathon22 />} />

			<Route path='23' element={<Designathon23 />} />
			<Route path='you-belong-here' element={<Designathon23 />} />
		</Routes>
	);
};

export default Designathon;