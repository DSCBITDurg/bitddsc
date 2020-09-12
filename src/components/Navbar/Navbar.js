import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

//import icons
import PersonIcon from "@material-ui/icons/Person";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

export default function Navbar() {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.linksContainer}>
				<NavLink exact activeClassName={styles.activeLink} className={styles.navLink} to="/">
					Home
				</NavLink>
				<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/events">
					Events
				</NavLink>
				<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/blog">
					Blog
				</NavLink>
				<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/about">
					About
				</NavLink>
				<NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/contact"></NavLink>
			</div>

			<div className={styles.buttonsContainer}>
				{/* <NavLink activeClassName={styles.activeLink} to="/collab"><GroupAddIcon fontSize="large"/></NavLink>
                <NavLink activeClassName={styles.activeLink} to="/badges"><CardMembershipIcon fontSize="large"/></NavLink> */}
				<NavLink activeClassName={styles.activeLink} to="/user">
					<PersonIcon fontSize="large" />
				</NavLink>
			</div>
		</div>
	);
}
