import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./nav.scss";

export default function Nav() {
	const [isOpen, setOpen] = useState(false);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className='burger'>
			<h3>Elias </h3>
			<ul>
				<li>
					<a href=''>
						<span>01. </span>About
					</a>
				</li>
				<li>
					<a href=''>
						<span>02. </span>Experience
					</a>
				</li>
				<li>
					<a href=''>
						<span>03. </span>Work
					</a>
				</li>
				<li>
					<a href=''>
						<span>04. </span>Contact
					</a>
				</li>
				<li>
					<button>Resume</button>
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
