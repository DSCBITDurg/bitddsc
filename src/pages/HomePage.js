import React from 'react';



// import css file
import styles from './HomePage.module.css';
import dscHomeImage from '../assets/images/dsc-home.svg' 
function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={dscHomeImage}/>
            </div>
        </div>
    );
}

export default HomePage;
