import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'


// import css file
import styles from './ContactPage.module.css';

function ContactPage() {
    return (
        <div className={styles.container}>
            <div style={{ width: "auto", height: 'auto' }}>
                <ResponsiveEmbed aspectRatio="16by9">
                    <embed  src="https://docs.google.com/forms/d/e/1FAIpQLSdnYNt_LOn9Y03oac7Ws7RiZHb8R6Vg5P7dvvE2Id-r_4iCcA/viewform?embedded=true" />
                </ResponsiveEmbed>
            </div>

        </div>
    );
}

export default ContactPage;
