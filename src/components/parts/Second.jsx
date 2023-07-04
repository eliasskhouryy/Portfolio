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
					As a passionate and motivated software engineer, I'm currently employed in a role that has given me the opportunity to apply my creativity and problem-solving skills in a
					collaborative environment. I am committed to continuous growth and development in my field. I am eager to keep learning and expanding my skills, always aiming to contribute more to
					my team and the projects we undertake.
				</p>
				<p>My experience in leadership and consulting on the client side has helped me develop a unique and holistic perspective on customer experience and effective team communication.</p>
				<p>
					While I'm currently immersed in a software engineering role and not actively seeking new job opportunities, I'm always excited to discuss and collaborate on intriguing projects.
					Feel free to <a onClick={() => window.open('mailto:eliaskhouryy@hotmail.com?subject=Hello Elias!&body=What would you like to say?')}>email</a> or connect with me via{' '}
					<a href="https://www.linkedin.com/in/eliasjkhoury/">LinkedIn</a>.
				</p>
				<img src="portrait.jpeg" alt="" />
			</div>
		</div>
	);
}
