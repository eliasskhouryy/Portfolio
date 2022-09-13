import React from 'react';

export default function Fifth() {
	return (
		<div className="fifth">
			<h3>
				<br /> <br />
				04. What's next?
			</h3>
			<h2>Get In Touch </h2>
			<p>I'm currently open to new opportunities. My inbox is always open, even just for a chat!</p>
			<button onClick={() => window.open('mailto:eliaskhouryy@hotmail.com?subject=Hello Elias!&body=What would you like to say?')}>Say Hello!</button>
			<h4>Designed & Built by Elias Khoury</h4>
		</div>
	);
}
