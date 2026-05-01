import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Olivia Hu";
  const credit = "Photo adapted by Olivia Hu";
  const title = "spaces between people";
  const date = "December 6, 2025";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/issues/25f/spaces-between-people.webp"
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
              If you&apos;re a regular church-goer, you&apos;re probably
              familiar with this unwritten yet unavoidable tradition: the
              post-service loitering. I&apos;ve observed this through-line at
              every church I&apos;ve attended, regardless of the size,
              denomination, or demographic make-up &mdash; people <i>love</i> to
              loiter. <br />
              <br />
              Over many years, I have grown fond of the post-service frenzy
              &mdash; the cheerful hellos and hugs and how-are-yous scattered
              like colorful wildflowers. Yet, I&apos;m sure we&apos;ve all
              experienced that moment when all the scripted questions &mdash;
              what&apos;s your name, what&apos;s your major? &mdash; run out,
              and a pause just a breath too long follows.
              <br />
              <br />
              For some, these awkward moments are easy to brush off; for others
              they are stubborn memories that fester and seed dread for the next
              social event. I admit I come to you from the latter group:
              I&apos;ve struggled a lot with social anxiety throughout my high
              school and college years. Sunday mornings were steeped in a
              simmering anxiousness &mdash; anticipation constricting my throat
              as we all filed out of the sanctuary, hands sweaty and thoughts
              frantic as people swarmed and coalesced in different circles.
              Failed interactions brought a sense of defeat that bled deeply
              into my self-esteem, and though I recognized these thought
              patterns as unsustainable, I was stuck, unable to escape.
              <br />
              <br />
              Think about this: there&apos;s an undeniable shift that occurs
              when another person enters the room. This is the space between
              people &mdash; suddenly there are two points instead of one; there
              is distance and potential for interaction; there is perception,
              sensitivity, and self-consciousness. We&apos;re newly aware of our
              own physicality and personality in light of the person&apos;s
              presence and perspective, which imbues the space with
              significance.
              <br />
              <br />I observe that these spaces exist everywhere: between
              students studying at the library, over the mugs of friends at a
              cafe. Even amidst the hubbub of the loitering crowd after service,
              these spaces are pressed up against each other as people form
              circles of two or three.
              <br />
              <br />
              And sometimes that space is awkward, pockmarked with darting eyes
              and stilting silences; sometimes it is cold because of strife or
              judgement or misunderstanding. But I firmly believe that this
              space is an opportunity to converse, rebuke, forgive, and most
              importantly, to choose love.
              <br />
              <br />
              Whether or not you find these experiences relatable, my hope is to
              bring into focus the existence of these spaces and their potential
              to facilitate love, especially for all my awkward friends out
              there. I don&apos;t claim to have everything figured out; if
              anything, I&apos;ve only been learning how much more I have to
              grow. But in numerous highs and lows, God has taught me how to
              love others <i>despite</i> fears and anxieties; I hope to share
              and encourage you in that today.
            </p>
            <h3 className="font-bold text-xl mt-10 mb-4">
              I. Substantial silence
            </h3>
            <p>
              On more occasions than I&apos;m willing to admit, I&apos;ve caught
              myself hyper-fixating on the flow of a conversation, sometimes to
              the point that I accidentally tune out what the other person is
              saying. I&apos;m thinking about well-timed hmm&apos;s, appropriate
              facial expressions, and what I&apos;ll ask or say to fill the next
              pause. This preoccupation stemmed from a fear of silence, and I
              constantly worried that any awkwardness would leave a negative
              impression of me and what I represent (e.g. my church or Christ).
              <br />
              <br />
              This line of thinking, while considerate, ironically contradicted
              the goal of the dialogue, which is to exchange information and
              build rapport. It was arguably self-indulgent too, as I worried
              more about appearing attentive than really listening to what my
              conversation partner had to say. This kind of self-focus in
              conversation can come in many forms, whether it&apos;s
              overthinking that new pimple that <i>everyone</i> must be noticing
              or avoiding genuine sharing for the sake of seeming composed and
              put-together.
              <br />
              <br />
              So I ask: In conversation, to what extent are you thinking about{" "}
              <i>yourself</i>, and to what extent thinking about the{" "}
              <i>other</i>? Apostle Paul&apos;s instruction to the Philippians
              comes to mind, as he says, “in humility count others more
              significant than yourselves. Let each of you look not only to his
              own interests, but also to the interests of others.”
              <Reference number={1} /> With this standard in mind, I encourage
              you to examine your posture in future conversations and{" "}
              <i>insist</i> on keeping the other person at the forefront of your
              thoughts.
              <br />
              <br />A way to practice this intentionality is to (1) consider the
              purpose of silence in conversation and (2): <i>embrace</i> it. I
              mentioned that I used to avoid silences at all costs because they
              signified awkwardness and failure, and they allowed anxieties to
              intrude and fester as we spoke. But experience has shown me that
              silences give time to think and allow for more effective,
              meaningful conversation. I&apos;m grateful to have learned from
              friends who dwell deliberately in silence before speaking, to
              ensure the truth and conviction of the words they speak.
              <br />
              <br />
              Anxiousness can make our minds grow hot and our words run quickly;
              I&apos;d find myself leaping frantically from one topic to the
              next to outrun any awkward silences. But I encourage you to slow
              down, allow for pauses and thought, and see how silence invites
              richness and authenticity into a dialogue.
              <br />
              <br />
              Now, broadening the scope a bit from silences within conversation,
              we can also observe spaces that are entirely characterized by
              silence. Words are often constructive, but they can also clutter,
              and the space between people doesn&apos;t always have to be filled
              with speech &mdash; that was a misconception I had to deliberately
              overwrite in my mind. Silence allows for actions, especially in
              the form of hospitality: “Dear children, let us not love with
              words or tongue but with actions and in truth.”
              <Reference number={2} /> And this can be simple: a quiet favor, a
              cooked meal, a comforting hug.
              <br />
              <br />
              So, consider what the other person needs in the moment &mdash; at
              times, making conversation, especially routine small talk, is only
              another tax on a long day, and silent yet amicable company is
              preferred. At others, what&apos;s needed is the distraction of
              talk, a cheerful exchange of notable events from the day. Take
              into account your needs and theirs to find the best approach; this
              posture of humility will overcome much awkwardness and discomfort.
              And whether the space is filled with words or actions or silence,
              it will be <i>substantial</i>, because it is a vehicle of your
              love.
            </p>
            <h3 className="font-bold text-xl mt-10 mb-4">
              II. Prayerful preparation
            </h3>
            <p>
              Now, embracing silence is a critical and nontrivial step, but we
              must also address the conversation itself &mdash; what <i>do</i>{" "}
              we talk about, how do we avoid awkwardness, and how can we
              initiate and conduct deep and meaningful conversations?
              <br />
              <br />
              For those initial moments when we strike up a conversation, I
              offer a few solutions (to be taken with a grain of salt):
              <br />
            </p>
            <ul className="list-disc ml-10">
              <li>
                Recall something about the person and use it as a lead-in; for
                instance, how is this club going, how was that exam you were
                studying for? This does require a few opportunities to gather
                information first, but over time, as shared history accumulates,
                this gets easier and easier.
              </li>
              <li>
                When the well-traveled conversation topics (courses, hobbies,
                weather, upcoming plans) run out, consider branching into more
                interesting, unscripted questions such as “what has been
                bringing you joy lately?”, “what is something that inspires
                you?”, or “what is something you are proud of?”
              </li>
              <li>
                For planned meetups (especially one-on-ones), I sometimes
                prepare a list of questions I might want to ask. This way, I
                won&apos;t be distracted by brainstorming during our
                conversation, and it&apos;s a good exercise to consider what I
                wanted to talk about with this person, what they might be
                seeking in our conversation, and how to make the time most
                worthwhile for both of us.
              </li>
            </ul>
            <br />
            <p>
              This last point (3), when taken into a spiritual context, is the
              heart of <i>prayerful preparation</i>. What is prayer, after all?
              It&apos;s intentional thought and a petition for someone&apos;s
              well-being. We consider how they are <i>really</i> doing and what
              they may be struggling with. When we pray, we intercede and bring
              those requests to God, knowing that He is solely sufficient to
              comfort, heal, and redeem their pain and suffering &mdash; prayer
              is fundamentally an act of love. As such, Apostle Paul is always
              praying in gratitude and joy for his fellow saints, saying “I
              remember you constantly in my prayers night and day. As I remember
              your tears, I long to see you, that I may be filled with joy.”
              <Reference number={3} /> By praying, we demonstrate our care for
              others in private and prepare our hearts to love them in public.
              Then, our next conversation is driven not by courtesy or
              happenstance, but a sincere concern for our brother or
              sister&apos;s well-being.
              <br />
              <br />
              I&apos;ll add a final note on prayer requests &mdash; if
              you&apos;ve been to a Bible study or church gathering, you might
              have been asked your prayer requests before. From a worldly
              perspective, it might seem strange or inconsequential &mdash; can
              a few uttered words really change anything in my life? But the
              practice of sharing prayer requests isn&apos;t merely a courtesy
              or Christianese for asking, “how are you?” Rather, the question
              “how can I pray for you?” carries a genuine belief that prayer has
              miracle-working power and can invoke divine change in others&apos;
              lives. This is why Apostle James exhorts us to “pray for each
              other so that you may be healed. The prayer of a righteous person
              is powerful and effective.”
              <Reference number={4} /> So I urge you not to neglect or downplay
              the power of prayer, but continue praying with conviction, in fear
              of the Lord, out of love for the people of God&apos;s kingdom.
            </p>
            <h3 className="font-bold text-xl mt-10 mb-4">
              III. Welcome in worship
            </h3>
            <p>
              This last section comes more as a challenge than a word of advice.
              I&apos;ll be frank in asking: how often do you invite God into
              your conversations? If we are like cups filled to the brim, what
              spills out in our everyday interactions?
              <br />
              <br />
              For some of you, reflections on faith and excitement about Christ
              come readily to your lips &mdash; I&apos;ve been so encouraged by
              you! But if that&apos;s the case, I&apos;ll probe a bit deeper
              &mdash; are you similarly bold across all conversations with both
              Christian and non-Christian friends? For others, our spiritual
              lives rarely enter our conversations, especially outside religious
              contexts. This is unsurprising: we naturally adapt to situational
              social norms as a means of survival. It&apos;s an unfortunate
              truth that faith-related conversations have become a kind of
              social taboo, and we tend to conform to “safe” conversation topics
              in response.
              <br />
              <br />
              I return again to Apostle Paul&apos;s teachings for instruction
              and encouragement. He tells us to “present your bodies as a living
              sacrifice, holy and acceptable to God, which is your spiritual
              worship. Do not be conformed to this world, but be transformed by
              the renewal of your mind.”
              <Reference number={5} /> This excerpt deserves a much deeper
              study, but two applications immediately stand out:
              <br />
              <br />
              (1) We are called to present our entire lives as spiritual
              sacrifices, given up in worship to Him. If we truly fear God, then
              we <i>cannot</i> compartmentalize him to a small drawer in our
              lives or a block in our calendar. Rather, He is the entire dresser
              that holds all part of our lives &mdash; and this includes our
              conversations and our daily conduct. (2) As such, we are called to
              be counter-cultural, not “conformed to this world,” and the
              transformation we are promised through Christ will empower us to
              do so. Certainly, bringing God into our conversations defies
              secular social norms and often brings discomfort, but “we must
              obey God rather than men”,
              <Reference number={6} /> and there is no higher calling than total
              worship and the dedication of our conversational spaces to Him.
              And I&apos;ll share a final encouragement from Apostle Peter, who
              says it far better than I can: “Now who is there to harm you if
              you are zealous for what is good?... Have no fear of them, nor be
              troubled, but in your hearts honor Christ the Lord as holy, always
              being prepared to make a defense to anyone who asks you for a
              reason for the hope that is in you; yet do it with gentleness and
              respect, having a good conscience, so that, when you are
              slandered, those who revile your good behavior in Christ may be
              put to shame.”
              <Reference number={7} /> No argument can possibly undermine what
              we know to be true, and there is no shame in showing fervor for
              the Lord of our lives, so take heart!
              <br />
              <br />
              Bringing this into the space between people, this is my
              observation: when we approach this space with love, we begin to
              see the other person not as a stranger or a fringe acquaintance or
              even merely fun company, but as a <i>soul</i> &mdash; suddenly,
              their spiritual well-being comes into focus and becomes urgently
              important to us.
              <br />
              <br />
              Not every conversation needs to incorporate the gospel or even be
              spiritual in nature, but when you have gone through the motions of
              small talk and built rapport, I hope you recognize the opportunity
              to invite God into the conversation.
              <br />
              <br />
              With fellow believers, there are many easy ins, for instance, “how
              have you been doing spiritually?” or “who is God to you right
              now?” Oftentimes, all it takes is a prompt to bring the
              conversation into a more spiritual space. For non-believing
              friends, navigating toward faith or spirituality is much trickier,
              especially when their attitude towards religion is unknown to us.
              Questions like “do you believe in an afterlife?” or “do you think
              you&apos;re a good person?” work well in an evangelistic context,
              but in day-to-day conversation, they&apos;re usually met with
              dismissal or repulsion. Still, there are ways to discuss our
              spiritual lives that are non-intrusive and more likely to inspire
              natural intrigue. We can include church in recaps of our weekend
              plans, because service was not just non-obligatory, but it was{" "}
              <i>enjoyable</i>
              and lifegiving. We can make space to pray before meals, because
              properly honoring and thanking God for His provision is{" "}
              <i>worth</i> the social discomfort. We can wear our identity in
              Christ proudly, because we are new creations in him, and that
              should show in our actions, manner of speech, conduct, and daily
              joy.
              <br />
              <br />
              Sometimes this will cock a head, prompt a “why?”, and in that
              moment <i>take hold</i> of the chance to speak about Him.
              Remember, there is a soul at stake; I hope there is some gravity
              to that. One of the most loving things we can do is to care for
              others&apos; spiritual well-being, and there is no greater gift
              than the good news of Christ&apos;s healing power. Conversations
              are a space where we can exchange these acts of love, so let us
              strive to invite God in and turn these moments into places of
              worship.
              <br />
              <br />
              –
              <br />
              <br />
              At a recent communion service, after receiving the bread and cup,
              I returned to my seat to wait for our congregation to take the
              elements together. I usually pray through the interim, but this
              time my gaze was drawn up toward the communion table, where our
              church members lined up to receive their elements one by one. I
              watched our senior pastor, freshly returned from a six-month
              sabbatical, greet each member with radiant joy, the image of
              fatherly love and sweet reconciliation. My eyes traveled down the
              line of people, all former strangers, many now known to me &mdash;
              their quirks and quips and affections like bright patches of
              sunlight in my life.
              <br />
              <br />
              My cup overflows.
              <Reference number={8} />
              <br />
              <br />
              I&apos;m always moved by this image of the early church: “they
              devoted themselves to the apostles&apos; teaching and the{" "}
              <span className="underline">fellowship</span>, to the breaking of
              bread and the prayers… All who believed were together and had all
              things in common.”
              <Reference number={9} /> “Fellowship” is translated from the Greek
              word <i>koinonia</i>, which describes a deeply established,
              Christ-centered bond that derives from our individual fellowship
              with Christ.
              <Reference number={10} /> Their commonality is not about shared
              interests and experiences, but walking together in a life fully
              devoted to loving God and loving people.
              <br />
              <br />
              And so it is today: despite my anxieties and frequent cowardice in
              social interactions, and despite my own brokenness and that of
              those around me, God still allowed me to experience fellowship,
              community, and love. He gifted me a beautiful church community,
              which is a broken body made perfect in Christ, for “love covers a
              multitude of sins.”
              <Reference number={11} /> If He can do this for me, He can do it
              for you too.
              <br />
              <br />
              Each day, we repeatedly encounter spaces between people as we see
              friends, attend classes, and share meals. Each of these encounters
              presents an opportunity to fill that space with intentionality, be
              it silence, words, or worship. This may mean stepping outside of
              our comfort zone to talk to newcomers when we&apos;d rather stick
              with our comfort people, or initiating conversations about faith
              when resistance is expected. It can be intimidating, but I urge
              you to think of this space as a gift: it&apos;s the arena where we
              see God&apos;s mighty hand at work.
              <br />
              <br />
              So the next time you&apos;re immersed in the post-church loitering
              frenzy or in other ways confronted by the space between people, I
              pray that you see Spirit at work in these spaces. These
              aren&apos;t just moments of horizontal, human connection, but a
              space where His body is being built up: “You are no longer
              strangers and aliens, but you are fellow citizens with the saints
              and members of the household of God, … Christ Jesus himself being
              the cornerstone, in whom the whole structure, being joined
              together, grows into a holy temple in the Lord.”
              <Reference number={12} />
              <br />
              <br />
            </p>
          </div>
          <p className="font-serif font-bold text-xl mt-10">Footnotes</p>
          <div className="font-serif text-md whitespace-pre-line space-y-2">
            <Footnote number={1} text="Psalm 42:5" />
            <Footnote number={1} text="Philippians 2:4-5 ESV" />
            <Footnote number={2} text="1 John 3:1 ESV" />
            <Footnote number={3} text="2 Timothy 1:3-4" />
            <Footnote number={4} text="James 5:16" />
            <Footnote number={5} text="Romans 12:1-2a" />
            <Footnote number={6} text="Acts 5:29" />
            <Footnote number={7} text="1 Peter 3:13-16" />
            <Footnote number={8} text="Psalm 23:5" />
            <Footnote number={9} text="Acts 2:42-46" />
            <Footnote number={10} text=" John 1:6-7" />
            <Footnote number={11} text=" 1 Peter 4:8" />
            <Footnote number={12} text=" Ephesians 2:19-21" />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
