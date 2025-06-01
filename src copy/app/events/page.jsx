import styles from './page.module.css';
import EventsDropdown from '@/components/EventsDropdown';
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

// define url builder
const builder = imageUrlBuilder(client);

export default async function Events() {
  // await on sanity for posters
  let events = await getEvents();
  let posters = await getPosters();
  posters = posters.concat(posters);  // duplicate for smoother scroll


  return (
    <div className={styles.eventsWrapper.pageMinWidth}>
      <div className={styles.bannerContainer}>
        <img src="/events_banner.png" alt="Events Banner"/>
        <div className={styles.bannerHeader}>
          <h1>Join Us At Our Next Event?</h1>
        </div>
      </div>

      <div className={styles.eventTitle}>
        <h1>
          <img
            src="/decorations/star.png"
            className={'star ' + styles.starTopLeft}
            alt="Star decoration"
          />
          Upcoming Events
        </h1>
      </div>

      <EventsDropdown events={events} />

      <div className={styles.pastEventTitle}>
        <h1>
          <img
            src="/decorations/star.png"
            className={'star ' + styles.starTopLeft}
            alt="Star decoration"
          />
          Past Events
        </h1>
      </div>
      <div className={styles.pastEvents}>
        <div className ={styles.scrollerWrapper}>
          <div className={styles.scrollerContent}>
        {posters.map((item, index) => (
           <img
            className={styles.pastEventImage}
            src={urlFor(item.image).url()}
            alt={item.name}
            key={index}
          />
        ))}
        </div>  
        </div>
      </div>
    </div>
  );
}


async function getEvents() {
  const query = `*[_type == "event"] | order(index asc) {
    index,
    name,
    long_description,
  }`

  const posts = await client.fetch(query);
  return posts;
}

async function getPosters() {
  const query = `*[_type == "poster"] | order(index asc) {
    index,
    name,
    image,
  }`

  const posts = await client.fetch(query);
  return posts;
}

function urlFor(src) {
  return builder.image(src);
}