import styles from './page.module.css'
import React from 'react'
import Link from 'next/link'

export default function Connect() {
    // will automatically look under /public/partners for src
    const partners = [
        {src: "liberty-mutual.png", alt: "Liberty Mutual"},
        {src: "microsoft.png", alt: "Microsoft"},
        {src: "spacex.png", alt: "SpaceX"},
        {src: "hiya.png", alt: "Hiya"},
    ]

    return (
        <section className={styles.connectBody}>
            <div className={styles.bannerContainer}>
                <img src='/connect-banner.jpg'></img>
                <div className={styles.bannerHeader}>
                    <h1>Get Involved With Us!</h1>
                </div>
            </div>
            <div>
                <div className={styles.container}>
                    <div className={`${styles.header} ${styles.highlight}`}>
                        <img src="/decorations/star.png" className={'star ' + styles.eventsStarTopLeft}></img>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdkvk3rhyuLiNZaOcl3-RcKfBfSGm5n1rK1O29jJkYBXZcLAw/viewform" target="_blank"><h1>Become a Member?</h1></Link>
                        <img src="/decorations/star.png" className={'star ' + styles.eventsStarTopRight}></img>
                        <img src="/decorations/link-arrow.png" className={styles.linkArrow}></img>
                    </div>
                    <div className={styles.memberContent}>
                        <p>Want to stay in the loop on events and opportunities? Fill out the form to become a member!</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <img src="/decorations/star.png" className={'star ' + styles.eventsStarTopLeft}></img>
                        <h1>Our Partners:</h1>
                        <img src="/decorations/star.png" className={'star ' + styles.eventsStarTopRight}></img>
                    </div>
                    <div className={styles.partnerContent}>
                        {partners.map((partner, i) => {
                            return (
                                <img key={i} src={`/partners/${partner.src}`} alt={partner.alt}></img>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
