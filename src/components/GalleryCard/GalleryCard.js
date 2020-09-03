import React from 'react';
import PropTypes from 'prop-types';

//import images

//import components

//import styles
import styles from './GalleryCard.module.css';

export default function GalleryCard(props){
    return(
        <div className={styles.container}>
            <div className={styles.img}><img src={props.img} alt="Loading..."/></div>
            <div className={styles.main}>
                <div className={styles.title}>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    );
}

GalleryCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
}; 