import React from 'react';

export default function Second() {
	return (
		<div className="second">
			<h2>
				<br />
				<span>01. </span> About me <hr></hr>{' '}
			</h2>
			<div className="body">
				<p>
					Hello! My name is Elias, and I have a passion for creating things that live on the web. My interest in web development was initiated in my early childhood days of creating
					Starcraft maps for local players.
				</p>
				<p>
					After working in Telecommunications for almost 9 years, I decided to pursue my passion for software engineering. In mid-2022, I completed the 3-month Software Engineering Immersive
					course at General Assembly in Sydney.{' '}
				</p>
				<p>My experience in leadership and consulting on the client side has helped me develop a unique and holistic perspective on customer experience and effective team communication.</p>
				<p>
					I’m currently open to job opportunities so please feel free to{' '}
					<a onClick={() => window.open('mailto:eliaskhouryy@hotmail.com?subject=Hello Elias!&body=What would you like to say?')}>email</a> or connect with me via{' '}
					<a href="https://www.linkedin.com/in/eliasjkhoury/">LinkedIn</a>.
				</p>
			</div>
		</div>
	);
}
