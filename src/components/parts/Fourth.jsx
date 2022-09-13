import React, { useState } from 'react';
import { SiJavascript, SiTypescript, SiRubyonrails, SiFirebase, SiMongodb } from 'react-icons/si';
import { DiRubyRough, DiSass, DiCss3, DiReact, DiJqueryLogo, DiNodejsSmall, DiPostgresql, DiMysql } from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

export default function Fourth() {
	const [isActive, setIsActive] = useState(false);
	const [isActive2, setIsActive2] = useState(true);
	const handleClick = (event) => {
		setIsActive(false);
		setIsActive2(true);
	};
	const handleClick2 = (event) => {
		setIsActive(true);
		setIsActive2(false);
	};
	return (
		<div className="fourth">
			<h2>
				<br />
				<span>03. </span> Relevant Experience <hr></hr>{' '}
			</h2>
			<nav>
				<ul className="work">
					<li onClick={handleClick} className={isActive ? 'clicked' : ''}>
						Telstra
					</li>
					<li onClick={handleClick2} className={isActive2 ? 'clicked' : ''}>
						GoHock
					</li>
				</ul>
			</nav>
			<div className={isActive ? 'display' : 'telstra'}>
				<div className="text">
					<h2>Assistant Team Leader</h2>
					<p>2020 - 2022</p>
					<p>Consumer & Business Consultant</p>
					<p>
						The team leader position consisted of coaching Customer Advisors daily to deliver sales and customer experience targets. This also included compliance and operational
						maintenance.
					</p>
				</div>

				<img src="telstra.png" alt="Telstra logo" />
			</div>
			<div className={isActive2 ? 'display' : 'goHock'}>
				<div className="text">
					<h2>Junior Software Engineer</h2>
					<p>Jan 2022 - May 2022</p>
					<p>
						Junior software developer role, which mainly included front-end development. Latter with my position in GoHock, we began to research and learn Flutter.io for Mobile app
						development.{' '}
					</p>
					<p>Tech Stack: React, Ruby on Rails, JavaScript, CSS & Flutter.io.</p>
				</div>
				<img src="goHock.png" alt="goHock logo" />
			</div>
			<div className="stack">
				<h2>Tech Stack</h2>
				<h3>Languages</h3>
				<ul className="techList">
					<li>
						<span>
							<SiJavascript />
						</span>
						Javascript
					</li>
					<li>
						<span>
							<DiRubyRough />
						</span>
						Ruby
					</li>
					<li>
						<span>
							<DiSass />
						</span>
						SASS
					</li>
					<li>
						<span>
							<DiCss3 />
						</span>
						CSS
					</li>
					<li>
						<span>
							<SiTypescript />
						</span>
						TypeScript
					</li>
				</ul>
				<h3>Frameworks/Libraries</h3>
				<ul className="techList">
					<li>
						<span>
							<DiReact />
						</span>
						React.js
					</li>
					<li>
						<span>
							<DiReact />
						</span>
						React Native
					</li>
					<li>
						<span>
							<SiRubyonrails />
						</span>
						Ruby on Rails
					</li>
					<li>
						<span>
							<RiVuejsFill />
						</span>
						Vue.js
					</li>
					<li>
						<span>
							<DiJqueryLogo />
						</span>
						jQuery
					</li>
					<li>
						<span>
							<DiNodejsSmall />
						</span>
						Express.js
					</li>
				</ul>
				<h3>Databases/Cloud</h3>
				<ul className="techList">
					<li>
						<span>
							<DiPostgresql />
						</span>
						PostgreSQL
					</li>
					<li>
						<span>
							<DiMysql />
						</span>
						MySQL
					</li>
					<li>
						<span>
							<SiFirebase />
						</span>
						Firebase
					</li>
					<li>
						<span>
							<AiFillGithub />
						</span>
						GIT, GitHub
					</li>
					<li>
						<span>
							<SiMongodb />
						</span>
						Mongo DB
					</li>
				</ul>
			</div>
		</div>
	);
}
