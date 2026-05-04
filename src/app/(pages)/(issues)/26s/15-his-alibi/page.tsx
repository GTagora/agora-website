import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Daeyong Kwon";
  const credit = "Photo by Debbie Jung";
  const title = "His Alibi";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/his-alibi.webp"
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
          <div className="font-serif text-sm md:text-lg leading-[200%] whitespace-pre-line">
            <p style={{ marginBottom: "20px" }}>
              *Note to Reader: This piece allegorically explores the author's
              spiritual pursuits.
            </p>

            <p>
              <b>20:03:29 Monday, 1/14/2013</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              Detective Sergeant Nocturne of the Gethsemane department
              reporting. Another new case arrived at my desk just now. The case
              had the entire department, including Captain Lestrade, in a
              catatonic trance. Something to do with a big guy in the force.
              I'll take a look tomorrow. Today's been too long of a day… wrapped
              up another aggravated assault case only for Captain Lestrade to
              beg me to dig up more evidence for the double homicide case from
              last week. He tried to butter me up by saying he liked my cologne.
              Something about wood… and cardamom? Funny, because I don't wear
              cologne. When's the last time I showered? Perhaps that's the
              culprit. Anyway, it would be nice if he could promote me to
              Lieutenant if he's going to ask me to examine two thirds of the
              cases that come into our Violent Crimes unit. My life is just case
              after case; a probable motif for my memory to omit trivial details
              of my own life like… showering. Logging off now.
            </p>

            <p>
              <b>16:45:47 Tuesday, 1/15/2013</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              Postmortem is in. The estimated time of death was 10 p.m. on
              Sunday, 1/13/2013. The deceased was Gabriel O. Damascus, a
              legendary detective from Eden. He's often credited with keeping
              Eden ranked as the safest city in the state for the past 20 years.
              Apparently he retired from the force a while back. We wouldn't
              have been able to determine the identity of the victim though if
              it wasn't for Eden's Deputy Chief recognizing him. It seems like
              Mr. Damascus' information was covered up since he was under
              Witness Protection. We couldn't even find any family members or
              friends to notify regarding his death. Anyway, the cause of death
              was a gunshot wound to the chest. What was unexpected though was
              that the shot seemed to be self-inflicted as the pistol used as
              the murder weapon was found in his hand, along with the gunpowder
              residue and blood splatter suggesting the gun was fired point
              blank at his chest. There was even a “note” found in Mr. Damascus'
              backpocket which I won't detail out of respect. It's also reported
              that there was ink discovered mixed in with the blood at the
              scene; a crimson swirl of blood enveloping the sparse blotches of
              ink. The source was likely the fountain pen that was found
              fragmented into many pieces. It was probably in his breastpocket
              when he pulled the trigger. Forensics was able to reconstruct it
              to some degree, but I couldn't trace it back to any known makers.
              Must've been custom-made. Also, according to Captain Lestrade,
              forensics noted that Mr. Damascus wore some strong cologne that
              day. In his words: “The old man went out all pretty. They say he
              was smelling good like you, Saul.” His remarks honestly felt more
              mocking, but I have more important things to remember. The
              location of the incident was “The Temple”, a modest bar and lounge
              here in Gethsemane that has a reputation for clandestine
              operations funded by the mega-rich. Not my unit's problem, but
              I'll still go for the on-site investigation tomorrow.
            </p>

            <p>
              <b>14:46:03 Wednesday, 1/16/2013</b>
            </p>

            <ol style={{ listStyleType: "decimal", marginBottom: "20px" }}>
              Just returned from the on-site. No new forensics evidence was
              acquired. However, there is now a possibility of some third party
              involved. Some patrons at “The Temple” seemed to recognize a
              picture of Mr. Damascus. Copying audio transcriptions of the
              testimonies here:
              <li style={{ marginLeft: "50px" }}>
                “Ah yes, he's the Thursday night heckler! There's actually a
                pianist who comes in every Thursday night, which is our weekly
                masquerade. He's been doing it for a while. His playing is
                wonderful, it really is. But after the performances, he comes
                down to join us. I've seen him talking to some gentlemen in the
                suite, the men that probably run Gethsemane honestly. Getting
                involved with them is risky, but I guess he has to survive as a
                musician somehow? I also saw him mingling with some escorts,
                probably the loneliness getting the better of him. But anyway,
                that gentleman in the picture comes in every Thursday and tries
                to dissuade the pianist from his indulgences. He really is
                steadfast though, it aches to watch... Each time, he shows up
                with a bouquet for the pianist and asks to simply talk. I think
                he may be the pianist's father, based on the pianist's unkind
                words directed towards him. I mean, even the way he earnestly
                gazes at the pianist after being shoved away, he has to be the
                father! So the pianist honestly has a reputation amongst us as
                daddy's boy, a reputation that the pianist most definitely
                despises.”
              </li>
              <li style={{ marginLeft: "50px" }}>
                “Oh, the pianist? Sorry buddy, but none of us know much about
                the kid. He just kind of showed up one day. What did he look
                like? First off, this place is a masquerade every Thursday
                night, so nobody really knows. I wish I could at least show you
                footage of the guy, but this place never had security cams.
                That's why all the sharks come here. I'll tell 'ya what though,
                the guy was tall. Probably just as tall as you Mr. Detective! I
                do feel for him though, his old man keeps trying to look out for
                the guy, even though he just wants to loosen up a bit! What's
                wrong with havin' a bit of fun? Life's too short to be all
                goody-two-shoes.”
              </li>
              I'll do a stakeout at “The Temple” tomorrow to see if the pianist
              shows up. This would have been a lot easier if Mr. Damascus wasn't
              in Witness Protection. On an unrelated note, it turns out it was
              Captain Lestrade's birthday today. I forgot about it, my memory is
              weird sometimes. I remember the most meticulous details regarding
              case files or anything that happens when I'm working, but I always
              forget details regarding my personal life outside of work. I don't
              even remember what I did after I got off work yesterday.
            </ol>

            <p>
              <b>19:23:44 Friday, 1/18/2013</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              Reporting in for today. So I must've fallen asleep at work last
              night, rendering me unavailable to conduct the stakeout
              investigation. With all the forensics reports, on-sites, and
              investigation documents, I must've been too out of it to stay
              awake. To compensate for my slumber, I dug through all CCTV
              recordings around “The Temple” to watch for any signs of the
              pianist, but was unable to find any. Odd. I also analyzed
              recordings from previous weeks to see if I could tail the pianist,
              but somehow there aren't any traces of him. Highly improbable. In
              fact, the patrons that I talked to during the on-site weren't even
              caught on camera. Did someone mess with the footage? Nobody
              could've tampered with the recordings since I'm the only one given
              access… But it also doesn't seem like the patrons were lying about
              the pianist. When I paid “The Temple” another visit earlier today,
              other patrons also knew of the pianist. Some of them let me know
              that the pianist did not perform yesterday as he usually does.
              Perhaps he's trying to evade the public eye after the incident?
              Who is the pianist? How did he evade surveillance and leave no
              traces? Too many anomalies, yet the evidence found at the scene
              points to one obvious yet unsatisfying answer…
            </p>

            <p>
              <b>08:15:13 Monday, 1/28/2013</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              Haven't updated this case in a while due to lack of discoveries,
              but today will be a closing report. I've taken up too many other
              cases for me to keep this case open; I don't even remember leaving
              the office nowadays. I tried another stakeout operation again this
              past Thursday, but I couldn't keep myself awake again. Captain
              Lestrade nagged at me again: “Saul O. Nocturne! It doesn't matter
              how sharp and hard-working you are. You're going to be unable to
              investigate if you don't take care of yourself!” …He wouldn't be
              able to take care of himself if it wasn't for me being a supposed
              “workaholic”. He's always loitering around at the office talking
              about visiting his parents. Must be nice knowing who your parents
              are… Anyway, the patrons at “The Temple” informed me that the
              pianist has not been around since. The final nail in the coffin
              for this case was the coroner's examination confirming that the
              fatal wound was self inflicted; there were no other signs of foul
              play. The report came in yesterday, so I'll cite that in my
              investigation report and close the case. Time to move on.
            </p>

            <p>
              <b>09:30:56 Friday, 2/1/2013</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              Detective Sergeant Nocturne reporting again. Reopening this case
              unofficially, as it was closed earlier this week with citations
              from the coroner. I would try to appeal to get this reopened, but
              I already know Captain Lestrade wouldn't let me. Not until I close
              the five other cases I'm working on. Just now, I received a
              package that was sent to the office with my name as the recipient.
              The sender: Gabriel O. Damascus. Initially, I thought it was some
              sick joke played by someone who found out that I was assigned to
              Mr. Damascus' case. But the contents of the package suggested
              otherwise: Redolence's Immortal Oud, a high-end cologne. Known for
              its woody scent and cardamom notes, it was the exact scent I
              smelled from myself on January 14th. Was my nose deceiving me? If
              not, how did this cologne end up on me? If this was truly Mr.
              Damascus, then what was his intention of sending the package
              specifically to me? It's almost like he foresaw what would happen,
              preemptively suggesting the existence of another suspect. And that
              suspect feels dangerously familiar… I've exhausted every other
              lead. Spent countless nights perusing through CCTV footage,
              leading on-sites, investigating the identities of Mr. Damascus and
              the pianist; yet, how could I not stay awake for the stakeout
              operations? In fact, how come I don't remember what I was doing
              outside of my hours in the office? I was never a “case”. I never
              had a reason to investigate myself, nor did I have the time or
              desire to do so given the mountain of cases always on my back. Yet
              now here I stand, with introspection inevitable.
            </p>
            <p style={{ marginBottom: "20px" }}>Who am I?</p>

            <p style={{ marginBottom: "20px" }}>
              I must now investigate the one I've been neglecting: myself. I'll
              start by planting GPS trackers in my work bag to glimpse into my
              life outside of work. I can't believe I'm doing this, yet I also
              can't believe I'm only doing this now.
            </p>

            <p>
              <b>19:56:23 Saturday, 2/2/2013</b>
            </p>
            <p>
              Holmes once said, “When you have eliminated the impossible,
              whatever remains, however improbable, must be the truth.” Was it
              really me? The GPS tracker indicated that I visited some rundown
              apartment in Downtown Gethsemane around 9 p.m. last night, then
              returned back to the office around 6 a.m. today. I have no
              recollection of any of this happening. So naturally, I went to the
              apartment to investigate. After some prying, I was able to get
              into what I now believe is the pianists'—or possibly my—residency.
              The first thing I noticed was the upright piano that seemed to
              take up half of the space in the crammed room. There was a medley
              of scores scattered around the room: Kreisler's Liebesleid,
              Tchaikovsky's 6th Symphony, Berlioz's Symphony Fantastique… the
              echoes of a lonely mind. Unable to request a full forensics unit
              on the basis of a closed case, I conducted a rudimentary forensics
              analysis myself and made three notable discoveries. The pianist
              seemed to dabble with composition using a set of exclusive
              fountain pens, which was the same unique model as the one
              discovered at “The Temple”. And of course, one of the pens was
              missing from the case, which had “From Dad” engraved onto it. I
              also found a notebook with a page ripped from it. Indented writing
              analysis revealed “10 p.m. on 1/13. The Temple in Gethsemane.”
              signed with three uppercase letters “SON”. Next to the desk, there
              was a trashcan with scraps of failed compositions and torn letters
              from Mr. Damascus. I was able to make out a few phrases from his
              letters:
            </p>
            <p>
              “... loneliness, or ambition, you can bring it to me instead…”
            </p>
            <p>
              “... pains me to see you with those corrupt men and women at the
              Temple …”
            </p>
            <p>
              “... ever since you angrily stormed out of the house and the
              accident happened…”
            </p>
            <p>
              “... it would be my greatest joy to spend time with you once
              more…”
            </p>
            <p style={{ marginBottom: "20px" }}>
              A rejection of his father's concern, a letter demanding the
              presence of the father, and what seems to be the origin of the
              murder weapon… Perhaps the pianist wanted to use the fountain pen
              gifted by the very one he was planning on harming as some means of
              closure… no, I'm just conjecturing. Did I, a detective, murder my
              own father? No, no, it can't be… I'm the greatest detective in
              Gethsemane; I've upheld justice against wrongdoers my entire life.
              Must I encounter the other side of justice? No, let's slow down,
              there's no guarantee that I'm the pianist… uncovering the identity
              of the pianist comes first. Since stakeouts haven't been working,
              I'll set up hidden cameras in the room and return first thing
              tomorrow to retrieve the footage.
            </p>

            <p>
              <b>14:01:08 Sunday, 2/3/2013</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              Why couldn't I remember? How did I not know?? Did I kill my own
              father??? The one my eyes are now beholding through the
              recording—it was me. The one who returned home, put aside his
              briefcase and picked up the fountain pen. The one agonizing over
              the piano, which sounded like it was vicariously crying out for
              mercy. It must be. The way the pianist, or I, woke up the next
              day, picked up the briefcase, and headed for the office. The fact
              that none of this was caught on CCTV when it was just this
              morning… The story is cohesive if I myself was the pianist. This
              explains how the CCTV footage seemingly never caught the pianist,
              since I, the pianist, would've manipulated the videos myself. The
              pianist's imposing stature, the cologne I smelled on myself that
              day, my flaky memory and lack of identity… Leaving now for “The
              Temple”—where it all happened.
            </p>

            <p>
              <b>22:03:53 Sunday, 2/3/2013</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              I am Saul O. Nocturne. The Detective Sergeant of Gethsemane, the
              enigmatic pianist of “The Temple”, and the son of Gabriel O.
              Damascus; now two in one. And it was I, with the very fountain pen
              that my father gifted me, who pierced him at this very location. I
              remember, no, I know who I am. A finale of unleashing the
              frustration created by his concerned watch over me, resenting his
              steadfast care for me, and blaming my loneliness on him… Swearing
              vehemently at my father and telling him to disappear. Wounded and
              rejected, my father spoke his last words while embracing me:
              “You're my son, Saul. I love you, Saul. Remember that for me,
              Saul.” He stepped back, drew the pistol from his coat, then pulled
              the trigger into the very wound that was now stained with ink. His
              blood poured over the ink I had driven into his flesh. I don't
              understand. Why would he do that? I deserve the utmost punishment.
              Life in prison or death sentence, whatever it is, I have it coming
              for me.
            </p>

            <p>
              <b>16:49:28 Friday, 2/8/2013</b>
            </p>
            <p style={{ marginBottom: "20px" }}>
              Today marks my last day as Detective Sergeant. This entire past
              week, I forsook all other cases assigned to me to gather evidence
              against myself. At my apartment, I'd compile all video and other
              forensic evidence that I unknowingly was the pianist. At the
              office, I'd organize my artifacts into case files to submit to the
              Captain. Even the DNA test I submitted to the forensics biology
              lab proved that I was in fact the pianist and Gabriel O. Damascus'
              son. I entered Captain Lestrade's office earlier today with all
              the compiled evidence, and pleaded for justice to be delivered.
              The room went silent, confusion and sorrow written on Captain
              Lestrade's face. Looking back up at me, he broke the silence:
              “Saul, you and I both know there's conclusive evidence already. A
              self-inflicted gunshot wound along with a self-written note found
              on his body. There's not much we can do… I think it's best if you
              turn in your badge, Saul. Take some time for yourself. I'm sorry
              for your loss, Saul.”
            </p>
            <p style={{ marginBottom: "20px" }}>Ah.</p>
            <p>
              I'm sentenced to innocence. My guilt was engraved in ink. His
              mercy answered in blood. Washing me white as snow…
            </p>
            <p>Is this… love?</p>
            <p>
              He would always send me letters of concern and affection ever
              since I left him.
            </p>
            <p>
              He always came to my performances with a bouquet of flowers in
              hand.
            </p>
            <p style={{ marginBottom: "20px" }}>
              He knew my intentions, yet came determined to show me love and
              grace until the very end.
            </p>

            <p>
              <b>21:45:00 Thursday, 5/2/2013</b>
            </p>
            <p>
              Detective Lieutenant Nocturne of the Eden department reporting.
              After taking some time off, I started my new job as Detective
              Lieutenant of Eden, the very role my dad started his career in. I
              also stopped performing at “The Temple”, and instead debuted as a
              concert pianist with the Eden Symphony.
            </p>
            <p>It took me a while to reconcile.</p>
            <p>
              All this time, he was showing me nothing but love and care; yet,
              it took mercy and grace at the cost of his life for me to
              understand and accept. I was loved this entire time. How deep was
              his love for me?
            </p>
            <p>
              I visited his resting place earlier today. I want to let him know
              so many things: “I'm sorry”, “I get you now, dad”, “Thank you for
              showing me who I am. Thank you for the blood…”
            </p>
            <p>
              I've resolved to live the life that my dad freed me into. A life
              that glorifies and honors him.
            </p>
            <p>Until we meet again, dad.</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
