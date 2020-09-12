import React from 'react';



// import css file
import styles from './HomePage.module.css';
import dscHomeImage from '../assets/images/dsc-home.svg' 
import HomeSection from '../components/HomeSection/HomeSection';
function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
              <HomeSection leftOrientIamge={false}/>
              
            </div>
        </div>
    );
}

export default HomePage;
