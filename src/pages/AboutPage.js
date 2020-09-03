import React from 'react';
import cx from 'classnames'

//import components
import ProfileCard from '../components/ProfileCard/ProfileCard';
// import css file
import styles from './AboutPage.module.css';

function AboutPage() {


    const dummyTeam = [
        {
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'gs rohit',
            desc: 'tech lead',
        },
        {
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'gs rohit',
            desc: 'tech lead',
        },
        {
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'gs rohit',
            desc: 'tech lead',
        },
        {
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'gs rohit',
            desc: 'tech lead',
        }
    ];

    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.aboutus,"animate__animated animate__backInLeft")}>

                <h1>About Us</h1>
                <p>
                    To multifold your academic knowledge inside college ,we pop
                    up with an intend to bridge the gap between theory and practice.We 
                    yield mentorship and guidance to all those fellow students at undergraduate 
                    level who are passionate developing impactful solution initiatives that could 
                    facilitate and aid the society. Moreover, we  hold structured seminars , events 
                    ,regular  coding contests to inculcate peer-to-peer learning  and bestow both awareness 
                    and practice on ongoing trending technologies in corporate.Our object lies solemnly on training 
                    you in varied demanded skills of the time and at the same time connecting you with the 
                    professionals all over india to motivate you.Lastly,we embed our assistance by providing
                    resources of various dimensions
                    which comes along with varied courses rendered by us.
                </p>

            </div>

            <div className={cx(styles.ourteam,"animate__animated animate__backInDown")}>
                <h1>Our Team</h1>
                <div className={styles.teampics}>
                    {
                        dummyTeam.map((member,index)=> <ProfileCard key={index} img={member.img} name={member.name} desc={member.desc}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
