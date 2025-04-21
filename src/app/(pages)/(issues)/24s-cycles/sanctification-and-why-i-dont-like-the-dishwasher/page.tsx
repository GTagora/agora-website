import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Chris Moon";
  const credit = "Photo by Chris Moon";
  const title = "sanctification, and why i don’t like the dishwasher";
  const date = "April 26, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24s-cycles/chris.jpg"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            Growing up, I never wanted to use the dishwasher. I thought it was
            such a waste of water and energy (which, with modern dishwashers, is
            not the case at all; in fact, hand-washing dishes uses more water).
            More than that, however, was my conviction that dirty dishes put
            through the dishwasher never came out completely clean.
            Occasionally, I would find remnants of a previous meal left on a
            bowl or a spoon. And to me, it made sense; how could I trust that
            this unseen washing cycle was really doing its job if there was
            always some blemish left after? I had no faith that my dishwasher
            truly worked, as it only ever yielded almost-but-not-quite-clean
            dishes for me to deal with.
            <br />
            <br />
            As one progresses in the Christian journey, the necessity of both
            salvation and sanctification are revealed. For the saved believer,
            salvation is a one-time occurrence in our life. Jesus does not
            continually return to the world to offer Himself up, over and over
            again, but will return once more “not to deal with sin but to save
            those who are eagerly waiting for him” <Reference number={1} />. As
            such, the gift of salvation, having been received by the believer,
            happens once in our life. Paul writes to the Ephesians, it is “by
            grace, through faith” that we have been saved, a gift from God and
            not our own doing “so that no one may boast”{" "}
            <Reference number={2} />.
            <br />
            <br />
            While salvation is a singular event, sanctification is a lifelong
            occurrence. Throughout the New Testament, God reveals the necessity
            of being sanctified throughout our transformed life on earth. In
            Luke 9:23, we are told to take up our cross daily. Unlike Jesus, who
            carried the cross once for all, we are called to carry ours every
            day. The incomplete and present-day nature of sanctification is
            further made clear in other passages as well. In Philippians 1:6,
            the God of covenants has promised us that the work He has begun in
            our lives (after being saved) will be brought to completion on the
            day of Jesus’s return. As seen in Hebrews 10:14, through Jesus’
            sacrifice, we are made perfect through Him. Notice, however, in both
            of these passages, the tense is indicated as present/future
            oriented; He will bring to completion the work for those of us being
            sanctified. Where we have been saved, by a salvation that needs to
            occur only once, God’s work in us does not end there. We still flow
            through the cycles of sin, repentance, forgiveness, and
            sanctification until the “day of Jesus Christ”, of which only God
            knows when that day will come.
            <br />
            <br />
            In a way, the process of sanctification is a lot like the
            dishwashing process. Dishes get dirtied and need to be cleaned;
            likewise, when we sin and fall short of His glory, we must repent
            and be cleansed by His blood. However, dishes do not stay clean
            forever even after being washed. They are used, dirtied, and must be
            cleaned, over and over; after being saved, we will continue to sin,
            ask for forgiveness, and be renewed by Him. Where Christ needed to
            die for sins only once and our acceptance of this saving grace needs
            to happen only once, everyday in our life on earth brings the need
            to be restored, carried, sanctified again.
            <br />
            <br />
            Throughout my life I have seen dishes slip out of my hands and
            shatter, rendered unusable and sometimes, cutting and wounding me.
            Each time this happens, it serves as a humiliating reminder of my
            own weaknesses and shortcomings. I am often prone to wonder what the
            point of this cleaning process is, if the process of getting dirty
            and getting hurt, time and time again, is inevitable. Though the
            continuous need to be sanctified can be disheartening and difficult,
            it is necessary as a fallen human being striving to live as a child
            of God. God does not view me as a chore to get out of the way, a
            burden and bother standing between Him and His will. Rather, God
            loves me so much that not only did He give His life to save me once,
            but cares so much to provide constant and present restoration in the
            midst of waiting for the eternal hope He has promised me.
            <br />
            <br />
            Unlike a dishwasher, God is not fault-prone or errant. In my
            mistaken point of view, washing the dishes with my own hands is
            cleaner and more efficient. The reality of the superior efficiency
            of a dishwasher reveals that it, in fact, has a better understanding
            of how much water, power, and soap to use. Where my limited
            understanding fails, God’s understanding surpasses what I know or
            can even see. Though the dishes He washes may come out of the cycle
            with blemishes still, this is not an indication of an imperfect God;
            rather, the work in our lives is not yet complete. With our faults
            and imperfections, God reminds us that He has use for us yet{" "}
            <Reference number={3} />. Though our lives may fall and shatter in
            our own hands, we are held by, cared for, and sanctified by the same
            One who authored our salvation <Reference number={4} />.
          </div>
          <div className="mt-8 leading-6">
            <p className="mb-3 font-bold">Footnotes</p>
            <Footnote number={1} text="Hebrews 9:28" /> <br />
            <Footnote number={2} text="Ephesians 2:8-9" /> <br />
            <Footnote
              number={3}
              text="2
            Corinthians 12:9-10"
            />{" "}
            <br />
            <Footnote number={4} text="Hebrews 2:11" /> <br />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
