import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ name, position, major, year, src }) => {
  return (
    <>
      <div className={styles.pictureContainer}>
        <img
          src={src}
          alt="headshot of member"
          className={styles.profileImage}
        />
        <div className={styles.pictureInfoContainer}>
          <h2>{name}</h2>
          <h3>{position}</h3>
          <h3>{`${major} - ${year}`}</h3>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
