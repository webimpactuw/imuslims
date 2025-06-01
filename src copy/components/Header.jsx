// inform Next.js that this is a client component, meaning it relies on input from the client
// this is to retain the bold style on the current button that is selected when you click on a page
"use client";

import styles from './Header.module.css';
import React from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerChangeOnScroll, navBtnChangeOnHover, selectNavBtn } from '../scripts/HeaderScript';


export default function Header() {
    const pathname = usePathname();

    // ignore if sanity studio
    if (pathname.includes('/studio')) {
        return;
    }

    useEffect(() => {
        selectNavBtn(pathname);
    }, [pathname]);

    // attach the header bg color script
    useEffect(() => {
        headerChangeOnScroll();
        navBtnChangeOnHover();
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link className={styles.logoContainer} href='/home'>
                    <img id="whiteLogo" src='/logos/imuslims-header-logo-white.png' className={`logo ${styles.logo} none`} alt='imuslims logo' />
                    <img id="blackLogo" src='/logos/imuslims-header-logo-black.png' className={`logo ${styles.logo}`} alt='imuslims logo' />
                </Link>
            </div>
            <Navbar />
        </header>
    )
}
