import React from "react";
import styles from "./NavbarComp.module.css";
import { NavLink } from "react-router-dom";
import {Navbar, Nav ,Button,NavDropdown} from 'react-bootstrap'
//import icons
import PersonIcon from "@material-ui/icons/Person";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

export default function NavbarComp() {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.linksContainer}>
			<Navbar collapseOnSelect expand="lg">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<NavLink exact activeClassName={styles.activeLink} className={styles.navLink} to="/">
					Home
					</NavLink>
					<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/events">
					Events
					</NavLink>
					<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/blog">
						Blog
					</NavLink>
					<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/contact">
						Contact
					</NavLink>
					<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/about" >
						About Us
					</NavLink>
				</Nav>
			</Navbar.Collapse>
			</Navbar>
			</div>
		</div>
	);
}
