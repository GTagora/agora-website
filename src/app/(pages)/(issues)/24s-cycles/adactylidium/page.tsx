import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Catherine Tian";
  const credit = "Illustration by Olivia Hu";
  const title = "Adactylidium";
  const date = "April 26, 2024";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/24s-cycles/catherine.png"
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
              “By faith we understand that the universe was formed at God’s
              command, so that what is seen was not made out of what was
              visible.” <br />{" "}
              <div className={styles.rightAlign}>—Hebrews 11:3 </div>
            </i>
            <br />
            <div className={styles.paragraph}>
              Science does not contradict God. Rather, it explains the ways that
              God has created the universe. I often find that the more I learn
              about science—the ways that two molecules collide to form a new
              one, or the way acceleration due to gravity remains at 9.8m/s
              <sup>2</sup> on Earth—the more revealing it is of just how much
              greater God is compared to our human existence. The intricate
              structures that keep the very fabric of our reality bound together
              become increasingly apparent as I acquire more knowledge about our
              universe. It is incomprehensible and could only have been breathed
              into existence by our all-powerful God.
            </div>
            <div className={styles.paragraph}>
              One of the most obvious—and perhaps cliché—examples of God’s power
              is the “miracle of life.”{" "}
            </div>
            <div className={styles.paragraph}>
              Adactylidium is a genus of mites in the kingdom Animalia and
              family Acarophenacidae. These mites are typical residents of the
              Middle East and feast on the eggs of an insect called a thrip. Yet
              what sets these tiny creatures of the Earth apart from other
              insects is their unique—and quite honestly disturbing—life cycle
              where these mites take the meaning of “the miracle of life” to a
              whole new level.{" "}
            </div>
            <div className={styles.paragraph}>
              From birth, the female Adactylidium begins to find a new thrip egg
              to feed on as it prepares itself to become a mother. Yet the male
              mite barely sees the light of day and dies shortly after birth. It
              does not mate, it does not feed; it simply waits for its imminent
              death. For years, scientists couldn’t figure out why these male
              mites exhibited such a strange life cycle. After all, a creature
              born with its only purpose being death seemed like a rather
              depressing and futile existence.{" "}
            </div>
            <div className={styles.paragraph}>
              Eventually, the truth behind this uncommon reproductive strategy
              was revealed. A female Adactylidium mite is born with fertilized
              eggs already inside of her. She carries what will become several
              female mites and one single male mite. In a few days, these eggs
              will hatch inside of her, giving rise to the next generation of
              crawling mites ready to repeat the process again. The male then
              mates with every single one of his sisters in a twisted method of
              fetal incest before they collectively decide to eat their way out
              of the mother’s womb
              <Reference number={1} />
              <Reference number={2} />. I guess in that sense, Adactylidium
              mothers win the parental sacrifice award.{" "}
            </div>
            <div className={styles.paragraph}>
              While the process itself is no doubt mindboggling (because what
              part of fetal incest isn’t), I found myself strangely sympathetic
              to the seemingly devastating life of a male Adactylidium mite: one
              where you are doomed to die with your end written before you are
              even born. It struck a chord in me that I didn’t expect to feel
              from a creature I would have only deemed disgusting. And yet, I
              couldn’t help but feel a sense of loss in my soul.
            </div>
            <br />
            <i>
              “For afore the harvest, when the bud is perfect, and the sour
              grape is ripening in the flower, he shall both cut off the sprigs
              with pruning hooks, and take away and cut down the branches.”
              <br />
              <div className={styles.rightAlign}>—Isaiah 18:5 </div>
            </i>
            <br />
            <div className={styles.paragraph}>
              Like millions of students around the world, I began my first
              semester of college in August of 2023. Certain that I would face
              trials but unsure of what those trials would actually be, I was
              thrust into the world of independence with nothing but
              encouragement and cliches from upperclassmen to guide me through a
              forest of unknowns.{" "}
            </div>
            <div className={styles.paragraph}>
              I came into the Fall semester with friendships that I thought were
              not bound by time or distance. The 775 miles between us were no
              matter with the blessings of FaceTime and blind optimism. Summer
              of 2023 gave me the chance to see brothers and sisters in Christ
              who exemplified the love He calls us to demonstrate in ways I had
              only ever heard in the sermons. For the first time in my life, I
              felt like God had blessed me with what my heart longed for the
              most: intimacy, genuine connection, and the love of those who
              would walk with me, hand in hand, down the narrow road.{" "}
            </div>
            <div className={styles.paragraph}>
              But time proved to be a test that we would not pass. As August
              turned into September and Fall turned into Winter, the grasp with
              which I held onto these relationships began to slip through my
              fingertips. I felt the distance between us grow more and more with
              each call, each conversation. Desperate for the feeling of comfort
              I had just months prior, I did everything I could in an attempt to
              fix what was so clearly falling apart right before me. I was
              swimming against a current too strong to overcome. Slowly, then
              all at once, I felt a loss like I had never felt before as I
              watched those I loved drift further and further away. It felt
              deep, gut-wrenching. But most of all, it felt wasteful.{" "}
            </div>
            <div className={styles.paragraph}>
              For countless months, I asked God why He took away something that
              I thought was so right. Why did You take away something that
              glorifies You? Is that not what You want? He had finally given me
              the relationships that He spoke of in His word. The kind that is
              edifying, uplifting, spiritually nourishing. He had given me a
              taste of what could be but then so cruelly stripped me of it. Why
              should He take that away, abandon me with nothing but what I had
              before and a new ache in my soul that longed to be filled once
              again?{" "}
            </div>
            <div className={styles.paragraph}>
              And He spoke to me clearly: Through this, you can see me.
            </div>
            <br />
            <i>
              “The Lord is the portion of mine inheritance and of my cup: thou
              maintainest my lot.” <br />
              <div className={styles.rightAlign}>—Psalm 16:5 </div>
            </i>
            <br />
            <div className={styles.paragraph}>
              As I sit at my desk writing this piece, I can feel the strings
              that once connected me to my high school friends, my teammates, my
              chosen family, slowly wither away. I used to think that “chosen
              family” included the people that I chose to be in my life, that
              late-night ramen and trauma bonding over the hellish depths of AP
              French was enough to make a friendship last forever. Now I’m not
              so sure.{" "}
            </div>
            <div className={styles.paragraph}>
              What I once thought was an unbreakable rope has now revealed
              itself to be nothing more than a thread. Destined to snap at some
              point where we will then finally drift apart, the thread will be
              lost in the wind while I am left with only the memories we once
              had the honor of sharing. And even those too will one day fade
              away as I return to the soil that gave me and the{" "}
              <i>Adactylidium</i> mites the life we lived.
            </div>
            <div className={styles.paragraph}>
              When I look in my hands and see the fragments of these
              relationships I desperately still cling to, I realize just how
              little I am able to grasp and incomparably, how much God is able
              to create with just His breath. My line of vision is only limited
              to the sum of all my gains and losses of my past, but He sees
              more. And in that knowledge, I rest assured of His goodness, His
              righteousness, and His peace as I hand Him these broken strings
              and my brokenness to create something far greater than I could
              ever have imagined. Because in this very moment where I am
              existing, I have yet to lose all the people I will in this
              lifetime. But I have also yet to meet all the people who will not
              leave: the ones who will eventually stay by my side in the race
              toward eternal life with our Father in Heaven.{" "}
            </div>
            <br />
            <i>
              {" "}
              Verily, verily, I say unto you, except a corn of wheat fall into
              the ground and die, it abideth alone: but if it die, it bringeth
              forth much fruit. <br />
              <div className={styles.rightAlign}>—John 12:24 </div>
            </i>
            <br />
            <div className={styles.paragraph}>
              So maybe chosen family refers to the family that God has chosen
              for us. I see that God places certain people in my life at a
              moment in time with a specific purpose: a purpose that will one
              day be fulfilled, its end written before I even know it has begun.
              Once complete, they are no longer meant to be in this chapter of
              your journey, nor you in theirs.{" "}
            </div>
            <div className={styles.paragraph}>
              Perhaps losing is gaining in the eyes of God, a vision of the
              things we cannot see and quite frankly, do not need to. After all,
              Jesus Himself lived to die for our sake so that we may reunite
              with Him in heaven one day, and even his closest disciples could
              not fathom the sacrifice He was destined to make. In Matthew
              16:21-23, Peter confronts Jesus after Jesus foretells His coming
              death to His disciples and claims that He must suffer for the sake
              of man and die on the cross. But Jesus rebukes Peter, reminding
              him of his place and his inability to set his eyes on the things
              of God and not of this world.{" "}
            </div>
            <div className={styles.paragraph}>
              I’ve seen the ways that His path for me far outcompetes any
              semblance of a plan or desire that I could ever conceivably have
              or create. Since He holds the pen that writes my story, I, the
              character, can find freedom in surrender. My story may be filled
              with hills and valleys and inconsistent terrain but my
              inconsistency reminds me that He is my sole source of constancy in
              a life ever shifting. The rock on which I stand, the Father I run
              to with open arms each time I lose a friend. My unknown is not His
              unknown: it is His work.{" "}
            </div>{" "}
            <div className={styles.paragraph}>
              So, is it possible that these incestuous creatures hold more
              meaning than we would ever think to give them credit for? Can it
              be that the life of the Adactylidium reminds us of a purpose
              through the pain? I believe so. If God has truly created and
              articulated everything down to the way these mites continue to
              crawl the earth, how secure I can be knowing that the story He has
              planned for me and the stories He will write for those that
              coincide with mine is beautifully and wonderfully made. Perhaps
              this is where I can find peace, knowing that the beauty of our
              paths crossing is just that: crossing and then continuing on
              without each other just as we existed before. Left with only the
              whispers and footprints that they have left behind, we carry on
              with God to guide us ahead.{" "}
            </div>{" "}
            <div className={styles.paragraph}>And that is enough.</div>
          </div>
          <div className="mt-8 leading-6">
            <p className="mb-3 font-bold">Footnotes</p>
            <Footnote
              number={1}
              text="Tessa Marshall (writer), Edie Bush (graphics). “Worse than Oedipus.” Farrago, farragomagazine.com/article/farrago/2017-08-15-worse-than-oedipus/. Accessed 10 Apr. 2024. 
"
            />{" "}
            <br />
            <Footnote
              number={2}
              text="E. A. Elbadry, M. S. F. Tawfik, Life Cycle of the Mite Adactylidium sp. (Acarina: Pyemotidae), a Predator of Thrips Eggs in the United Arab Republic, Annals of the Entomological Society of America, Volume 59, Issue 3, 1 May 1966, Pages 458–461, https://doi.org/10.1093/aesa/59.3.458
"
            />{" "}
            <br />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
