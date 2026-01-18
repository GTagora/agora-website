import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Eddy Huang";
  const credit = "Photo by Matthew Lai";
  const title = "Stars";
  const date = "December 6, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          {/* <iframe className={styles.video} src='VIDEO LINK HERE'/> */}
          <Image
            className={styles.image}
            src="/issues/25f/stars.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <p>
              God didn’t plant these dreams for nothing,
              <br />
              nor whisper them like idle breeze
              <br />
              Each spark, each vision, each quiet pull
              <br />
              is a star He placed for you to reach
            </p>
            <p>
              He set them there when your strength was weak
              <br />
              when your heart was unsure,
              <br />
              trusting that the gravity of faith
              <br />
              would draw you to what was written
            </p>
            <p>
              When the climb feels like a distant sun,
              <br />
              when nights stretch silent and long
              <br />
              Remember, this galaxy above
              <br />
              was first a thought He planned for you
            </p>
            <p>
              So hold your dreams like constellations,
              <br />
              burning bright against the dark,
              <br />
              For if God thought you could,
              <br />
              then step by step,
              <br />
              you will.
            </p>
            <p>
              <em>
                Inspirations from Jeremiah 29:11, Ephesians 2:10, and Romans
                8:28{" "}
              </em>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
