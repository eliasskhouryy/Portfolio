import React from 'react';

export default function first({ second }) {
	return (
		<div className="first">
			<p>Hi, my name is</p>
			<h1>Elias Khoury.</h1>
			<h2>I'm a full-stack software engineer.</h2>
			<p className="text">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti numquam fugit debitis ipsum sed? Non beatae similique delectus deserunt accusantium commodiparum facere
				exercitationem! Vel ipsam excepturi soluta quidem aliquid.
			</p>
			<button onClick={second}>Learn more about me!</button>
		</div>
	);
}
