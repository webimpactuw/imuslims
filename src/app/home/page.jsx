import styles from './page.module.css';
import React from 'react'
import Link from 'next/link'
import CalendarEvent from '../../components/CalendarEvent';
import { client } from "@/sanity/lib/client";

export default async function Home() {
    // retrieve events from CMS
    const events = await getEvents();

    return (
        <section className={styles.home}>
            <img src="/home-banner.png" className={styles.banner}></img>
            <div className={styles.homeContent}>
                <div className={styles.who}>
                    <div className={styles.whoHeading}>
                        <img src="/decorations/star.png" className={'star ' + styles.whoStarTopLeft}></img>
                        <h1 className={styles.header}>Who are we?</h1>
                    </div>
                    <div className={styles.whoBody}>
                        <p>
                            Our organization is dedicated to providing Muslim students at the iSchool with professional
                            and developmental support while fostering an inclusive environment. We empower Muslim students
                            and allies as information and technology leaders by promoting connection, establishing
                            networks, and building community.
                        </p>
                    </div>
                </div>
                <div className={styles.whoFooter}>
                    <Link href='/about'><p className={styles.link}>Learn More About Us!</p></Link>
                </div>

                <div className={styles.events}>
                    <div className={styles.eventsHeading}>
                        <img src="/decorations/star.png" className={'star ' + styles.eventsStarTopLeft}></img>
                        <h1 className={styles.header}>Upcoming Events</h1>
                        <img src="/decorations/star.png" className={'star ' + styles.eventsStarTopRight}></img>
                    </div>
                    <div className={styles.eventsLink}>
                        <Link href='/events'><p className={styles.link}>View All Events</p></Link>
                    </div>
                    <div className={styles.eventsContainer}>
                        {events.map((obj, i) => {
                            return <CalendarEvent
                                key={i}
                                eventName={obj.name}
                                description={obj.description}
                                date={obj.date}
                                time={obj.time}
                                location={obj.location}
                            ></CalendarEvent>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

async function getEvents() {
  const query = `*[_type == "calendarEvent"] | order(index asc) {
    index,
    name,
    description,
    date,
    time,
    location
  }`

  const posts = await client.fetch(query);
  return posts;
}