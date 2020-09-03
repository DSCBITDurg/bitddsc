import React from 'react';



// import css file
import styles from './ContactPage.module.css';

function ContactPage() {
    return (
        <div className={styles.container}>
            <h1>Contact</h1>
            <div className={styles.ContactPage}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnYNt_LOn9Y03oac7Ws7RiZHb8R6Vg5P7dvvE2Id-r_4iCcA/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0" title="Contact">Loading…</iframe>
            </div>
        </div>
    );
}

export default ContactPage;
