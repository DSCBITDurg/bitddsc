import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
//import icons
import PersonIcon from "@material-ui/icons/Person";

export default function Navbar() {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.linksContainer}>
				{/* <NavLink exact activeClassName={styles.activeLink} className={styles.navLink} to="/">
					Home
				</NavLink>
				<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/events">
					Events
				</NavLink>
				<a target="_blank" href="https://bitddsc.hashnode.dev/" className={styles.navLink}>Blog</a>
				<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/about">
					About Us
				</NavLink>
				<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/contact">Contact Us</NavLink>
			</div>
 */}
			{/* <div className={styles.buttonsContainer}> */}
				{/* <NavLink activeClassName={styles.activeLink} to="/collab"><GroupAddIcon fontSize="large"/></NavLink>
                <NavLink activeClassName={styles.activeLink} to="/badges"><CardMembershipIcon fontSize="large"/></NavLink> */}
				{/* <NavLink activeClassName={styles.activeLink} to="/user"> */}
					{/* <PersonIcon fontSize="large" /> */}
				{/* </NavLink> */}
			<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Navbar>
			<br />
			<Navbar bg="primary" variant="dark">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				</Navbar>
			<br />
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-primary">Search</Button>
				</Form>
			</Navbar>
			</>
			</div>
		</div>
	);
}
