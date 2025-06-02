import styles from "./page.module.css";
import React from "react";
import ProfileCard from "../../components/ProfileCard";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

// define url builder
const builder = imageUrlBuilder(client);

export default async function About() {
  // await on sanity for pictures
  const boardMembers = await getPictures();

  return (
    <section>
      <img src="/about-banner.png" className={styles.teamPicture} />
      {/* <div className={styles.how}>
        <img className={styles.beganStar} src="/decorations/star.png" />
        <h1>How It All Began?</h1>
      </div>
      <div className={styles.beganContainer}></div> */}
      <div className={styles.boardHeaderContainer}>
        <img
          src="/decorations/star.png"
          className={"star " + styles.starTopLeft}
        ></img>
        <img
          src="/decorations/star.png"
          className={"star " + styles.starBotRight}
        ></img>
        <h1 className={styles.boardText}>
          Meet Our <br />
          Board
        </h1>
      </div>
      <div className={styles.boardGrid}>
        {boardMembers.map((member, index) => {
          return (
            <ProfileCard
              key={index}
              name={member.name}
              position={member.role}
              major={member.major}
              year={member.year}
              src={urlFor(member.image).url()}
            />
          );
        })}
      </div>
    </section>
  );
}

async function getPictures() {
  const query = `*[_type == "photo"] | order(index asc) {
    index,
    name,
    image,
    role,
    major,
    year
  }`

  const posts = await client.fetch(query);
  return posts;
}

function urlFor(src) {
  return builder.image(src);
}