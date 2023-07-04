import {SiJavascript, SiTypescript, SiRubyonrails, SiFirebase, SiMongodb, SiDjango} from 'react-icons/si';
import {DiRubyRough, DiSass, DiCss3, DiReact, DiJqueryLogo, DiNodejsSmall, DiPostgresql, DiMysql, DiPython} from 'react-icons/di';
import {RiVuejsFill} from 'react-icons/ri';
import {AiFillGithub} from 'react-icons/ai';

export const experiences = [
	{
		company: 'Shine Solutions',
		position: 'Software Engineer',
		duration: 'Dec 2022 - Present',
		description: 'Software developer role, which mainly included full-stack development. During my tenure at CompanyA, I expanded my knowledge in various tech stacks.',
		techStack: 'Tech Stack: Node.js, Express, React, Redux, MongoDB.',
		logo: 'shine.png',
	},
	{
		company: 'Telstra',
		position: 'Assistant Team Leader',
		duration: '2020 - 2022',
		description:
			'The team leader position consisted of coaching Customer Advisors daily to deliver sales and customer experience targets. This also included compliance and operational maintenance.',
		logo: 'telstra.png',
	},
	{
		company: 'GoHock',
		position: 'Junior Software Engineer',
		duration: 'Jan 2022 - May 2022',
		description:
			'Junior software developer role, which mainly included front-end development. Latter with my position in GoHock, we began to research and learn Flutter.io for Mobile app development.',
		techStack: 'Tech Stack: React, Ruby on Rails, JavaScript, CSS & Flutter.io.',
		logo: 'goHock.png',
	},
];

export const techStack = {
	languages: [
		{icon: SiJavascript, name: 'Javascript'},
		{icon: DiRubyRough, name: 'Ruby'},
		{icon: DiPython, name: 'Python'},
		{icon: DiSass, name: 'SASS'},
		{icon: DiCss3, name: 'CSS'},
		{icon: SiTypescript, name: 'TypeScript'},
	],
	frameworks: [
		{icon: DiReact, name: 'React.js'},
		{icon: DiReact, name: 'React Native'},
		{icon: SiRubyonrails, name: 'Ruby on Rails'},
		{icon: SiDjango, name: 'Django'},
		{icon: RiVuejsFill, name: 'Vue.js'},
		{icon: DiJqueryLogo, name: 'jQuery'},
		{icon: DiNodejsSmall, name: 'Express.js'},
	],
	databases: [
		{icon: DiPostgresql, name: 'PostgreSQL'},
		{icon: DiMysql, name: 'MySQL'},
		{icon: SiFirebase, name: 'Firebase'},
		{icon: AiFillGithub, name: 'GIT, GitHub'},
		{icon: SiMongodb, name: 'Mongo DB'},
	],
};
