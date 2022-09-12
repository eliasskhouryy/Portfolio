import React from "react";
import Nav from "./Nav";
import "./home.scss";

export default function Home() {
	return (
		<div>
			<Nav />
			<div className='first'>
				<p>Hi, my name is</p>
				<h1>Elias Khoury.</h1>
				<h2>I am a contributer to the world wide web.</h2>
			</div>
			<div className='second'>
				<h2>Welcome to Elias' Page</h2>
			</div>
			<div className='third'>
				<h2>Welcome to Elias' Page</h2>
			</div>
			<div className='fourth'>
				<h2>Welcome to Elias' Page</h2>
			</div>
			<div className='leftOverlay'></div>
		</div>
	);
}
