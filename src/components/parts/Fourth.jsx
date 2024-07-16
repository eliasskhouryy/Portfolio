import React, {useState} from 'react';
import {experiences, techStack} from '../../utils/data/profileData';

export default function Fourth() {
	const [activeTab, setActiveTab] = useState(1);

	const handleClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className="fourth">
			<h2>
				<br />
				<span>03. </span> Relevant Experience <hr />
			</h2>
			<nav>
				<ul className="work">
					{experiences.map((exp, index) => (
						<li key={index} onClick={() => handleClick(index + 1)} className={activeTab === index + 1 ? 'clicked' : ''}>
							{exp.company}
						</li>
					))}
				</ul>
			</nav>
			{experiences.map(
				(exp, index) =>
					activeTab === index + 1 && (
						<div className="telstra">
							<div className="text">
								<h2>{exp.position}</h2>
								<p>{exp.duration}</p>
								<p>{exp.description}</p>
								{exp.techStack && <p>{exp.techStack}</p>}
							</div>
							<img src={exp.logo} alt={`${exp.name} logo`} />
						</div>
					)
			)}
			<div className="stack">
				<h2>Tech Stack</h2>
				<h3>Languages</h3>
				<ul className="techList">
					{techStack.languages.map((lang, index) => (
						<li key={index}>
							<span>
								<lang.icon />
							</span>
							{lang.name}
						</li>
					))}
				</ul>
				<h3>Frameworks/Libraries</h3>
				<ul className="techList">
					{techStack.frameworks.map((framework, index) => (
						<li key={index}>
							<span>
								<framework.icon />
							</span>
							{framework.name}
						</li>
					))}
				</ul>
				<h3>Databases/Cloud</h3>
				<ul className="techList">
					{techStack.databases.map((db, index) => (
						<li key={index}>
							<span>
								<db.icon />
							</span>
							{db.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
