import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Michael Pitts";
  const credit = "Photo by Daniel Guo";
  const title = "Between the Two Gardens";
  const date = "April 23, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25s/between-the-two-gardens.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className={styles.credit}>{credit}</p>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.author}>BY {author.toUpperCase()}</h2>
          <h3 className={styles.date}>{date}</h3>
          <div className={styles.text}>
            <h4 className="text-2xl">
              Living Life as an Exiled Sojourner <Reference number={1} />
            </h4>
            As Christians, we live in the time between the two gardens. We are
            cast out of Eden for our rebellion against God, and though we live
            with the certain hope and guarantee of the blessings of the New
            Earth, its peace and comfort can seem so far away. In times of
            trial, we often find ourselves echoing the words of the Psalmist,
            <q>My God, my God, why have you forsaken me?</q>
            <Reference number={2} /> It can feel as though God has forgotten us,
            the world goes on without us, and we are left all
            alone&mdash;destitute, afflicted, and mistreated.{" "}
            <Reference number={3} />
            <br />
            <br />
            But God has by no means forgotten those whom he has chosen. Indeed,
            the Scriptures hold forth not only that God is with us in all of our
            sufferings, but even that he sovereignly intends the hardships of
            our lives for good.
            <Reference number={4} /> And instead of leaving us to our own
            devices, the Lord has graciously given us descriptions and examples
            in his Word to help us know what will come upon us and how we ought
            to act under it. Christ in his humiliation and the church as
            sojourners and exiles are two examples that teach us how we ought to
            live while we await the final Sabbath rest for the people of God,
            <Reference number={5} /> when all of our sorrow will finally turn
            into joy.
            <Reference number={6} />
            <br />
            <br />
            <h5 className="font-bold">Christ in His Humiliation</h5>
            Although Jesus was both absolutely sinless
            <Reference number={7} /> and, as God, impeccable (unable to sin),
            <Reference number={8} /> he still endured many trials during his
            life on earth, even apart from the cross. He was born into abject
            poverty in the ancient world, and so lowly was his estate that he
            was laid in an animal feeding trough when he was born.
            <Reference number={9} /> Christ was moved even to tears by
            people&apos;s sin,
            <Reference number={10} /> suffering,
            <Reference number={11} /> and death,
            <Reference number={12} /> and yet never failed to minister to them.
            Even Christ&apos;s temptations were accompanied by suffering that
            ranged from the extreme to the extraordinary: he fasted for 40 days
            before being tempted by the devil,
            <Reference number={13} /> and such was his anguish in the Garden of
            Gethsemane that he sweat drops of blood as he prayed.
            <Reference number={14} /> If anyone has ever suffered in this
            world&mdash;and that, unjustly&mdash;it was Christ. Even without
            considering the cross, his suffering far surpassed what any man has
            had to endure.
            <br />
            <br />
            But if Christ was both undeserving of judgement and without need of
            discipline, for what purpose did he suffer? First, Christ is the
            fulfillment of Old Testament Israel. Because Christ&apos;s sacrifice
            is the only sacrifice that can take away sin,
            <Reference number={15} /> all of Old Testament worship, and
            especially the nation of Israel as a whole, took on a symbolic and
            future-oriented form. You can see this especially in Paul&apos;s
            teaching that the Old Testament events and rituals were,
            symbolically, Christ, when he says,{" "}
            <q>
              all ate the same spiritual food, and all drank the same spiritual
              drink. For they drank from the spiritual Rock that followed them,
              and the Rock was Christ.
            </q>
            <Reference number={16} /> As Christ, hearkening back to the manna in
            the wilderness, even called himself the bread of life that had come
            down from heaven.
            <Reference number={17} /> Thus, although the Old Testament saints
            did not know Christ directly as we now do, they did know him and the
            salvation that he offers through the symbolic events and rituals of
            the Old Testament.
            <br />
            <br />
            Conversely, just as Israel symbolized the Christ yet to come, Christ
            in his life on earth fulfilled not only the law of Israel perfectly,
            but even the afflictions that Israel experienced. Just as Israel was
            first a small nation in a lowly estate,
            <Reference number={18} /> Christ was born as the son of a carpenter
            and laid in a feeding trough. Just as Israel sojourned in Egypt,
            <Reference number={19} /> Mary and Joseph hid Christ from Herod in
            that same land.
            <Reference number={20} /> Just as Israel hungered and thirsted for
            40 years in the wilderness, being tempted to deny God, Christ fasted
            for 40 days in the wilderness and was tempted by the devil himself;
            even the devil&apos;s temptations mirrored the temptations of
            Israel.
            <Reference number={21} /> Most importantly, in his life and death,
            Christ fulfilled all of the prophecy about Israel&apos;s salvation.
            <Reference number={22} /> Though Israel failed again and again to
            obey the law that they had been given, Christ fulfilled the law
            perfectly. Though Israel fell and grumbled in the wilderness, Christ
            stood strong when tempted even by the devil. Though Israel could not
            even pay for its own sins when captured and exiled, Christ, as God,
            suffered once on the cross and thus paid the price due for all of
            the sins of his people. Our Lord, in every way, fulfilled in his own
            body every affliction of the people of Israel.
            <br />
            <br />
            Not only did Jesus fulfill in himself the suffering of Israel, he
            also suffered in order that he would be an empathetic and
            compassionate High Priest for us. Though he is impeccable because he
            is God, Christ did not rely upon his divinity to remain sinless, but
            was sanctified exactly as we are, through suffering, as it is
            written,
            <br />
            <br />
            <div className="text-justify px-8 md:px-20">
              It was fitting that he … should make the founder of their
              salvation perfect through suffering. For he who sanctifies and
              those who are sanctified all have one source. … For we do not have
              a high priest who is unable to sympathize with our weaknesses, but
              one who in every respect has been tempted as we are, yet without
              sin. … Although he was a son, he learned obedience through what he
              suffered. And being made perfect, he became the source of eternal
              salvation to all who obey him.
              <br />
              Hebrews 2:10-11, 4:15, 5:8-9 ESV
              <br />
              <br />
            </div>
            Because Christ suffered, we worship a God who is intimately and
            personally familiar with human suffering. We can be confident when
            we draw near to God that he knows our pain; God is not distant and
            aloof, but near and aware. Likewise, because Jesus was sanctified
            through suffering, we can be confident that his fatherly discipline
            will be never an ounce more severe than is necessary for our good,
            and we can draw near to him in faith, knowing that he has himself
            felt the depths of all of our misery, that he understands it, and
            that, in Christ, he will strengthen us to endure. Our Lord&apos;s
            suffering during his life has become for us the source of our joy
            and confidence when we draw near to him in our suffering.
            <br />
            <br />
            <h5 className="font-bold">The Church as Sojourners and Exiles</h5>
            As we are united to Christ in his resurrection, so also, while we
            await his return, are we united to him in his suffering and death.
            We are told,{" "}
            <q>
              do not be surprised at the fiery trial when it comes upon you to
              test you, as though something strange were happening to you. But
              rejoice insofar as you share Christ&apos;s sufferings.
            </q>
            <Reference number={23} /> Our Lord himself told his disciples,{" "}
            <q>
              &apos;A servant is not greater than his master.&apos; If they
              persecuted me, they will also persecute you.
            </q>
            <Reference number={24} /> Peter calls his audience{" "}
            <q>sojourners and exiles.</q>
            <Reference number={25} /> Hebrews takes this idea even further by
            indicating that the church in this present age is in the same
            situation as Israel in the wilderness. We await the final Sabbath
            rest of the heavenly promised land, of which the earthly promised
            land and our weekly Sabbath rest are but dim pictures in comparison.
            <Reference number={26} /> The consistent picture painted by the New
            Testament is that, for the Christian in this life, suffering is a
            given.
            <Reference number={27} />
            <br />
            <br />
            But just as the afflictions of Christ were not meaningless, neither
            are the afflictions of the church. As Christians, the pain that we
            endure in this life takes on a distinctly different character.
            Instead of punishing us in his wrath, God graciously chastises us
            with his fatherly discipline. The author of Hebrews exhorts us,
            <br />
            <br />
            <div className="text-justify px-8 md:px-20">
              <q>
                My son, do not regard lightly the discipline of the Lord, nor be
                weary when reproved by him. For the Lord disciplines the one he
                loves, and chastises every son whom he receives.
              </q>{" "}
              It is for discipline that you have to endure. God is treating you
              as sons. For what son is there whom his father does not
              discipline? … [Our earthly fathers] disciplined us for a short
              time as it seemed best to them, but he disciplines us for our
              good, that we may share his holiness. For the moment all
              discipline seems painful rather than pleasant, but later it yields
              the peaceful fruit of righteousness to those who have been trained
              by it.
              <br />
              Hebrews 12:2-7, 10-11 ESV
              <br />
              <br />
            </div>
            Christian, the suffering that you endure in this life is not random,
            it is not meaningless, and it is not malicious. Far from being at
            the arbitrary vicissitudes of the world, you are firmly in the hands
            of your loving Father. Puritan theologian Thomas Boston put it well
            in his book on suffering:
            <br />
            <br />
            <div className="text-justify px-8 md:px-20">
              [This knowledge] speaks comfort to the afflicted children of God.
              Whatever is the crook in your lot,
              <Reference number={28} /> it is of God&apos;s making; and
              therefore you may look upon it kindly. Since it is your Father who
              has made it for you, question not but there is a favourable design
              in it towards you. A discreet child welcomes his father&apos;s
              rod, knowing that, being a father, he seeks his benefit in this
              way; and shall not God&apos;s children welcome the crook in their
              lot, as designed by their Father, who cannot mistake His measures,
              to work for their good, according to the promise?
              <br />
              <br />
              The truth is, the crook in the lot of a believer, how painful it
              proves, is a part of the discipline of the covenant, the nurture
              secured to Christ&apos;s children by the promise of the Father. …
              Do not say that your crook has been of so long continuance, that
              it will never mend. Put it in the hand of God, who made it, that
              He may mend it, and wait on Him. And if it is for your good that
              it should be mended, it shall be mended; for{" "}
              <q>
                no good thing will He withhold from them that walk uprightly.
              </q>
              <br />
              <i className="text-blue-700">The Crook in the Lot</i> by Thomas
              Boston, pp. 38-39
              <br />
              <br />
            </div>
            This is a great comfort to the suffering believer. It is not as
            though we are afflicted for our sins, for we know that Christ has
            paid the whole price for them already on the cross
            <Reference number={29} />
            &mdash;indeed, even this gift of fatherly discipline comes because
            we are adopted as sons of God.
            <Reference number={30} /> Rather,{" "}
            <q>
              [God] disciplines us for our good, that we may share his holiness.
            </q>
            <Reference number={31} />
            <br />
            <br />
            <h5 className="font-bold">Joy Through Sorrow?</h5>
            But there is yet an even greater comfort for the suffering saint. By
            our afflictions, not only are we conformed into the image of Christ
            in his holiness,
            <Reference number={32} /> we are also prepared for eternal
            blessedness in Glory. We may properly say that our
            suffering&mdash;even the very pain therein&mdash;becomes for us a
            source of joy when we see Christ face-to-face. The Apostle Paul put
            it this way:{" "}
            <q>
              we do not lose heart. Though our outer self is wasting away, our
              inner self is being renewed day by day. For this light momentary
              affliction is preparing for us an eternal weight of glory beyond
              all comparison.
            </q>
            <Reference number={33} /> When Jesus was preparing his disciples for
            his crucifixion, death, and resurrection in John 16, he said,
            <br />
            <br />
            <div className="text-justify px-8 md:px-20">
              You will weep and lament, but the world will rejoice. You will be
              sorrowful, but your sorrow will turn into joy. When a woman is
              giving birth, she has sorrow because her hour has come, but when
              she has delivered the baby, she no longer remembers the anguish,
              for joy that a human being has been born into the world. So also
              you have sorrow now, but I will see you again, and your hearts
              will rejoice, and no one will take your joy from you.
              <br />
              John 16:20-22 ESV
              <br />
              <br />
            </div>
            In a sermon on this passage, Rev. Dr. Carlton Wynne beautifully
            described the joy that emerges from suffering, saying,
            <br />
            <br />
            <div className="text-justify px-8 md:px-20">
              It&apos;s not a replacement, consolation joy. It&apos;s a joy that
              is worked out through the sorrow that we experience. He will turn
              our sorrow into joy. It&apos;s more like what Jesus says here in
              verse 21. It&apos;s more like a woman giving birth to a child.
              It&apos;s through the travail that the joy comes, because the pain
              is actually contributing to the magnitude of joy when the child is
              born. Arthur Pink says this,{" "}
              <q>
                Our present groanings are but creating within us a larger
                capacity for joy in the grand hereafter.
              </q>
              <br />
              <br />
              Here&apos;s the point. … Nothing escapes the eye of the Lord of
              Time. There is no injustice. There is no insult. There is no loss.
              There is no tear. There is no death among the people of God, but
              that it will achieve an explosion of joy and unending amazement at
              the wisdom and power of God in the way that he orders the lives of
              his people united to Christ. C.S. Lewis says,{" "}
              <q>
                Some mortals say of temporal suffering, &apos;No future bliss
                can make up for it,&apos; not knowing that heaven, once
                attained, will work backwards and turn even that agony into a
                glory.
              </q>{" "}
              One of the most beautiful things that I think we ever sing is Come
              Ye Disconsolate. Its opening verse is,{" "}
              <q>
                Come, ye disconsolate, where&apos;er ye languish, come to the
                mercy seat, fervently kneel: here bring your wounded hearts,
                here tell your anguish;
              </q>
              &mdash;and here&apos;s the line&mdash;
              <q>earth has no sorrow that heaven cannot heal.</q>
              <br />
              <i className="text-blue-700">A Little While to Seeing Jesus</i> by
              Rev. Dr. Carlton Wynne
              <Reference number={34} />
              <br />
              <br />
            </div>
            It would seem contradictory to the eyes of the world that we would
            rejoice in our sufferings.
            <Reference number={35} /> And yet, as Christians, we may indeed have
            true joy in suffering. It&apos;s not a false joy that pretends that
            suffering doesn&apos;t exist&mdash;we are commanded even to weep
            with those who weep
            <Reference number={36} />
            &mdash;but a true joy, one that admits to the reality and difficulty
            of suffering, and yet one that sees even the very pain and hardship
            therein with the eyes of faith, knowing that it is but for a little
            while,
            <Reference number={37} /> that it comes by the hand of our most wise
            and kind heavenly Father,
            <Reference number={38} /> that it is for our good,
            <Reference number={39} /> and that it is preparing for us an eternal
            weight of glory beyond all comparison.
            <Reference number={40} /> We may be, as the Apostle described,{" "}
            <q>sorrowful, yet always rejoicing,</q>
            <Reference number={41} /> through faith in the God who turns our
            sorrow into everlasting joy.
            <br />
            <br />
            <h5 className={styles.level2subsection}>Conclusion</h5>
            As we live in this world, kept between Eden lost and Eden restored,
            we will have tribulation, but take heart, Christian: Christ has
            overcome the world.
            <Reference number={42} /> Learn from Christ, that your affliction is
            not because you have sinned, but in order that you might not sin,
            and that you have a great High Priest who is intimately and
            personally familiar with your pain. And learn from the
            Scriptures&apos; teaching on the church, that you may know that
            God&apos;s discipline is for your good&mdash;that you may share His
            holiness&mdash;as each affliction prepares you more and more for
            that great Day, when all the sorrows of this life will turn into
            joy.
            <br />
            <br />
            <div className="text-justify px-8 md:px-20">
              After you have suffered a little while, the God of all grace, who
              has called you to his eternal glory in Christ, will himself
              restore, confirm, strengthen, and establish you.
              <br />1 Peter 5:10 ESV
            </div>
          </div>
          <div className="mt-8 leading-6">
            <p className="mb-3 font-bold">Footnotes</p>
            <Footnote number={1} text="An allusion to 1 Peter 2:11" /> <br />
            <Footnote number={2} text="Psalm 22:1 ESV" /> <br />
            <Footnote number={3} text="An allusion to Hebrews 11:37" /> <br />
            <Footnote number={4} text="Genesis 45:8, 50:20; cf. Romans 8:28" />
            <br />
            <Footnote number={5} text="An allusion to Hebrews 4:9" /> <br />
            <Footnote number={6} text="An allusion to John 16:20" /> <br />
            <Footnote number={7} text="1 Peter 2:22" /> <br />
            <Footnote number={8} text="James 1:13" /> <br />
            <Footnote number={9} text="Luke 2:7" /> <br />
            <Footnote number={10} text="Mark 6:34, 10:21" /> <br />
            <Footnote number={11} text="Matthew 14:14, 20:34, Mark 1:41" />
            <br />
            <Footnote number={12} text="Luke 7:13, John 11:33-38" /> <br />
            <Footnote number={13} text="Matthew 4:2" /> <br />
            <Footnote number={14} text="Luke 22:44; cf. Hebrews 12:4" /> <br />
            <Footnote number={15} text="Acts 4:12, Hebrews 10:1-4" /> <br />
            <Footnote number={16} text="1 Corinthians 10:3-4 ESV" /> <br />
            <Footnote number={17} text="John 6:31-58" /> <br />
            <Footnote number={18} text="Deuteronomy 7:7, 9:1-2" /> <br />
            <Footnote number={19} text="Exodus 12:40-41, Hosea 11:1" /> <br />
            <Footnote number={20} text="Matthew 2:13-15" /> <br />
            <Footnote number={21} text="Luke 4:1-13" /> <br />
            <Footnote
              number={22}
              text="Isaiah 42:1-9 and chs. 51-53 are a couple of the most obvious examples."
            />
            <br />
            <Footnote number={23} text="1 Peter 4:12-13 ESV" /> <br />
            <Footnote number={24} text="John 15:20 ESV" /> <br />
            <Footnote number={25} text="1 Peter 2:11 ESV" /> <br />
            <Footnote number={26} text="Hebrews 3:7-4:11" />
            <br />
            <Footnote number={27} text="James 1:2" />
            <br />
            <Footnote
              number={28}
              text='"The crook in your lot" is an old way of describing a 
              difficulty in your life. We all have "lots," that is, different aspects 
              of our lives, and we all have "crooks," that is, parts of our lots that 
              are not the way that we would like them to be. But, as Boston points out, 
              all of our lots are always precisely as God would have them to be.'
            />
            <br />
            <Footnote number={29} text="1 Peter 2:24" /> <br />
            <Footnote number={30} text="Galatians 3:26" /> <br />
            <Footnote number={31} text="Hebrews 12:10" /> <br />
            <Footnote number={32} text="Romans 8:29" /> <br />
            <Footnote number={33} text="2 Corinthians 4:16-17 ESV" /> <br />
            <Footnote
              number={34}
              text="https://www.sermonaudio.com/sermons/91423240277236"
            />
            <br />
            <Footnote
              number={35}
              text="An allusion to a common New Testament theme; cf. Romans 5:3, Colossians 1:24, 1 Peter 1:6, 4:13, James 1:2"
            />
            <br />
            <Footnote number={36} text="Romans 12:15" />
            <br />
            <Footnote number={37} text="1 Peter 5:10" />
            <br />
            <Footnote number={38} text="Matthew 10:29-31" /> <br />
            <Footnote number={39} text="Hebrews 12:10, Romans 8:28" /> <br />
            <Footnote number={40} text="2 Corinthians 4:17" /> <br />
            <Footnote number={41} text="2 Corinthians 6:10 ESV" /> <br />
            <Footnote number={42} text="John 16:33" />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
