import styles from './Navbar.module.css'
import React from 'react'
import Link from 'next/link'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <Link id='home' className={styles.button} href='/home'>Home</Link>
            <Link id='events' className={styles.button} href='/events'>Events</Link>
            <Link id='about' className={styles.button} href='/about'>About</Link>
            <Link id='connect' className={styles.button} href='/connect'>Connect</Link>
        </nav>
    )
}