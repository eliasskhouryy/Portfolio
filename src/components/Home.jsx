import React, { useRef, useEffect } from 'react';
import NavBar from './NavBar';
import './home.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import First from './parts/First';
import Second from './parts/Second';
import Third from './parts/Third';
import Fourth from './parts/Fourth';
import Fifth from './parts/Fifth';

export default function Home({ title }) {
	useEffect(() => {
		document.title = title || '';
	}, [title]);

	const firstRef = useRef(null);
	const handleClickFirst = () => {
		firstRef.current?.scrollIntoView({ behavior: 'smooth', margin: '1000px' });
	};
	const secondRef = useRef(null);
	const handleClickSecond = () => {
		secondRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const thirdRef = useRef(null);
	const handleClickThird = () => {
		thirdRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const fourthRef = useRef(null);
	const handleClickFourth = () => {
		fourthRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const fifthRef = useRef(null);
	const handleClickfifth = () => {
		fifthRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div ref={firstRef}>
			<NavBar first={handleClickFirst} second={handleClickSecond} third={handleClickThird} fourth={handleClickFourth} fifth={handleClickfifth} />
			<div>
				<First second={handleClickSecond} />
			</div>
			<div ref={secondRef}>
				<Second />
			</div>
			<div ref={thirdRef}>
				<Third />
			</div>
			<div ref={fourthRef}>
				<Fourth />
			</div>
			<div ref={fifthRef}>
				<Fifth />
			</div>
			<div className="leftOverlayContent">
				<ul>
					<li>
						<a target="_" href="https://github.com/eliasskhouryy">
							<AiFillGithub />
						</a>
					</li>
					<li>
						<a target="_" href="https://www.linkedin.com/in/eliasjkhoury/">
							<FaLinkedinIn />
						</a>
					</li>
				</ul>
				<div className="leftOverlay"></div>
			</div>
			<div className="rightOverlayContent">
				<ul>
					<li>
						<a href="" onClick={() => window.open('mailto:eliaskhouryy@hotmail.com?subject=Hello Elias!&body=What would you like to say?')}>
							eliaskhouryy@hotmail.com
						</a>
					</li>
				</ul>
				<div className="rightOverlay"></div>
			</div>
			<div className="leftOverlayContent2">
				<ul>
					<li>
						<a className="verticle" href="" onClick={() => window.open('mailto:eliaskhouryy@hotmail.com?subject=Hello Elias!&body=What would you like to say?')}>
							eliaskhouryy@hotmail.com
						</a>
					</li>
					<li>
						<a target="_" href="https://github.com/eliasskhouryy">
							<AiFillGithub />
						</a>
					</li>
					<li>
						<a target="_" href="https://www.linkedin.com/in/eliasjkhoury/">
							<FaLinkedinIn />
						</a>
					</li>
				</ul>
				<div className="leftOverlay"></div>
			</div>
		</div>
	);
}
