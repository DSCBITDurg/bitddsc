import React from 'react';
import PropTypes from 'prop-types';
//import images

//import components

//import styles
import styles from './ProfileCard.module.css';

export default function ProfileCard(props){
    return(
        <div className={styles.container}>
            <img src={props.img} className={styles.profilePic} alt="Loading..."/>
            <p>{props.name}</p>
            <p>{props.desc}</p>
        </div>
    );
}

ProfileCard.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
}; 