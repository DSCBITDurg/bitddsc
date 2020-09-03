import React from 'react';
import PropTypes from 'prop-types';

//import images

//import components

//import styles
import styles from './EventCard.module.css';

export default function EventCard(props){
    return(
        <div className={styles.container}>
            <div className={styles.img}><img src={props.img} alt="Loading..."/></div>
            <div className={styles.main}>
                <div className={styles.title}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.desc}>
                    <p>{props.desc}</p>
                </div>
                <div className={styles.date}>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    );
}

EventCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    date: PropTypes.string,
}; 