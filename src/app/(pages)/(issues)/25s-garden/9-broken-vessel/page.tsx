import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Joshua Chung";
  const credit = "Illustration by Allison Chung";
  const title = "Broken Vessel";
  const date = "April 23, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25s/broken-vessel.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <table width="100%">
              <tr>
                <td>
                  a broken vessel <br />
                  discarded by the world
                  <br />
                  left in the dump
                  <br />
                  heavy with destitution
                  <br />
                  <br />
                  but He knows the vessel’s worth
                  <br />
                  and brings it to His place of growth
                  <br />
                  to be made new in His care
                  <br />
                  to be given purpose in His tending place
                  <br />
                  <br />
                  brought to the fount of life and light
                  <br />
                  the Gardener begins His work
                  <br />
                  washed clean and filled in mercy’s well
                  <br />
                  the vessel is prepared for greater things
                  <br />
                  <br />
                  the vessel sees only its cracks
                  <br />
                  where precious life seems to spill away
                  <br />
                  its flaws feel loud, its form unfit
                  <br />
                  unworthy of a higher way
                  <br />
                  <br />
                  but in the Gardener’s steady hands
                  <br />
                  filled from the fount of grace
                  <br />
                  the vessel is placed where life can grow
                  <br />
                  to pour His love in every place
                  <br />
                </td>
                <td>
                  his life flows through each fracture <br />
                  poured out upon the waiting ground
                  <br />
                  every break, bearing new life <br />
                  His glory revealed in its weakness
                  <br />
                  <br />
                  brought out from the dump
                  <br />
                  lifted and poured into by the Gardener’s hands
                  <br />
                  overflowing now with His life
                  <br />
                  no longer bound to destitution
                  <br />
                  <br />
                  to behold a garden
                  <br />
                  blooming in the desert wind
                  <br />
                  fruit and flowers where life was absent <br />
                  the Gardener has given this wretch purpose
                  <br />
                  <br />
                  this cracked vessel <br />
                  held in the Gardener’s grace
                  <br />
                  now sees its flaws as sacred spaces
                  <br />
                  where brokenness makes way for beauty
                  <br />
                  <br />
                  <i>
                    it has this treasure in jars of clay
                    <br />
                    to show the surpassing power
                    <br />
                    belongs to God
                    <br />
                    and not us.
                  </i>
                  <br />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
