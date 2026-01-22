import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Sean Kim";
  const credit = "Illustration by Joshua Park";
  const title = "The Perennial Plant";
  const date = "April 23, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25s/the-perennial-plant.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <i>
              “Perennials are plants that die back to the ground in fall or
              winter but regrow from their roots each spring, enduring harsh
              seasons and returning year after year.”
            </i>
            <br />
            <br />
            From the lifeless dust of the earth, He grants me <br />
            breath. <br />
            Breaking past the suffocating mass of dark and dirt, <br />
            I arise. <br />
            Unfurling towards vibrant, radiant possibility, <br />
            my hands extend. <br />
            Basking in the glory and serenity of Creation, <br />
            I praise and rejoice. <br />
            <br />
            Then winter comes. <br />
            Like a thief in the night, a new storm arrives. <br />
            Thunder and cold infuse my soul, <br />
            lightning and rain rattle my bones. <br />
            <br />
            I know life isn’t always sunshine and rainbows. <br />
            I was prepared, or at least I thought I was. <br />
            But sometimes it’s just a little too much. <br />
            Sometimes I forget sunshine and rainbows ever existed, <br />
            lose hope they’ll ever return. <br />
            And I just want everything to <br />
            stop. <br />
            <br />
            But <br />
            suffering is easy; <br />
            gratitude is harder. <br />
            So scarred and battered, <br />
            broken and bruised, <br />
            I’ll remain standing
            <br />
            <i>
              Defiant <br />
              Triumphant <br />
              Reliant.
              <br />
            </i>
            <br />
            Should the drought wilt my leaves, I shall grow anew. <br />
            <i>What?</i>
            <br />
            Should the whole earth tremble, I shall remain rooted. <br />
            <i>How?</i>
            <br />
            Should the storm bend the stalks, I shall still fight. <br />
            <i>Why?</i>
            <br />
            <br />
            Because <br />
            He is the Creator, the Shepherd, the Gardener
            <br />
            and He is with me. <br />
            For even as winter winds dissolve memories of summer days, <br />
            even as the night somehow becomes darker than before, <br />
            His steadfastness never fails to make itself known. <br />
            In brilliant radiance I see: <br />
            sorrow that softened my heart, <br />
            loneliness that urged gratitude, <br />
            pain that changed my views, <br />
            toil that inspired another. <br />
            As a vine relies on the skyward arbor <br />
            I do not stand tall&mdash;I am lifted high. <br />
            <br />
            For I am the plant that will return again and again! <br />
            I am the plant beloved by the Gardener! <br />
            For through thunder and cold, lighting and rain,
            <br />
            the sun has never failed to reappear. <br />
            And as surely as glorious dawn is to come, <br />I will return!
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
