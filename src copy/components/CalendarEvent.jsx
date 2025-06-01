import styles from './CalendarEvent.module.css'
import React from 'react'

export default function CalendarEvent(props) {
    const { eventName, description, date, time, location } = props;
    return (
        <div className={styles.calendarContainer}>
            <img src="/decorations/calendar-ring.png" className={`${styles.calendarRing} ${styles.calendarRingLeft}`}></img>
            <img src="/decorations/calendar-ring.png" className={`${styles.calendarRing} ${styles.calendarRingRight}`}></img>
            <div className={styles.eventNameContainer}>
                <h3 className={styles.eventName}>{eventName}</h3>
            </div>
            <div className={styles.eventInfoContainer}>
                <div className={styles.eventScrollWindow}>
                    <p className={styles.eventDescription}>{description}</p>
                    <div className={styles.eventInfo}>
                        <p>Date: {date}</p>
                        <p>Time: {time}</p>
                        <p>Location: {location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
