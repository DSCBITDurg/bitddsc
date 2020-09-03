import React from 'react';

//import images
import dscIcon from '../../assets/images/dscIcon.png';

//import components
import Navbar from '../Navbar/Navbar';

//import styles
import styles from './Header.module.css';

export default function Header(){
    return(
        <div className={styles.headerContainer}>
            
            <img src={dscIcon} className={styles.dscLogo} alt="Loading..."/>
            
            <Navbar/>
        </div>
    );
}