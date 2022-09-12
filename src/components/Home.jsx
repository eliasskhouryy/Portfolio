import React, { useRef } from 'react';
import Nav from './Nav';
import './home.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import First from './parts/First';
import Second from './parts/Second';
import Third from './parts/Third';
import Fourth from './parts/Fourth';

export default function Home() {
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
	return (
		<div>
			<Nav first={handleClickFirst} second={handleClickSecond} third={handleClickThird} fourth={handleClickFourth} />
			<div ref={firstRef}>
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
			<div className="leftOverlayContent">
				<ul>
					<li>
						<a href="https://github.com/eliasskhouryy">
							<AiFillGithub />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/eliasjkhoury/">
							<FaLinkedinIn />
						</a>
					</li>
				</ul>
				<div className="leftOverlay"></div>
			</div>
			<div className="rightOverlayContent">
				<ul>
					<li>
						<a href="">eliaskhouryy@hotmail.com</a>
					</li>
				</ul>
				<div className="rightOverlay"></div>
			</div>
		</div>
	);
}
