import React from 'react'
import styles from './HomeSection.module.css'

function HomeSection({leftOrientImage}) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftSection}>
                <h3 className={styles.sectionHeading}>Who Are We?</h3>
                <div className={styles.mainContent}>
                To multifold the academic knowledge inside college students, we pop up with an intend to bridge the gap between theory and practice.

We yield mentorship and guidance to all those fellow students at undergraduate level who are passionate developing impactful solution initiatives that could facilitate and aid the society. 

Developer’s Student community hosts structured seminars , events ,regular  coding contests to inculcate peer-to-peer learning  and bestow both awareness and practice on ongoing trending technologies in corporate.

Our objective lies solemnly on training students in varied demanded skills of the time and at the same time connecting you with the professionals all over india to motivate you.

We embed our assistance by providing resources of various dimensions which comes along with varied courses rendered by us.
                </div>
            </div>
            
            <div className={styles.rightSection}>
                <img className={styles.disImage} src="https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            </div>
        </div>
    )
}

export default HomeSection
