import React from 'react';



// import css file
import styles from './UserPage.module.css';

//import components
import UserProfileImage from '../components/UserProfileImage/UserProfileImage'
import UserForm from '../components/UserForm/UserForm'
function UserPage() {
    return (
        <div className={styles.container}>
            <div className={styles.userDetails}>
                <UserForm/>
            </div>
            <div className={styles.userPic}>
                <UserProfileImage img={"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture.jpg"} name={"Albert"}/>
            </div>

        </div>
    );
}

export default UserPage;
