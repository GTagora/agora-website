import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Lorien Cho";
  const credit = "Illustration by Lorien Cho";
  const title = "guidance for a seed";
  const date = "April 23, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25s/guidance-for-a-seed.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            for the shell to soften and split
            <br />
            and reveal tender green growth
            <br />
            <br />
            for the roots to brave rot
            <br />
            and disease, led through
            <br />
            earth and stone
            <br />
            <br />
            even a tiny seed
            <br />
            finds courage
            <br />
            in Your steadfast love.
            <br />
            <br />
            it must know that Your hand shepherds it
            <br />
            to sweet sunshine after torrential rain
            <br />
            it must hear that Your benevolence
            <br />
            inspires the starlings&apos; song at joyous dawn
            <br />
            it must see that Your patient love
            <br />
            is carved into the thousand wooden rings
            <br />
            of the nearby tree You watered.
            <br />
            <br />
            towards rich soil and pure water
            <br />
            to bracing air and ever-yawning sky
            <br />
            like the seed I am pulled from the mire
            <br />
            up from the depths of the earth
            <br />
            <br />
            tearing away choking weeds,
            <br />
            Your faithful hand brings me
            <br />
            away from dry ground
            <br />
            and into sunwarmed garden.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
