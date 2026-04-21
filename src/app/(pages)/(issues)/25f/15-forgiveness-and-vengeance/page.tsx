import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Elliott Chen";
  const credit = "";
  const title = "Forgiveness & Vengeance";
  const date = "December 06, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          {/* <iframe className={styles.video} src='VIDEO LINK HERE'/> */}
          <Image
            className={styles.image}
            src="/issues/25f/forgiveness-and-vengeance.webp"
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
              <strong>Forgiveness and Vengeance</strong>
            </p>
            <p>
              When Charlie Kirk was murdered, the mask came off for a lot of
              people. It was rare that so many seemingly normal people would
              celebrate an assassination as though a great siege had been
              lifted. Kirk, though controversial, was predominantly a social
              media figure hosting open Q&A’s about current political issues. He
              wasn’t a CEO of a health insurance company with questionable
              ethics, nor was he a loud and bombastic Republican president. He
              was a guy coming to college campuses to have good-faith
              conversations to unite a bitterly divided country. In less than a
              day after he was murdered, thousands in sadistic glee called for
              more assassinations of other right-leaning figures. A debate
              quickly ensued over how Christians were supposed to respond. Many,
              myself included, favored a swift and harsh retribution; death
              penalty for the convicted assassin and consequences for those who
              celebrated his death. Others, especially those skeptical of all
              politics, opted for grace and advocated strictly prayer and
              forgiveness instead. They would embrace “third-wayism,” scorning
              any public association with one political party or another for the
              sake of the gospel.
            </p>
            <br />
            <p>
              It appears to me, thanks to an over-focus on the New Testament in
              Bible studies and seeker-friendly churches, that a significant
              portion of Christians today hold to the latter proposition. Even
              worse, I fear more have fallen for the trap of thinking that
              Christ merely calls us to be nice or to be kind. As CS Lewis, a
              famous Christian thinker, put it, “‘kindness’ is a quality fatally
              easy to attribute to ourselves on quite inadequate grounds…Thus a
              man easily comes to console himself for all his other vices by a
              conviction that ‘his heart’s in the right place,’ … we think we
              are kind when we are only happy.” <Reference number={1} /> Often
              the claim to be nice or kind is stolen moral valor to hide
              cowardice and a lack of biblical conviction.
            </p>
            <br />
            <p>
              Proponents for the grace-only approach, to forgive and pray, might
              cite New Testament (NT) teachings like “Do not resist the one who
              is evil. But if anyone slaps you on the right cheek, turn to him
              the other also.” <Reference number={2} /> They argue that by
              rejecting any retaliation, they follow Christ’s teachings and
              offer a chance at redemption. To prove the effectiveness of this
              approach, they might point out that early Christianity spread in
              spite of the sword of persecution, arguably making a greater
              evangelization impact through their deaths than in their lives.
              Thus, we should only forgive those who wrong us, to “love your
              enemies and pray for those who persecute you” for the sake of the
              Gospel. <Reference number={3} />
            </p>
            <br />
            <p>
              Yet the Bible does not limit its conception of God, or the
              definition of righteousness, to only grace. Throughout the Old
              Testament (OT), God executes just vengeance upon sin commands His
              people to resist corruption and purge evil from among them. When
              Israel fell into idolatry, He did not spare them from the same
              fate as the Canaanites before them. <Reference number={4} /> It
              was the early Christian’s revulsion, not passive sorrow, of evil
              that drove them to oppose infanticide in the Roman Empire and
              fight back five centuries of Islamic expansionism to preserve
              Christendom.
            </p>
            <br />
            <p>
              Too often, Christians are ignorant of OT stories outside of the
              sanitized interpretations they learn in Sunday school. In
              misunderstanding NT grace as being inoffensive, we have forgotten
              the holy judgement of God and cheapened grace. Thus, we must
              rediscover the space for vengeance inside our vision of love.
            </p>
            <br />
            <p>
              <strong>Old Vengeance</strong>
            </p>
            <p>
              The OT is clear: God’s just punishment for evil is destruction.
              Sunday school Noah’s Ark is generally a story about God’s covenant
              to never wipe out humanity again. But the real story is a dark
              account of the consequences of sin. During Noah’s time, angels who
              disobeyed God took wives from the humans, and in symbolic
              perversion begat the Nephilim. Humanity became depraved so fast
              that God regretted making man, and sought to reset all life on dry
              land. He only spared Noah and his immediate family because Noah
              was the only righteous person left. In the face of great evil, the
              solution God used was death: to give to humanity what they
              deserved for their sin. God afterward made a promise to never blot
              man off the face of the earth again, but His just vengeance
              remained.
            </p>
            <br />
            <p>
              Following soon after, God pronounced judgment upon Sodom and
              Gomorrah, saying, “the outcry against [them] is great and their
              sin is very grave.” <Reference number={5} /> Abraham interceded,
              pleading with God to not destroy the righteous with the wicked,
              and God promised to spare the city if he found even ten righteous
              people. And the only people who were spared were Lot, Abraham’s
              nephew, and his two daughters. Everyone else perished. Early in
              the OT, God’s punishment was death and destruction.
            </p>
            <br />
            <p>
              God switches to an indirect approach for judgement in Deuteronomy
              9. Before Israel' s conquest of Canaan, Moses reminds the
              Israelites that “the Lord your God is not giving you this good
              land to possess because of your righteousness…but because of the
              wickedness of these nations.” On account of the Canaanites ritual
              prostitution and child sacrifice, God used the Israelites to herem
              (to utterly destroy) the Canaanites and their perverted worship.
              Contrary to popular level criticism, this was not a command to
              kill every Canaanite, but a command to subdue and ultimately
              destroy their pagan culture reveling in sex and bloodshed.
            </p>
            <br />
            <p>
              God did not spare Israel from His judgement either. In the golden
              calf incident, the Levites were commended for their zeal in
              purging idolatry from their brethren. “Today you have been
              ordained for the service of the Lord, each one at the cost of his
              son and of his brother.”
              <Reference number={6} /> When Israel fell into the same sins as
              the Canaanites before them, God wiped them out and scattered them
              away through exile. He declares, “Because you have defiled my
              sanctuary with all your detestable things…My eye will not spare,
              and I will have no pity. A third of you shall die of pestilence…a
              third shall fall by the sword…and a third I will scatter to the
              winds and pursue with drawn sword.” <Reference number={7} />
            </p>
            <br />
            <p>
              Reading the other prophets yields the same idea that God will
              bring judgement for all sin, and is not partial even towards His
              chosen people. I bring these stories up to illustrate that God
              does not make peace with evil: He destroys it with a holy
              vengeance.
            </p>
            <br />
            <p>
              <strong>New Forgiveness</strong>
            </p>
            <p>
              The NT, on a surface level, presents an entirely different
              approach generally focused on forgiveness and mercy aimed at
              drawing out repentance through grace. People focused on compassion
              point out that Jesus sat and ate with tax collectors, prostitutes,
              and “the marginalized.” The argument is that because Jesus did
              these things, we should be welcoming and accommodating to all
              people, “for it is not the healthy that need a doctor, but the
              sick” <Reference number={8} />. Support for a compassion-based
              approach is readily found throughout the NT, especially in Jesus’s
              Sermon on the mount. Common refrains include “turn the other
              cheek,”
              <Reference number={9} /> “judge not lest you be judged”
              <Reference number={10} />, and “ love your enemy as yourself.”
              <Reference number={11} /> When alone with the adulterous woman
              after the Pharisees trying to set him up left, he says to her,
              “Neither do I condemn you.”
              <Reference number={12} /> These ideas to love your enemy and to
              love God are present all throughout the rest of the NT, with the
              exception of Revelation.
            </p>
            <br />
            <p>
              Perhaps the largest reason why the NT advocates compassion and
              grace as a response to evil, is because that response is the
              centerpoint of the Christian faith: the reconciliation provided by
              Jesus Christ on the cross and through his resurrection. Suffering
              on the cross, Jesus prayed to God, saying “Father, forgive them,
              for they know not what they do.”
              <Reference number={13} />. Instead of calling down a legion of
              angels to smite the Roman soldiers, the crowd chanting his death,
              and the religious leaders largely responsible for executing him,
              Jesus sought their reconciliation and interceded for them. Paul
              sums up the NT approach to evil pretty well: “Do not be overcome
              by evil, but overcome evil with good.”
              <Reference number={14} />
            </p>
            <br />
            <p>
              <strong>Justice in the Bible</strong>
            </p>
            <p>
              Still, to frame the NT as solely restorative is too reductive.
              There are plenty of instances where God metes out judgement, first
              upon Ananias and Sapphira for lying about their contribution to
              the church <Reference number={15} />, and upon many Christians for
              partaking unworthily of the Lord’s Supper{" "}
              <Reference number={16} />. Yet, given the overall attitude shift
              between the OT and the NT, how do we reconcile the vindictive
              judgement of God in the OT with the redemptive mercy in the NT? If
              we see the OT as setting the stage, describing the problem, then
              the NT is the answer to the OT, offering the solution.
            </p>
            <br />
            <p>
              Let’s step through some points I made in the previous section with
              this idea:
              <ul>
                <li>It is not the healthy that need a doctor, but the sick</li>
                <li>Judge not lest you be judged/turn the other cheek</li>
                <li>
                  God’s grace through Jesus’s sacrifice is how we ought to
                  overcome evil with good
                </li>
              </ul>
            </p>
            <br />
            <p>
              First, let us imagine a patient who is morbidly obese. If the
              patient sees no issue for their condition, why should they seek
              treatment for it? The patient will only seek remediation if they
              know or suspect that they have a sickness of some sort. Every
              “sinner” Jesus associated with understood their own sin, or at the
              very least had the slightest conception of guilt and shame at
              their own condition. Zaccheus, the tax collector who climbed a
              tree to catch a glimpse of Jesus, vowed to “give half of my
              possessions to the poor, and if I have cheated anybody out of
              anything, I will pay back four times the amount.”
              <Reference number={17} /> In contrast, the Pharisees believed
              themselves already to be clean, so they were blind to the
              significance of Jesus’s teaching and the grace he offered. Thus,
              compassion shines the greatest when the one receiving it
              understands that they deserve punishment. In such a sense, the
              church should embrace such sinners with the love of the father of
              the prodigal son.
            </p>
            <br />
            <p>
              Second, the sermon on the mount is easily one of the most misused
              sections of the Bible. “Judge not, lest ye be judged,” rather than
              a warning against hypocrisy, is used to shield sin from judgement
              and criticism. “Love your enemy as yourself,” rather than a
              callback to “Give him bread to eat…give him water to drink, for
              you will heap burning coals on his head,”
              <Reference number={18} /> is used to shroud cowardice with “humble
              kindness.” “Turn the other cheek,” rather than a call to “live at
              peace with everyone, If possible, so far as it depends on you”
              <Reference number={19} />, is used to bash anyone over the head
              for any form of justified retaliation in response to various
              evils.
            </p>
            <br />
            <p>
              Finally, there is a point to be made that Jesus’s sacrifice on the
              cross is meaningful because of God’s righteous vengeance. How is
              this possible? If our hamartia, our twisting of good, did not
              demand a real and terrible judgement, we wouldn’t need Jesus’s
              sacrifice! The essence of grace lies in the fact that it is
              undeserved. That God would offer Himself as remediation for our
              sin makes the cross much more brilliant. This is why “he who is
              forgiven little, loves little.”
              <Reference number={20} />
            </p>
            <br />
            <p>
              <strong>A Space for Vengeance</strong>
            </p>
            <p>
              So, what is the right response to evil, especially in light of
              Charlie Kirk’s murder? We can debate about how far the retribution
              should go, but there should be no doubt that the public
              celebration of his murder cannot be tolerated by Christians. Too
              often prayer is used as an excuse to avoid any meaningful action.
              Prayer alone is insufficient. People who outwardly and gleefully
              celebrated his murder online should at minimum lose their jobs.
              Anyone aiding the killer, such as George Zinn, should be charged
              and thrown in jail. Just as Christians vehemently opposed child
              sacrifice, so we too should oppose political violence and advocate
              for swift justice. That means refuting the lies told about Charlie
              Kirk when people we know celebrate it. That means looking friends
              in the eye, asking if they’d celebrate us getting shot for our
              beliefs. Our moral cowardice has cost the Church not just
              credibility, but the respect of an agitated younger generation.
            </p>
            <br />
            <p>
              In our understanding of love, we have been seduced by a
              counterfeit sense of humility upheld by sentimentality, and have
              forgotten the love of God, which mandates a hatred of evil. This
              has diluted the Gospel message into a vain “feel-goodism,” of
              which the grace we extend to others yields minimal repentance or
              fruits of the Spirit. No wonder why Protestant churches are
              stagnating or floundering. We have forgotten that it is against
              the backdrop of eternal damnation that the Gospel appears as good
              news.
            </p>
            <br />
            <p>
              Until we recover the hatred of evil in love, our compassion will
              remain a hollow gesture.
            </p>
          </div>
        </div>
        <p className="font-serif font-bold text-xl mt-10">Footnotes</p>
        <div className="font-serif text-md whitespace-pre-line space-y-2">
          <Footnote number={1} text="The Problem of Pain, Chapter 4" />
          <Footnote number={2} text="Matthew 5:39 ESV" />
          <Footnote number={3} text="Matthew 5:44 ESV" />
          <Footnote number={4} text="See Israel’s exile" />
          <Footnote number={5} text="Genesis 19" />
          <Footnote number={6} text="Exodus 32:29 ESV" />
          <Footnote number={7} text="Ezekiel 5:11-12" />
          <Footnote number={8} text="Mark 2:17" />
          <Footnote number={9} text="Matthew 5:39" />
          <Footnote number={10} text="Matthew 7:1" />
          <Footnote number={11} text="Matthew 5:43" />
          <Footnote number={12} text="John 8:11" />
          <Footnote number={13} text="Luke 23:34" />
          <Footnote number={14} text="Romans 12:21" />
          <Footnote number={15} text="Acts 5" />
          <Footnote number={16} text="1 Corinthians 11:30" />
          <Footnote number={17} text="Luke 18:9" />
          <Footnote number={18} text="Proverbs 25:21-22" />
          <Footnote number={19} text="Romans 12:18 paraphrased" />
          <Footnote number={20} text="Luke 7:47" />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
