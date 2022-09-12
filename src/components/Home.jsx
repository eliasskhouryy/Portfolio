import React from "react";
import Nav from "./Nav";
import "./home.scss";

import First from "./parts/First";
import Second from "./parts/Second";
import Third from "./parts/Third";
import Fourth from "./parts/Fourth";

export default function Home() {
	return (
		<div>
			<Nav />
			<First />
			<Second />
			<Third />
			<Fourth />
			<div className='leftOverlay'></div>
		</div>
	);
}
