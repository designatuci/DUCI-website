import { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
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

			{/* <Route path=":name" element={< profile*/}
		</Routes>
	);
};


// const Profile= () => {
// 	const  {name} = useParams();
// 	console.log(name);

// 	find name in internList ->

// 	reutrn <div>{intern.name}<img src={intern.imae}} /></div>


// }

export default Designathon;
