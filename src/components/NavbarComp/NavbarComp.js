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
					<Nav.Link href="#">
						<NavLink exact activeClassName={styles.activeLink} className={styles.navLink} to="/">
						Home
						</NavLink>
					</Nav.Link>

					<Nav.Link href="#">
						<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/events">
						Events
						</NavLink>
					</Nav.Link>
				
					<Nav.Link href="https://bitddsc.hashnode.dev/">
						<a target="_blank" href="https://bitddsc.hashnode.dev/" className={styles.navLink}>Blog</a>
					</Nav.Link>
				
					<Nav.Link href="#">
						<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/contact">
							Contact
						</NavLink>
					</Nav.Link>
					
					<Nav.Link href="#">
						<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/about" >
							About Us
						</NavLink>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Navbar>
			</div>
		</div>
	);
}
