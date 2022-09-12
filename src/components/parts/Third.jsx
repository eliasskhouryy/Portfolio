import React from 'react';

export default function Third() {
	return (
		<div className="third">
			<h2>
				<br />
				<span>01. </span> Some of my creations <hr />{' '}
			</h2>
			<div className="leftProject">
				<h3>
					<a target="_" href="https://trackr-2c1d9.firebaseapp.com/">
						Taskr
					</a>
				</h3>
				<p>
					Taskr is a web-based application that allows users to create projects and add tasks to identify and track their progress status. Taskr allows users to create collaborative projects
					and keeps track of which user has created, updated and completed individual tasks. The collaboration components include a chat box that allows collaborative users to communicate
					within the project.
				</p>
				<h4>React, Firebase, SASS, CSS & DND</h4>
				<img src="./login-shot.png" alt="" />
			</div>
			<div className="rightProject">
				<h3>
					<a target="_" href="https://tranquil-plains-67510.herokuapp.com/login">
						Musik
					</a>
				</h3>
				<p>
					Created a functioning social media application that allows new musicians to share their soundcloud music to a feed, as well as create user profiles with bcrypt authentication. Both
					front and backend were developed with Ruby on Rails.
				</p>
				<h4>
					Ruby on Rails, Heroku, GitHub pages, <br /> CSS & Bootstrap
				</h4>
				<img src="./musik.png" alt="" />
			</div>
			<div className="leftProject2">
				<h3>
					<a target="_" href="https://nourished-development-32447.web.app/">
						Nourished
					</a>
				</h3>
				<p>
					A web app that allows users to search for recipes based on their current pantry items. This includes user authentication that allows the storage of personalised ingredients. React,
					Axios, APIs, Fi
				</p>
				<h4>React, Axios, APIs, Firebase & CSS</h4>
				<img src="./nourished.png" alt="" />
			</div>
		</div>
	);
}
