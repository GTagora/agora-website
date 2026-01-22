import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Daeyong Kwon";
  const credit = "Photo by Josh Chung";
  const title = "Anecdote of the Crop";
  const date = "April 23, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25s/anecdote-of-the-crop.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            A sower went out to sow. And as he sowed, some seeds fell along the
            path. Other seeds fell on rocky ground. Other seeds fell among
            thorns. Other seeds fell on good soil. <Reference number={1} /> But
            at night, the enemy came to the good soil and sowed weeds among the
            wheat and went away. So when the plants sprung up from the soil and
            rocky ground, the weed did also. <Reference number={2} /> <br />
            <br />
            And among the wheat in the good soil, there was a wheat sprout that
            beheld the weeds growing tall and strong. For the weed was similar
            to the wheat sprout in appearance, the wheat sprout said to itself,
            “Let me be like them, that I may be bountiful in my appearance.” And
            so it stretched itself upward, caring little for its roots or the
            grain it was meant to bear. <br />
            <br />
            Days passed, and the weeds were still taller and more bountiful in
            appearance than the wheat sprout. The wheat sprout said again, “Why
            should I labor to keep up with mere weeds? When the sower comes, he
            will see that I have borne grain while the weeds have not.” Then it
            looked to the wheat on the rocky ground, which had sprung up
            quickly, and said “Let me bear much grain at once, that the sower
            may delight in me.”
            <br />
            <br />
            But the sprout had not yet laid deep roots, and as the days passed,
            the sun rose high and scorched every field. The wheat in the rocky
            soil, having no root, withered away. <Reference number={3} />
            The wheat sprout was scorched also, and was left withering. The
            wheat sprout lamented, “I have seen everything that is done under
            the sun, and behold, all is vanity!” <Reference number={4} /> <br />
            <br />
            Then, a strong wind blew, and bent a flourishing wheat stalk towards
            the withering sprout. <Reference number={5} /> The wheat sprout
            marveled, saying, “How is it that this stalk, though standing taller
            than I, does not wither? How is it that this stalk, planted in the
            same soil, has borne much grain?” <br />
            <br />
            The wheat stalk answered, “I have laid my roots deep into this soil
            and drawn strength from it. For the grain cannot bear itself unless
            it abides in good soil. Whoever abides in good soil and the soil in
            him, he it is that bears much grain, for apart from the soil the
            wheat can do nothing.” <Reference number={6} /> Humbled and amazed,
            the wheat sprout started to lay its roots deeper into the soil, and
            relied on it to produce grain. <br />
            <br />
            When considering writing this piece, I had one goal in mind: to
            share the essence of John 15:1-8, a passage that recently redefined
            the way I endured through spiritual trials. At first, the message
            can seem trivial: “Just abide in God. Just have faith. Spend more
            time with God.” But when contextualized in the domain of trials and
            tribulations, I think this passage unveils a rather unintuitive yet
            beautiful approach to confronting the unpleasant.
            <br />
            <br />
            I believe all trials can be overcome through the Fruit of the
            Spirit. Oftentimes though, we try to bear this fruit ourselves. We
            expect ourselves to figure it out, to become a more loving, joyful,
            patient person. But who are “we” without the Holy Spirit? Where will
            we source the “nutrients” for the fruit? Without the Spirit, bearing
            this fruit becomes an impossible task. Instead of overexerting
            ourselves and focusing on the issue at hand, taking a step back and
            drawing “nutrients” from the Spirit first may be the more productive
            answer.
            <br />
            <br />
            Taking inspiration from the many garden-themed parables in the
            Bible, this piece chronologically outlines my past experiences and
            the unproductive ways I dealt with them in the form of a parable,
            starting from my freshman year in college until now. Translating
            this to my perspective, I am the wheat sprout. The weeds (tares, a
            specific type of weed that resembles wheat) are people who appear
            just as happy and content, if not to a greater extent, with their
            lives despite not knowing Christ. The wheat sowed on rocky ground is
            as Jesus describes: “one who hears the word and immediately receives
            it with joy … and when tribulation or persecution arises … falls
            away.” <Reference number={3} /> And the wheat stalk at the end is a
            specific pastor who has given me guidance throughout my life.
            <br />
            <br />
            Many parts of this anecdote, including the ending, are left
            open-ended for interpretation. I hope that you, with your unique
            story, can somehow relate to my story and interpret it in your own
            way. What does it mean to “lay deep roots,” “abide,” or “draw from
            the soil”? For me, it’s spending time with God through scripture
            reading and prayers of thanksgiving. To you, it might mean worship,
            fellowship, prayer, reading, or even serving. Whatever it may be,
            next time you find yourself overwhelmed by the turbulence of life,
            take a step back and equip yourself first by drawing from the
            Spirit.
          </div>
          <div className="mt-8 leading-6">
            <p className="mb-3 font-bold">Footnotes</p>
            <Footnote number={1} text="Matthew 13:3-9" /> <br />
            <Footnote number={2} text="Matthew 13:24-30" /> <br />
            <Footnote number={3} text="Matthew 13:18-23" /> <br />
            <Footnote number={4} text="Ecclesiastes 1:14" /> <br />
            <Footnote number={5} text="Matthew 7:24-27" /> <br />
            <Footnote number={6} text="John 15:1-8" /> <br />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
