import React from 'react';

export default function first({ second }) {
	return (
		<div className="first">
			<p>Hi, my name is</p>
			<h1>Elias Khoury.</h1>
			<h2>I'm a full-stack software engineer.</h2>
			<p className="text">I'm an enthusiastic full-stack software engineer, with a passion and an acute eye for design whilst optimizing functionality.</p>
			<button onClick={second}>Learn more about me!</button>
		</div>
	);
}
