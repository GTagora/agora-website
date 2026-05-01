import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Catherine Tian";
  const credit = "Photo by Name";
  const title = "Re: Written";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/re-written.webp"
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
            <div>
              August 20, 2010 (Age 5) - 3:46 pm, The doctor&rsquo;s office
            </div>
            <br />
            <div>
              Breathe. Deep breaths. In, out. No &mdash; I can't. It smells
              strongly like hand sanitizer in here. Are they going to give me a
              shot today? They gave me a shot last year so they probably
              won&rsquo;t do it again, right? What if it hurts? It&rsquo;s
              definitely going to hurt. I don&rsquo;t want the shot. Oh nonono.
              Please, I don&rsquo;t want to go get the shot. Goodness, what time
              is it? Why haven&rsquo;t they called my name yet? I want to be
              home, anywhere but here. I&rsquo;m scared. I&rsquo;m scared.
            </div>
            <br />
            <div>
              <i>Dear God,</i>
            </div>
            <div>
              <i>
                Fear consumes my heart when it should be filled with You. My
                mind is flooded with doubt after doubt, what-if after what-if,
                and I am suffocating. Why can&rsquo;t I escape this?
                What&rsquo;s wrong with me? I pray and I plead and I try to work
                every angle to remove this feeling, to believe better, to love
                better, to have purer faith, but I can&rsquo;t. Nothing helps.
                Oh God, what am I doing wrong? Are You not the God who moves
                mountains? Am I too far gone from Your reach? My God, my God,
                why have You forsaken me? [Psalm 22:1]
              </i>
            </div>
            <br />
            <div>
              February 15, 2022 (Age 16) - 12:15 pm, Valley Forge Middle School
              Hallway
            </div>
            <br />
            <div>
              My heart is beating faster again. The pounds on my ribcage are
              getting stronger. These hallways are so crowded with people and I
              feel every eye on me. What if one of them looks at me funny or
              thinks I&rsquo;m weird? I feel like those girls over there are
              looking at me funny. Just casually walk by, make quick eye
              contact, smile if their gaze lingers. No, that&rsquo;s
              embarrassing. Gosh, why does part of me want to be like them?
              They&rsquo;re so fake. Stop, that&rsquo;s rude. Wait. Is there
              someone behind me? What if my shirt looks funny from behind. Ok,
              just casually smooth it out. Keep walking, just keep walking…
            </div>
            <br />
            <div>
              <i>Dear God,</i>
            </div>
            <div>
              <i>
                I am so stuck. I&rsquo;m stuck in my head, stuck in my ways,
                stuck in this world. The walls I live in are unbreakable. You
                promised deliverance, but why do I feel like I&rsquo;m drowning?
                I reach out my hand, but I sink before I can feel Your touch. I
                try to press on, but even then, my heart is so clouded with
                fault and impurity that I fear I am despised by You. I fear I am
                rejected by You because I constantly reject You. God, I need
                help even just to want You. Save me, O God, for the waters have
                come up to my neck. [Psalm 69:1]
              </i>
            </div>
            <br />
            <div>
              August 3, 2025 (Age 20) - 6:33 pm, John Lewis Student Center
            </div>
            <br />
            <div>
              I didn&rsquo;t make the right choice God. I didn&rsquo;t help her
              get the door when I saw she needed help. If Your Spirit lives in
              me, shouldn&rsquo;t I have the heart to do this simple task? I
              failed again. Wait no. It&rsquo;s not about what I do. Remember
              the Gospel. Jesus has paid it all and His work is complete.
              Nothing can change that. You are saved. Wait. Am I? Romans 10:9
              says “because, if you confess with your mouth that Jesus is Lord
              and believe in your heart that God raised him from the dead, you
              will be saved.&rdquo; Have I confessed it? I think so? What if I
              am deluding myself? What if I don&rsquo;t actually believe but I
              only think I believe and what if I&rsquo;m a fake and what if
              it&rsquo;s all in my head but no just slow down, simplify but I
              can&rsquo;t and what if, what if &mdash;
              icantbreatheGodhelpmeineedmorefaithhelpimscared…
            </div>
            <br />
            <div>
              <i>Lord,</i>
            </div>
            <div>
              <i>
                There&rsquo;s so much noise in my head. I run in circles, asking
                question after question, believing that logic will guide me to
                the answers I seek. But the questions never stop. What if my
                beliefs are a lie? How can I know You are there? I cannot trust
                myself. I am afraid of myself. And yet, I am the one person I
                cannot escape. You tell me to ask without doubting [James 1:6],
                but my heart and mind are too broken for that. I see Your beauty
                all around me, Your worthiness of the glory and worship that
                creation reveals. But with every cry of worship, there is the
                shout of my unfaithfulness, my endless fault, my questioning, my
                evil. I try to pick up my cross, but how much longer? My head is
                in pain. God, I believe, I believe, help my unbelief. [Mark
                9:24]
              </i>
            </div>
            <br />
            <div>
              October 17, 2025 (Age 20) - 2:02 pm, Outside of John Lewis Student
              Center
            </div>
            <br />
            <div>
              I still have so many assignments to do, plus another five-hour
              treacherous lab experiment. I will probably mess up anyway and
              have to redo it so what&rsquo;s even the point? And after spending
              all of yesterday fighting off my regular spiraling questions, I
              truly feel at my end. I don&rsquo;t know if I have the strength
              for this day. Deep breath. Look around. The weather is nice at a
              comfortable 63 degrees. I can&rsquo;t remember the last time I got
              to sit outside and just enjoy nature. The wind is a quiet comfort
              amidst the noise. Is that Your presence, Father? And how come I
              have never noticed that tree, even after walking by it every
              single day? It reminds me of You &mdash; steady, beautiful,
              present. Have I been in Your shade all this time?
            </div>
            <br />
            <div>
              <i>Dear God,</i>
            </div>
            <div>
              <i>
                I am overwhelmed. It seems like I am constantly submerged in
                noise. This world is so loud. My head is so loud. But Father,
                yesterday I got to sit outside in Your creation. And the noise
                seemed to die down a bit. I felt the glow of the sun, the ripple
                of a fall breeze, the swaying of the saplings. You were there
                too, I know this is true. How good it is that the place where we
                find respite is not in our creation, but Yours. I cannot deny
                that the heavens declare Your glory God, and the sky above
                proclaims Your handiwork [Psalm 19:1].
              </i>
            </div>
            <br />
            <div>March 13, 2026 (Age 20) - 10:56 pm, The Hive Apartments</div>
            <br />
            <div>
              Another long day, another day fighting for my faith. It&rsquo;s so
              hard most days. I got to worship today though, just silently in my
              room with my guitar. I played a few songs, and for just a moment,
              all I felt was the joy of Your company. I forgot how that felt.
              God, will tomorrow be easier to fight or harder? Will I end up in
              a deeper hole than the one I started in? I don&rsquo;t know. That
              scares me. Maybe that&rsquo;s not the point. I see now that the
              antidote to fear is not certainty, but faith. And the faith that
              has captured me is one of a God who loves because of who He is,
              regardless of how deep I sink. My faith is small&mdash;smaller
              than a mustard seed [Matthew 17:20]. But I place even that in the
              hands of a God who has resurrected a man named Jesus and defeated
              death. If this is true, the voice of fear is incomparable to Your
              hope. You&rsquo;ve won the battle. You have won me.
            </div>
            <br />
            <div>
              <i>Jesus,</i>
            </div>
            <div>
              <i>
                When I look at You, I see Your face &mdash; dimly, but one day,
                face to face [1 Corinthians 13:12]. I see Your glory and Your
                majesty as light within my inescapable mind. I scratch the
                surface of Your mercy and goodness in the ordinary. You have
                shown me that faith is found precisely in moments of fear. When
                I find myself falling into darkness, I remember that I
                can&rsquo;t save myself, but You did. You&rsquo;ve invaded my
                heart, shattered the walls, breathed in me new life through
                Yours. Fear flees at the sight of You, death has no hold.
                &ldquo;So Lord, in You will I take my refuge.&rdquo; [Psalm
                11:1]
              </i>
            </div>
            <br />
            <div>
              <i>
                <b>
                  “May the God of hope fill you with all joy and peace in
                  believing, so that by the power of the Holy Spirit you may
                  abound in hope.&rdquo; - Romans 15:13
                </b>
              </i>
            </div>
            <br />
            <div>Amen</div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
