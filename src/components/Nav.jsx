import React, { useState, useRef } from 'react';
import pdf from '../assets/Resume.pdf';
import { Twirl as Hamburger } from 'hamburger-react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './nav.scss';

export default function Nav({ first, second, third, fourth }) {
	function openResume() {
		window.open(pdf, '_blank');
	}
	return (
		<div className="burger">
			<h2 onClick={first}>E </h2>
			<ul>
				<li>
					<a onClick={second}>
						<span>01. </span>About
					</a>
				</li>
				<li>
					<a onClick={third}>
						<span>02. </span>Experience
					</a>
				</li>
				<li>
					<a onClick={fourth}>
						<span>03. </span>Work
					</a>
				</li>
				<li>
					<a>
						<span>04. </span>Contact
					</a>
				</li>
				<li>
					<button onClick={openResume}>Resume</button>
				</li>
			</ul>
			{/* <Button
				id='demo-positioned-button'
				aria-controls={open ? "demo-positioned-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</Button>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu> */}
		</div>
	);
}
