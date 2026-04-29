import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Ansley Cheng";
  const credit = "Photo by Alex Wu";
  const title = "Ballpoint";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/ballpoint.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className="text-[9pt] font-sans tracking-wide text-center opacity-70 mb-10">
            {credit}
          </p>
          <br />
          <h1 className="font-playfair font-medium text-[30pt] md:text-[40pt] my-5 md:my-10">
            {title}
          </h1>
          <h2 className="font-cormorant font-semibold text-xl mb-1 uppercase">
            BY {author}
          </h2>
          <h3 className="font-normal text-md mb-8 text-neutral-500">{date}</h3>
          <div className="font-serif text-sm md:text-lg leading-[200%] whitespace-pre-line">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have always been a very
              confident ballpoint pen.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Well, I’ll start a little further back,
              with a less concerning (albeit nerdier) statement: I have always
              been a very confident ballpoint pen user. In middle school, I used
              up multiple Paper Mate InkJoy pens, the ink bright and thick like
              liquid Skittles, and I progressed in high school to the more
              practical Pilot Acroballs, with their simple design and
              comfortably textured grip. In college, my best friend gifted me a
              set of 0.38mm Pilot Juice pens, which won me over with their
              smooth, impossibly thin writing capabilities.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Through all these phases, though, my
              loyalty to the pen type itself never wavered. And why should it?
              Ballpoint pens are everywhere for a reason — they write evenly,
              dependably, each stroke identical to the last. Unremarkable but
              consistent, they are ideal tools for everyday life, contributing
              to class notes, grocery lists, rent checks, and any other small
              task that might arise. Even apart from the organized lifestyles
              they enable, their inherent feel and flow provide a sense of
              purpose and productivity. There's always been something soothing
              to me about the stability of a good ballpoint pen.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; I’ll even admit that, in the past, my
              admiration for these qualities has bordered on obsession. While
              navigating my academic career and its many pen phases, I have
              found myself modeling habits after the pens I so enjoy —
              maintaining a uniform, tidy existence, prioritizing utility, and
              staying relatively self-contained. One could dismiss these
              tendencies as typical to a Type-A oldest child. Truthfully,
              though, I also attribute them to a hyperfixation on my own limits.
              I dread the fact that, like a ballpoint’s ink, my time and energy
              will run out if I operate irresponsibly, leaving me as useless as
              a plastic pen shell. My subconscious tells me that such a life
              would be unbearable, so I build my routines around efficiency and
              sustainability.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Until recently, I never questioned this
              mindset, or whether God actually agreed with my subconscious on
              the necessity of it. I was entirely satisfied with my ballpoint
              pen life. It was monotonous at times, maybe, and mentally
              exhausting at others — but it was safe.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; This lack of perspective is unwarranted,
              in hindsight, considering how early on I discovered that it wasn’t
              really safe at all.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; When I was ten years old, after a
              childhood spent in church with relative indifference, a Christian
              summer camp taught me what it truly meant to rely on God rather
              than myself. The very first night saw a room full of kids, excited
              for a week of fun, ready to experience the euphoric rush of
              worship and powerful messages. I, an anxiety-wracked,
              routine-reliant, obsessive germaphobe, was not one of them. I was
              in the back of the room, already fighting off a panic attack,
              because a girl in my cabin had a stomachache.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; As funny and pitiful as it seems now, at
              the time, I felt so trapped I could barely function. I had no
              familiar places, faces, or routines to give me any sense of
              security, and all I could think about was going home.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Nor did it get much better throughout the
              week. My fear of the unpredictable, already crippling, was
              compounded by guilt — I knew I was supposed to be having fun,
              doing activities, and making friends, but I could not bring myself
              to engage. I had never felt so helpless, or so useless. At last, I
              was confronted with the problem of being a ballpoint pen: when you
              come to the end of yourself, you come to the end of everything.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; If you’ll follow the metaphor a bit
              further with me, while we may not all have such strong ballpoint
              pen personalities, we all resemble them to some degree from birth.
              Our hearts carry countless limitations - whether that be mental,
              emotional, or spiritual. Take the virtue of peace, in my case.
              While all humans can experience it, as a signature of our Creator,
              our fallen natures can make it feel very difficult at times. Worse
              still, if we subtract God from the equation, there’s nothing we
              can do about it. Our primary purpose becomes simply to maximize
              happiness, minimize suffering, and keep our fragile, individual
              lives afloat. In stark awareness of our own finitude, we become
              enslaved to a nagging sense of self-preservation and scarcity, the
              constant fear of giving too much away, too much time or love or
              money. Even community gains a tragic sense of transaction: “I’ll
              support you, but I expect you to support me.”
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; From a practical standpoint, this
              survival mindset may seem like common sense to those who do not
              know Christ. We hear countless quotes from the self-focused world
              around us: “Pull yourself up by your bootstraps. Nobody is coming
              to save you. Take care of yourself first.”
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Throughout that week at camp, though,
              with the help of some blessedly patient college girls, I awoke to
              the possibility of another way. I began, however imperfectly, to
              turn towards the presence of God, who really had come to save me
              and would take care of me when I could not. In the hours I was
              supposed to spend swimming and playing archery tag, I drank in the
              Scriptures with a dedication that I still seek to replicate.
              Anxiety had been a constant battle for several years, but I
              suddenly felt a reprieve — a deep sense of calm and trust with no
              natural explanation. Ultimately, I learned that truly accepting
              Christ meant allowing him to fill you up, trading your pain and
              confusion for his comfort and protection. I realized how futile
              life would be without him, that reality often did not reflect
              routine, and that my own strength was therefore totally
              insufficient in the long run. I got an answer to the question that
              always haunted me, of what would happen when my ink ran out: God
              could fill me up again. This realization gave me the confidence I
              needed to begin my walk with the Holy Spirit. My ballpoint pen
              lifestyle gave way to something new.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; I got my first fountain pen in high
              school, as a Christmas gift from my uncle. At first, I was
              completely confounded — it was much different from what I was used
              to, and as usual, I was unsure how to feel about that. The ink, a
              mesmerizing purple-blue-black, came out so quickly. It shone wet
              on the page for a moment before it dried, so smears felt
              inevitable. The thickness of the strokes varied with pressure, so
              letters came out uneven and blotchy. And yet, as much as this lack
              of control disconcerted me, it came with a freedom that was
              almost… fun.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Intrigued, I began using the pen for my
              creative writing, one of the few areas in which I branched out
              from my utilitarian norms. Using it for anything more felt like
              overstepping. Surely, it would be too extravagant, given how much
              ink flowed out with each use; the pen might be fun, but it would
              run out even more quickly than the ballpoint; I needed to ration,
              to stay in control, to stay stable.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Once again, I was paralyzed by the risk of
              going empty.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; While I didn’t realize it then, I was
              using a fountain pen with a ballpoint pen mentality. Even worse,
              it was playing out in my faith.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; An empty ballpoint pen might not be
              refillable, but without an external source of ink, an empty
              fountain pen is just as unusable. Although my eyes had been opened
              to my need for God, my teen years saw me struggling to embrace the
              bounty of grace that he offered me. Equipped with the Holy Spirit,
              I had everything I needed to live a life of freedom — 2 Timothy
              1:7 encourages believers that “the Spirit God gave us does not
              make us timid, but gives us power, love and self-discipline.” When
              confronted by my sin or other trying situations, I could have
              thrown myself into his arms, pouring out my heart before him and
              asking earnestly for forgiveness, healing, his presence… anything.
              Instead of adopting this trust, I panicked at the fact that I was
              still failing, that God might think twice about his decision to
              love me. I found it hard to believe that he could be that
              generous, and so I shrank back into old habits of fear, control,
              and scarcity.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; As it turns out, he really is that
              generous. He poured so much strength and love into me during those
              years, even when I was too steeped in shame and self-reliance to
              ask for it. That being said, James 1:5 and Matthew 7:11 make it
              clear how much God delights specifically in meeting our requests,
              and I could have spared myself a whole lot of pain by taking that
              to heart. At that point, God was just the extra ink capsule that
              came with my fountain pen: a comforting backup plan, but not
              enough to affect my cautious habits. Salvation had given me a
              fountain pen heart, but it would take years of sanctification
              before I started treating it like one.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; In fact, it took another (equally
              unusual) summer camp experience. When I was seventeen, I served as
              a one-on-one caretaker for an incredible man with cerebral palsy,
              who I was unexpectedly paired with due to a shortage of guy
              counselors. Just like the last time I was at camp, I knew no one,
              everyone was coughing, and my routine was completely upside-down —
              but otherwise, it could not have been more different.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Every morning, after helping my girls’
              cabin with showers and dressing, I’d head over to the guys’
              cabins, where Matt would meet me with the biggest smile. We
              quickly learned to work together as the week went on, from
              communication to the complexities of his wheelchair to the most
              legendary fist bumps of all time. Before long, I was
              sleep-deprived from long nights of changing briefs and
              administering medicines. I was hungry from meals mostly spent
              feeding Matt. I was sore from lifting, pushing, climbing, and
              dancing. I was exhausted.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; I was used to being exhausted, though.
              What I wasn’t used to was being so inexplicably happy.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; Somehow, in this all-consuming service, I
              found myself brimming with a bone-deep joy, one that I had never
              been able to achieve at the average summer camp. Somehow, as my
              devotion to another person and to God became my singular aim in
              life, everything else fell away. Self-preservation took a
              backseat, allowing love to gush forth. I felt the Holy Spirit so
              tangibly, like ink flowing out of me and into me and out again,
              like the blood in my veins — no longer stagnant and hesitant, but
              fresh and breathtakingly alive.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; I saw, suddenly, the life I had been
              invited into all along. For years, I had been secure in my
              salvation, but I had not been living out my faith to its fullest
              potential. I had wildly underestimated the magnitude of God, the
              wisdom and love and courage available to those in his service. I
              no longer had to fear the life he was calling me to, because
              walking with him didn’t require righteousness — it enabled
              righteousness.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; The very next Christmas, I got not only
              another fountain pen (my uncle is legitimately the best), but a
              bottle of quick-drying ink. I remember watching, flabbergasted, as
              my uncle stood over the sink and taught me how to refill it. Only
              then did it occur to me how much more I might have enjoyed my pen
              if I had known about this, how much more freely I would have
              written with the ability to fill it again and again.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; From that experience, I realized that as
              Christians, the finitude of life should inspire us to give more,
              not less. We are alive only in Christ, so everything we have is a
              gift, and our stewardship is under his terms. Through him, we live
              life to the fullest, contrary to the picture that society often
              paints when it comes to organized religion. No matter what we
              believe, tragedies will continue to disrupt our routine and our
              sense of security — diagnoses, accidents, layoffs, breakups — but
              if we walk with Christ, we can make the absolute most of the gifts
              he has blessed us with. Like writing with a fountain pen, it will
              be unpredictable and messy, and it will take a lot of practice.
              But once you encounter the beauty and the freedom of it, you will
              find it very hard to turn back.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; As Paul puts it in 2 Corinthians 3:3, God
              has given us the chance to be “a letter from Christ… written not
              with ink but with the Spirit of the living God, not on tablets of
              stone but on tablets of human hearts.” My short time on earth has
              shown me a glimpse of the life he originally created me to live,
              one of such complete communion with him that his will and my will,
              his hands and my hands, are virtually indistinguishable. Though
              the process will take my whole life, and not be perfected until he
              returns, he invites me to leave my scared, small-minded ways, and
              to live freely, messily, beautifully, for him.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;He offers the same invitation to you. Will
              you take it?
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
