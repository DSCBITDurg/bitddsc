import React, {useState, useEffect} from 'react';
import cx from 'classnames';


//components
import EventCard from '../components/EventCard/EventCard';
import GalleryCard from '../components/GalleryCard/GalleryCard'
// import css file
import styles from './EventsPage.module.css';

// import firebase db
import {db} from '../firebase.js'

function EventsPage() {

    const [activeButtons,setActiveButtons] = useState({upcoming_events:true,past_events:false,gallery:false});
    // const allEvents = []
    // const pastEvents = []
    // const futureEvents = []    
    const [allEvents, setAllEvents] = useState([]);

    // const sortEvents = () => {
    //     allEvents.forEach(event => {
    //         if( event.done === false) futureEvents.push(event);
    //         else pastEvents.push(event);
    //     })
    //     console.log(allEvents, pastEvents, futureEvents)


    // }
    const convertToDate = (timestamp) => {
        let date = new Date(timestamp);
        return `${date}`
    }
    const fetchFromDb = async () => {
        await db.collection("events")
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
            // setAllEvents(data); // array of cities objects
            // data.forEach(event => allEvents.push(event))
            data.forEach(event => {
                let date = convertToDate(event.scheduled_on.seconds)
                event["date"] = date
            })
            setAllEvents([...data]);

        });
        // sortEvents();

    }

    useEffect( () => {
        // Update the document title using the browser API
        fetchFromDb();

      },[]);
    
    
    function handleButtonClick(e) {
        const name = e.target.name;
        console.log('name', name);
        const obj = {};
        Object.keys(activeButtons).forEach((key) => {
            if (key === name) {

                obj[key] = true;
            }
            else {
                obj[key] = false;
            }
        });

        setActiveButtons(obj);
    }
    

    return (
        <div className={cx(styles.container)}>
            <div className={cx(styles.buttons, "animate__animated animate__backInLeft")}>
                <button onClick={handleButtonClick} className={cx(styles.button, { [styles.active] : activeButtons.upcoming_events} )} name="upcoming_events">Upcoming Events</button>
                <button onClick={handleButtonClick} className={cx(styles.button, { [styles.active] : activeButtons.past_events} )} name="past_events">Past Events</button>
                <button onClick={handleButtonClick} className={cx(styles.button, { [styles.active] : activeButtons.gallery} )} name="gallery">Gallery</button>
            </div>
            <div className={cx(styles.events)}>
                { activeButtons['upcoming_events'] &&
                    
                    <div className={cx("animate__animated animate__backInRight")}>
                    <h1>Upcoming Events</h1>
                    
                        {
                            allEvents.map((event,index) => 
                                !event.done &&
                                <EventCard img={event.thumbnail} title={event.title} desc={event.description} date={event.date} form={event.form} key={index}/>
                            
                        )   
                        }
                         {
                            allEvents.filter((e) => e.done === false).length === 0 && <h5>We are trying our Best!</h5>
                        }
                    </div>
                }
                {
                    activeButtons['past_events'] &&
                    <div className={cx("animate__animated animate__backInRight")}> 
                    <h1>Past Events</h1>
                    
                        {
                            allEvents.map((event,index) => 
                            event.done && 
                            <EventCard img={event.img} title={event.title} desc={event.desc} date={event.date} key={index}/>
                        )   
                        }

                        {
                            allEvents.filter((e) => e.done === true).length === 0 && <h5>No events completed Yet!</h5>
                        }
                    </div>
                    
                }
                {
                    activeButtons['gallery'] &&
                    <div className={cx(styles.gallery,"animate__animated animate__backInRight")}>
                    
                    
                        {
                            allEvents.map((event,index) => 
                            <GalleryCard img={event.thumbnail} title={event.title} key={index}/>
                        )   
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default EventsPage;
