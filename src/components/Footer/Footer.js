import React from 'react';

//import components


//import images
import dscIcon from '../../assets/images/dscIcon.png';

import discordIcon from '../../assets/images/discord.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import linkedinIcon from '../../assets/images/linkedin.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import youtubeIcon from '../../assets/images/youtube.svg'
import whatsappIcon from '../../assets/images/whatsapp.svg' 
//import styles
import styles from './Footer.module.css';

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            
            <div className={styles.footerMain}>
             
                    <img src={dscIcon} className={styles.dscIcon} alt="Loading..."/>
              
                    <div className={styles.joinus}>
                        <a target="_blank" href="https://chat.whatsapp.com/EYEEcsfpUPV9C5MKjNj7QY"><img src={whatsappIcon}/></a>
                        <a target="_blank" href="https://www.instagram.com/bitddsc/"><img src={instagramIcon}/></a>
                        <a target="_blank" href="https://www.linkedin.com/company/dsc-bitd/"><img src={linkedinIcon}/></a>
                        <a target="_blank" href="https://twitter.com/BitdDsc"><img src={twitterIcon}/></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCT6bau44YmuFM3Qu_de6W_w" ><img src={youtubeIcon}/></a>
                        <a target="_blank" href="https://discord.gg/DjgrJUP"><img src={discordIcon}/></a>
                    </div>
                   
            </div>
           
        </div>
    );
}