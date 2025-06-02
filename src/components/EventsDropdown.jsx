"use client";
import styles from './EventsDropdown.module.css';
import React, { useRef, useState } from "react";

export default function EventsDropdown(props) {
    const { events } = props;
    const [activeIndex, setActiveIndex] = useState(null);
    const panelRefs = useRef([]);

    /* To add new upcoming events create or edit an object in this array. The "eventName" is the title 
that will be displayed for the event. The "eventDetails" are what is shown when the event is expanded */
    // const upcomingEventsData = [
    //     {
    //         eventName: "Upcoming Event 1",
    //         eventDetails:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    //     {
    //         eventName: "Upcoming Event 2",
    //         eventDetails:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    //     {
    //         eventName: "Upcoming Event 3",
    //         eventDetails:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    // ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.eventList}>
            {events.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                    <div className={styles.eventItem} key={index}>
                        <div
                            className={styles.eventName}
                            onClick={() => handleToggle(index)}
                        >
                            {item.name}
                            <div className={styles.arrows}>
                                <span>
                                    <img
                                        src={`/decorations/${isActive ? "/upArrow.png" : "/downArrow.png"}`}
                                        alt=""
                                    />
                                </span>
                            </div>
                        </div>
                        <div
                            ref={(el) => (panelRefs.current[index] = el)}
                            className={`${styles.eventWrapper} ${isActive ? styles.show : ""}`}
                            /* note that this way of doing the accordion menus scales with pixels and not with percentage*/
                            style={{
                                maxHeight: isActive
                                    ? `${panelRefs.current[index]?.scrollHeight}px`
                                    : "0px"
                            }}
                        >
                            <div className={styles.eventDetails}>{item.long_description}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}