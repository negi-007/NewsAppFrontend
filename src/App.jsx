import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Sections/Hero/Hero";
import General from "./Sections/News/General";
import Trending from "./Sections/Trending/Trending";
import Footer from "./Sections/Footer/Footer";
import Fashion from "./Sections/News/Fashion";
import Gadgets from "./Sections/News/Gadgets";
import LifeStyle from "./Sections/News/LifeStyle";
import Celebrity from "./Sections/News/Celebrity";
import Sports from "./Sections/News/Sports";
import Crime from "./Sections/News/Crime";
import RealEstate from "./Sections/News/RealEstate";

function App() {
	return (
		<>
			<BrowserRouter>
				<Hero />
				<div className="flex flex-col w-full">
					<div className="w-full">
						<div className="mx-auto max-w-[1070px]">
							<Routes>
								<Route path="/" element={<General />} />
								<Route path="/fashion" element={<Fashion />} />
								<Route path="/gadgets" element={<Gadgets />} />
								<Route path="/lifestyle" element={<LifeStyle />} />
								<Route path="/real-estate" element={<RealEstate />} />
								<Route path="/celebrity" element={<Celebrity />} />
								<Route path="/sports" element={<Sports />} />
								<Route path="/crime" element={<Crime />} />
								<Route path="/trending" element={<Trending />} />
							</Routes>
						</div>
					</div>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
