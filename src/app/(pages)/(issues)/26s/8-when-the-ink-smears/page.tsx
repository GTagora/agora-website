import Image from "next/image";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { Reference, Footnote } from "@/app/components/buttons";
import { div } from "framer-motion/client";

export default async function Article() {
  const author = "Edward Huang";
  const credit = "";
  const title = "When the Ink Smears";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/8-when-the-ink-smears.webp"
            width={600}
            height={600}
            alt="article image"
          />
          <p className="text-[9pt] font-sans tracking-wide text-center opacity-70 mb-10">
            {credit}
          </p>
          <h1 className="font-playfair font-medium text-[30pt] md:text-[40pt] my-5 md:my-10">
            {title}
          </h1>
          <h2 className="font-cormorant font-semibold text-xl mb-1 uppercase">
            BY {author}
          </h2>
          <h3 className="font-normal text-md mb-8 text-neutral-500">{date}</h3>
          <div className="font-serif text-sm md:text-lg leading-[200%] whitespace-pre-line space-y-4">
            <p>
              <em>Sleep?</em>
            </p>
            <p>
              What does ink symbolize? Ink preserves. Ink records. Ink
              testifies. Ink endures. It marks identity. It writes stories. But
              it also stains.
            </p>
            <p>
              Sleep is the difference between a life written clearly versus one
              smudged by neglect. When we deprive ourselves of sleep, we blur
              the testimony our lives are meant to write. Fatigue distorts our
              judgment, productivity, and moral clarity. Our minds and bodies
              need sleep to function. Just as ink needs proper care to remain
              legible, so too do we.
            </p>
            <p>
              <em>So what is sleep?</em>
            </p>
            <p>
              Sleep is the body’s natural reset. It is more than simply closing
              our eyes and waiting for the next day; it restores energy and
              function. Sleep is when muscles repair, hormones reset and the
              brain clears metabolic waste.
            </p>
            <p>
              However, we have largely neglected this essential reality. As busy
              students at a tech school, our days are filled with homework,
              studying, classes, and friends. In the pressure to keep up with
              everything, sleep is often the first thing we sacrifice. The
              neglect of rest has become so normalized that it is almost worn as
              a badge of honor: “I only slept four hours last night,” or “I
              pulled an all-nighter.” What should be recognized as exhaustion is
              instead praised as dedication.
            </p>
            <p>
              But we are not all powerful beings capable of functioning without
              sleep. God designed our bodies with limitations, and when we push
              beyond our limits, there are consequences. Yet the consequences
              are so grossly underestimated. Sleep is not some quality we can
              sweep under a rug and return to later. One hour of lost sleep can
              take as long as up to four days to fully recover{" "}
              <Reference number={1} />. When we deprive ourselves of sleep,{" "}
              <strong>
                we can never fully recover the sleep we have lost.
              </strong>
              Students who work themselves on deprived sleep and try to “catch
              up” later should take note: studies have shown that after 10 days
              of chronic partial sleep restriction followed by a week of
              unrestricted sleep, most measures of brain function including
              cognitive accuracy, motor activity, and brainwave patterns{" "}
              <strong>do not</strong> return to baseline levels even after seven
              days of recovery <Reference number={2} />. In other words, the
              effects of sleep loss reach far beyond simple fatigue, they shape
              the very days we live, long after the days of lost sleep have
              passed. And when that happens, we cannot live up to the full
              potential God has planned for us.
            </p>
            <p>
              <em>Why did God create sleep?</em>
            </p>
            <p>
              All of God’s creatures sleep. Humans, mammals, fish, worms, even
              certain single-celled micro-organisms sleep.
            </p>
            <p>
              From the beginning, God demonstrated the power of rest: He placed
              Adam into a deep sleep (Genesis 2:21) to enable the creation of
              Eve. While this was a supernatural act, it reflects God’s design
              of rest and reliance on Him. It shows that there is a time to
              yield, a time to stop, and a time to trust God with what we cannot
              control.
            </p>
            <p>
              Sleep was given to us as a form of deep rest, a gift woven into
              the very fabric of our creation. Just as God rested on the seventh
              day, setting apart the Sabbath as holy and calling His people to
              enter into that rest (Exodus 31:16; Leviticus 23:3), we too called
              to honor the rhythm of rest in our own lives. When we sleep, we
              relinquish control and pause our production. We acknowledge our
              finitude, trusting God to wake us up the next day.
            </p>
            <p>
              This physical pause mirrors the spiritual rest Hebrews 4:11 speaks
              of: urging us to ‘strive’ to enter it, which requires both
              faithfulness and intention. By completing the work God has
              entrusted to us and submitting to the limits He has designed, we
              participate in a pattern of rest that preserves our bodies, renews
              our minds, and strengthens our capacity to serve and glorify Him.
            </p>
            <p>
              Sleep also reminds us of our human finitude. Our physical bodies
              need food, water, oxygen, and sleep in order to function. This
              dependence on God for our existence shapes how we think, learn,
              and perform each day (Matthew 6:26). The effects are especially
              clear in our academic lives, where the quality of our focus and
              performance reflects whether we honor these essential needs.
            </p>
            <p>
              <em>
                How does sleep affect our academics? Our memories? Our
                career?{" "}
              </em>
            </p>
            <p>
              Extensive research has highlighted the importance of sleep. In one
              study, first-year college students from three universities wore
              sleep actigraphy for a month early in the academic term, across
              five independent samples. The results showed that each hour of
              lost average nightly sleep corresponded to a 0.07 drop in
              end-of-term GPA <Reference number={3} />. Even modest reductions
              in sleep produced measurable effects on academic performance,
              highlighting its role as a crucial and active component of
              learning and memory retention.
            </p>
            <p>
              This connection becomes clearer when we consider sleep’s role in
              learning and memory. The brain requires rest to absorb new
              information effectively. In one study, healthy young adults were
              divided into two groups: one was allowed a 90-minute nap, while
              the other remained awake. Both groups completed intensive learning
              tasks before and after the nap period. Those who stayed awake
              showed a progressive decline in learning ability, even though
              their concentration remained stable. Compared to the napping
              group, their performance was 21% lower, demonstrating a clear
              advantage for rest <Reference number={4} />. Without adequate
              rest, the hippocampus becomes saturated, limiting the brain’s
              capacity to encode and retain information. God’s design is evident
              in this process: sleep restores our minds and consolidates memory,
              enabling us to learn, remember, and act with clarity each day.
            </p>
            <p>
              Similarly, sleep is essential afterward for retaining information
              we have learned. Studies of memory consolidation show that
              participants who rested after learning demonstrated significantly
              better recall than those who remained awake during the same
              interval <Reference number={5} />. Pulling all-nighters or relying
              solely on caffeine may give the illusion of productivity, but the
              brain has a finite capacity; without rest, our ability to encode
              and retain knowledge diminishes. These boundaries are not flaws in
              our design but reflect the way we were created to live.
            </p>
            <p>
              This design carries a deeper lesson: just as our brains require
              time to consolidate learning, our lives require periods of pause
              to integrate experience and prepare for what comes next. Growth
              and flourishing are not achieved by constant effort alone; they
              emerge in the rhythm of work and rest. When God instituted the
              Sabbath, He emphasized rest as part of life’s proper order, and
              sleep functions in the same way. In the time we step away from our
              work, sleep restores our minds and refreshes our bodies. Like ink
              drying on a page, the lessons of the day are quietly preserved.
            </p>
            <p>
              Just as sleep consolidates the work of the day for the mind,
              Scripture reminds us that flourishing or faltering depends on how
              faithfully we steward what we’ve been given.
            </p>
            <p className="text-center">
              <em>
                “For whoever has will be given more, and they will have an
                abundance. Whoever does not have, even what they will have will
                be taken from them.“{" "}
              </em>
            </p>
            <p className="text-center">
              <em>Matthew 25:29</em>
            </p>
            <p>
              The idea is simple: if we faithfully manage our time, finish our
              work, and dedicate our time to completing entrusted tasks, we will
              have ample time to enjoy sleep at night (Hebrews 4:11). Sleep will
              then help us solidify information we learned throughout the day,
              clearing our hippocampus of extraneous memories, and shift
              important ones into our long-term memory. After a night of
              restorative sleep, we wake up refreshed, ready to face the labors
              of the day (Isaiah 50:4, Psalms 5:3).
            </p>
            <p>
              However, if we spend our day idling and squandering the time we
              were given, we live out the warning of the parable of the talents.
              After wasting the day, we panic at night, rushing to finish work
              that should have been done earlier. This cuts into the time meant
              for sleep, leaving us groggy and mentally unprepared for the next
              day. Learning, focus, and efficiency all suffer. As our
              productivity declines, we are forced to stay up even later to
              catch up on missed work. Ultimately, the rest we cling to dwindle
              as this downward spiral continues, and each misused hour magnifies
              the toll on body, mind, and spirit. When burnout sets in, the
              consequences go beyond mental fatigue: our bodies begin to suffer,
              leaving us vulnerable to illness and long-term health risks.
            </p>
            <p>
              <em>How does sleep impact our health? Our immune system? </em>
            </p>
            <p>
              The Guinness World Record no longer recognizes sleep deprivation
              as one of its achievements. Sleep deprivation is so prevalent and
              detrimental to our health that it increases global risk of
              mortality by 13%, costing the US around 1.2 million working days
              every year <Reference number={6} />. A 14-year study of 2,282 male
              workers in Japan found that sleeping less than six hours per night
              was associated with a more than threefold increased risk of
              cardiovascular or coronary events <Reference number={7} />.
            </p>
            <p>
              Beyond its impact on longevity, sleep deprivation also compromises
              the body’s ability to fight illness. In a controlled study of
              approximately 160 healthy adults, researchers measured sleep
              duration for one week using wrist monitors before exposing
              participants to a rhinovirus. Participants were grouped by sleep
              duration: less than 5 hours, 5–6 hours, 6–7 hours, and more than 7
              hours per night. After viral exposure, those who slept less than 5
              hours were 4.5 times more likely to develop a clinically verified
              cold, while those who slept 5–6 hours were 4.2 times more likely
              compared to individuals who slept more than 7 hours. These results
              remained significant even after adjusting for factors such as age,
              stress levels, and baseline immunity <Reference number={8} />.
            </p>
            <p>
              When we cut corners on rest, the consequences extend far beyond
              simple tiredness. Sleep deprivation weakens the immune system,
              increases susceptibility to illness, and elevates the risk of
              accidents and long-term health problems. During exam seasons, when
              many of us sacrifice sleep to finish assignments or study longer,
              we often find ourselves becoming ill and exhausted, less able to
              complete the very work we stayed awake to accomplish. The hours we
              forgo are not easily recovered, and the toll on our bodies can
              last for days.
            </p>
            <p>
              Since our bodies are gifts from God, neglecting sleep becomes a
              matter of stewardship. Scripture repeatedly emphasizes that the
              body is entrusted to us, not owned by us (1 Corinthians 6:19-20; 1
              Corinthians 3:16-17; Romans 12:1). Chronic sleep deprivation
              treats this gift carelessly, prioritizing function over
              preservation. The consequences however, also extend beyond
              ourselves: fatigue can increase risks of accidents and diminish
              our ability to protect and care for others.
            </p>
            <p>
              <em>How does our lack of sleep affect others?</em>
            </p>
            <p>
              Fatigue is one of the leading causes of accidents worldwide. So
              serious is this risk that, on average, someone dies in a traffic
              accident due to a fatigue-related error every hour. These
              accidents typically occur in two ways. First, a driver may fully
              fall asleep for several seconds, losing complete control of the
              vehicle. More commonly, accidents occur due to microsleeps, which
              are brief, involuntary lapses in attention that last a fraction of
              a second to several seconds. During a microsleep, the brain
              essentially “switches off,” and the driver may continue steering
              or pressing the pedals, but their awareness and ability to react
              are severely impaired. To an outside observer, it may appear the
              driver is awake, yet in those critical moments, they are not
              processing their surroundings. At highway speeds, even a
              two-second lapse can cover more than half a football field, making
              microsleeps one of the deadliest consequences of sleep deprivation
              <Reference number={9} />.
            </p>
            <p>
              Pulling an all-nighter increases attentional failures by over
              400%, and sleeping only four hours per night for six consecutive
              nights produces impairment comparable to staying awake for 24
              hours. In practical terms, a driver after a week of insufficient
              sleep may be just as impaired as someone who has not slept at all
              <Reference number={10} />. Both acute and chronic sleep loss,
              therefore, greatly increase the risk of microsleeps behind the
              wheel.
            </p>
            <p>
              More subtly, there is a smaller, perhaps just as important
              consequence for us as Christians. When we are tired, we lose
              concentration and struggle to be fully present. Our patience
              shortens, our attention drifts, and we fail to give ourselves
              fully to others. Yet Scripture repeatedly calls us to love our
              neighbors and serve one another faithfully (1 Peter 4:10,
              Galatians 6:2). When others need our attention, help, or presence,
              fatigue dulls our awareness and drains our energy, leaving us
              unable to respond as we should. If this is what’s at stake, the
              question becomes practical: how do we align our lives to honor the
              gift of sleep?
            </p>
            <p>
              <em>So what can I do to get more sleep? </em>
            </p>
            <p>
              The answer begins with understanding why we struggle: our lives
              are full, our schedules demanding, and our temptation is to push
              past our limits. Recognizing these limits is the first step toward
              rest. God has built them into us, and we are called to order our
              lives around them rather than resist them. Learning to sleep well
              is an act of humility, an acknowledgement that we are not
              self-sustaining but fully dependent on Him.
            </p>
            <p>
              When we live intentionally, serving God, caring for others, and
              completing the work entrusted to us, we create space for the rest
              our bodies require. While not everything is within our control,
              some habits are. Choosing to step away from distractions, quieting
              our minds, and preparing ourselves for rest are all ways of
              stewarding the life we have been given.
            </p>
            <p>
              In these daily decisions, we align ourselves with the rhythm God
              designed: a rhythm of work and surrender, effort and rest. Sleep
              is not wasted time; it is a necessary pause where what we have
              lived is quietly preserved. Like ink drying on a page, sleep
              allows the lessons, choices, and moments of our lives to settle
              into clarity. Without it, everything blurs: our thoughts, our
              actions, and even our witness—all smudges. With it, what God is
              writing through us becomes more legible, more faithful, and more
              whole.
            </p>
            <p>
              In the end, the question is not simply whether we are getting
              enough sleep, but whether we are living in a way that allows our
              lives to be written clearly, so that the story we leave behind
              reflects the One who is writing it.
            </p>
            <p>
              <em>Author’s Note:</em> I want to extend special thanks to Matthew
              Walker. His book
              <em>Why We Sleep</em> and his TED Talk were a major inspiration
              for this piece, shaping both my understanding of sleep and my
              conviction to prioritize it. Sleep is not just a biological
              necessity. It is a gift, essential for our minds, bodies, and the
              way we live each day.
            </p>
            <p className="font-serif font-bold text-xl mt-10">Footnotes</p>
            <div className="font-serif text-md whitespace-pre-line space-y-2">
              <Footnote number={1} text="Romans 8:28" />
              <Footnote number={2} text="Jeremiah 29:11" />
              <Footnote number={3} text="Hebrews 10:14" />
              <Footnote
                number={1}
                text="Kitamura, S., Katayose, Y., Nakazaki, K., Motomura, Y., Oba, K.,
                Katsunuma, R., Terasawa, Y., Enomoto, M., Moriguchi, Y., Hida,
                A., & Mishima, K. (2016). Estimating individual optimal sleep
                duration and potential sleep debt . Scientific Reports, 6, 35812."
              />
              <Link href="https://doi.org/10.1038/srep35812">
                doi.org/10.1038/srep35812
              </Link>
              <Footnote
                number={2}
                text="
                Ochab, J. K., Szwed, J., Oleś, K., Bereś, A., Chialvo, D. R.,
                Domagalik, A., Fąfrowicz, M., Ogińska, H., Gudowska-Nowak, E.,
                Marek, T., & Nowak, M. A. (2021).
                  Observing changes in human functioning during induced sleep
                  deficiency and recovery periods. PLOS ONE, 16(9), e0255771."
              />
              <Link href="https://doi.org/10.1371/journal.pone.0255771">
                https://doi.org/10.1371/journal.pone.0255771
              </Link>
              <Footnote
                number={3}
                text="
                Okano, K., Kaczmarzyk, J. R., Dave, N., Gabrieli, J. D. E., &
                Grossman, J. C. (2023).
                  Sleep quality, duration, and consistency are associated with
                  better academic performance in college students
                  Proceedings of the National Academy of Sciences, 120
                (6), e2209123120."
              />
              <Link href="https://doi.org/10.1073/pnas.2209123120">
                https://doi.org/10.1073/pnas.2209123120
              </Link>
              <Footnote
                number={4}
                text="Ong, J. L., Lau, T. Y., Lee, X. K., van Rijn, E., & Chee, M. W.
                  L. (2020). A daytime nap restores hippocampal function and
                  improves declarative learning.
                  Sleep, 43(9), zsaa058."
              />
              <Link href="https://doi.org/10.1093/sleep/zsaa058">
                https://doi.org/10.1093/sleep/zsaa058
              </Link>
              <Footnote
                number={5}
                text="
                Gais, S., Lucas, B., & Born, J. (2006).
                Sleep after learning aids memory recall
                Learning & Memory, 13(3), 259–262."
              />
              <a href="https://doi.org/10.1101/lm.132106">
                https://doi.org/10.1101/lm.132106
              </a>
              <Footnote
                number={6}
                text="
                RAND Europe. (2016, November 30).
                Lack of sleep costing U.S. economy up to $411 billion a year
                . RAND Corporation."
              />
              <Link href="https://www.rand.org/news/press/2016/11/30.html?utm_source=chatgpt.com">
                https://www.rand.org/news/press/2016/11/30.html
              </Link>
              <Footnote
                number={7}
                text="
                Hamazaki, Y., Morikawa, Y., Nakamura, K., Sakurai, M., Miura,
                K., Ishizaki, M., Kido, T., Naruse, Y., Suwazono, Y., &
                Nakagawa, H. (2011).
                  The effects of sleep duration on the incidence of
                  cardiovascular events among middle‑aged male workers in Japan
                  Scandinavian Journal of Work, Environment & Health, 37
                (5), 411–417."
              />
              "
              <Link href="https://doi.org/10.5271/sjweh.3168">
                https://doi.org/10.5271/sjweh.3168
              </Link>
              <Footnote
                number={8}
                text="
                Prather, A. A., Janicki-Deverts, D., Hall, M. H., & Cohen, S.
                (2015).
                Behaviorally assessed sleep and susceptibility to the common
                cold
                Sleep, 38(9), 1353–1359."
              />
              <Link href="https://doi.org/10.5665/sleep.5010">
                https://doi.org/10.5665/sleep.5010
              </Link>
              <Footnote
                number={9}
                text="
                Pack, A. I., Pack, F. M., Rodgman, E., Cucchiara, A., Dinges, D.
                F., & Schwab, C. W. (1995).
                  Characteristics of accidents attributed to the driver having
                  fallen asleep
                Accident Analysis & Prevention, 27(6), 769–775."
              />
              <Link href="https://doi.org/10.1016/0001-4575(95)00055-3">
                https://doi.org/10.1016/0001-4575(95)00055-3
              </Link>
              <Footnote
                number={10}
                text="
                Spaeth, A., Aeschbach, D., & Anderson, C. (2013, June 4).
                  The neurobiology of sleep loss in humans.
                The American Journal of Managed Care®."
              />
              <Link href="https://www.ajmc.com/view/the-neurobiology-of-sleep-loss-in-humans?utm_source=chatgpt.com">
                https://www.ajmc.com/view/the-neurobiology-of-sleep-loss-in-humans
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
