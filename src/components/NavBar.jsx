import React, { useState, useRef } from 'react';
import pdf from '../assets/Resume.pdf';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './nav.scss';
import Hamburger from 'hamburger-react';

export default function NavBar({ first, second, third, fourth, fifth }) {
	function openResume() {
		window.open(pdf, '_blank');
	}
	function click2() {
		setOpen();
		second();
	}
	function click3() {
		setOpen();
		third();
	}
	function click4() {
		setOpen();
		fourth();
	}
	function click5() {
		setOpen();
		fifth();
	}

	const [isOpen, setOpen] = useState(false);
	function openMenu() {}
	const [isActive, setIsActive] = useState(false);
	const handleClick = () => {
		setIsActive((previsActive) => !previsActive);
	};
	return (
		<div className="burger">
			<h2 onClick={first}>E </h2>
			<div className="topNav">
				<ul>
					<li>
						<a onClick={second}>
							<span>01. </span>About
						</a>
					</li>
					<li>
						<a onClick={third}>
							<span>02. </span>Projects
						</a>
					</li>
					<li>
						<a onClick={fourth}>
							<span>03. </span>Experience
						</a>
					</li>
					<li>
						<a onClick={fifth}>
							<span>04. </span>Contact
						</a>
					</li>
					<li>
						<button onClick={openResume}>Resume</button>
					</li>
				</ul>
			</div>
			<div onClick={handleClick} className="hamburger">
				<Hamburger toggled={isOpen} toggle={setOpen} />
				<div className={isActive ? 'menu' : 'display'}>
					<ul>
						<li>
							<button onClick={openResume}>Resume</button>
						</li>
						<li>
							<a onClick={click2}>
								<span>01. </span>About
							</a>
						</li>
						<li>
							<a onClick={click3}>
								<span>02. </span>Projects
							</a>
						</li>
						<li>
							<a onClick={click4}>
								<span>03. </span>Experience
							</a>
						</li>
						<li>
							<a onClick={click5}>
								<span>04. </span>Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
