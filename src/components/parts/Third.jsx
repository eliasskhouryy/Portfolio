import React from 'react';
import {projects} from '../../utils/data/projectData';

export default function Third() {
	return (
		<div className="third">
			<h2>
				<br />
				<span>02. </span> Few of my creations <hr />
			</h2>
			{projects.map((project, index) => (
				<div key={index} className={project.className}>
					<h3>
						<a target="_blank" rel="noopener noreferrer" href={project.link}>
							{project.title}
						</a>
					</h3>
					<p>{project.description}</p>
					<h4>{project.stack}</h4>
					<img src={project.image} alt={project.title} />
				</div>
			))}
		</div>
	);
}
