import React from 'react';



// import css file
import styles from './UserProfileImage.module.css';

function UserProfileImage(props) {
    return (
        <div className={styles.container}>
           <img className={styles.image} src={props.img}/>
           <p className={styles.name}>{props.name}</p>
        </div>
    );
}

export default UserProfileImage;
