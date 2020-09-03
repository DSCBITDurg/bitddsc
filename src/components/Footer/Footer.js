import React from 'react';

//import components


//import images
import dscIcon from '../../assets/images/dscIcon.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

//import styles
import styles from './Footer.module.css';

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            
            <div className={styles.footerMain}>
             
                <img src={dscIcon} className={styles.dscIcon} alt="Loading..."/>
                 
             

                <div className={styles.links}>
                    <a className={styles.link} href="/">Home</a>
                    <a className={styles.link} href="/">About</a>
                    <a className={styles.link} href="/">Blog</a>
                    <a className={styles.link} href="/">Contact</a>
                    <a className={styles.link} href="/">Events</a>
                </div>

                <div className={styles.features}>
                    <a className={styles.link} href="/">Collab Tool</a>
                    <a className={styles.link} href="/">My Badges</a>
                </div>

                <div className={styles.eventsAndUs}>
                    <a className={styles.link} href="/">Our Team</a>
                    <a className={styles.link} href="/">Upcomming Events</a>
                    <a className={styles.link} href="/">Past Events</a>
                    <a className={styles.link} href="/">Gallary</a>
                </div>
            </div>

            <div className={styles.socialHandles}>
                <div className={styles.socialIcons}>
                    <p>Social Handles</p>
                    <p><InstagramIcon fontSize="large"/></p>
                    <p><WhatsAppIcon fontSize="large"/></p>
                </div>
                <div className={styles.email}>
                    <p>Email: bitdsc@gmail.com</p>
                </div>
            </div>
        </div>
    );
}