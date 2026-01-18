import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Emily Choi";
  const credit = "";
  const title = "134340";
  const date = "December 06, 2025";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-contain md:object-cover my-3 md:w-[60vw] md:h-[70vh]"
            src="/issues/25f/134340.webp"
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
          <div className="font-serif text-sm md:text-lg leading-[200%] whitespace-pre-line space-y-8">
            <div>
              <p>
                <em>
                  I’ve always wanted to ask you. Why did you do that to me that
                  time?
                </em>
              </p>
            </div>
            <div>
              <p>
                Our lives never go as we plan. We map out our future based on
                what we have and what we think we know now. When we lose what we
                used to have, it’s hard to imagine our future and thus easy to
                be stuck on our losses. I’m telling you, it’s so easy to feel
                resentful to the world, to God.
              </p>
            </div>
            <div>
              <p>
                <em>I’ve lost my status. I’ve been downgraded to a dwarf. </em>
              </p>
            </div>
            <div>
              <p>
                Maybe you got into your dream college, secured the perfect
                internship, or found the partner you prayed for.
              </p>
              <p>
                And maybe you don’t have any postgrad plans, don’t get a return
                offer, or deal with a breakup.
              </p>
              <p>
                You might think you had so much potential for your aspirations,
                but you feel like you’ve lost them all.
              </p>
            </div>
            <div>
              <p>
                <em>
                  Why did you have to publicly expel me? Did I do something
                  wrong?
                </em>
              </p>
            </div>
            <div>
              <p>
                When you lose these external things, it’s not just you who
                recognize the absence. Others around you notice that you no
                longer have what you used to have. It might feel humiliating.
                You might ruminate on what you’ve done wrong and get stuck on
                “what if…?” What if I had been more future-oriented? What if I
                had been more disciplined at work? What if I had been someone my
                partner wanted? What if…?{" "}
                <em>What if I had been just better?”</em>
              </p>
            </div>
            <div>
              <p>
                Trust me, these thoughts are like a black hole, pulling every
                area of your life into a bottomless pit. Once you get into it,
                you can never climb back out. Every morning, you wake up feeling
                suffocated. Every night, you are consumed by regrets – until
                every night, you get scared of waking up tomorrow.
              </p>
            </div>
            <div>
              <p>
                <em>
                  I’m just orbiting around the Sun, meaninglessly, namelessly,
                  purposelessly.
                </em>
              </p>
            </div>
            <div>
              <p>
                You may feel like you’re just pushing through each day. You may
                feel like it’s not going to get any better. Eventually, you
                don’t even feel resentment. You just feel hopeless, emotionless.
              </p>
              <p>Can you live like this forever?</p>
            </div>
            <div>
              <p>
                <em>
                  What would the other planets think of me? I let them
                  down.{" "}
                </em>
              </p>
            </div>
            <div>
              <p>
                You start worrying about how your family and your friends may
                perceive your failures. You feel like you didn’t give them what
                they wanted, what they deserved.
              </p>
            </div>
            <div>
              <p>
                <strong>
                  Charm is deceptive, and beauty is fleeting; but a woman who
                  fears the Lord is to be praised.
                </strong>
              </p>
              <p>
                <strong>– Proverbs 31:30</strong>
              </p>
            </div>
            <div>
              <p>
                But you must realize that you’re standing on things that will
                fade away: academic validation, reputation, and status. These
                are indeed all external, short-lived.
              </p>
              <p>
                Fear the Lord, as you have set your priorities in wrong places
                and failed to recognize the Lord as your firm foundation.
              </p>
            </div>
            <div>
              <p>
                <em>
                  It must feel good to still be shining, to be recognized as a
                  planet.{" "}
                </em>
              </p>
            </div>
            <div>
              <p>
                Others seem to be doing just fine. You start getting jealous of
                others who have what you’ve lost. Everyday, black holes are
                constantly billowing over your head, and you’re scared of when
                they will drag out all the stars from your life.
              </p>
            </div>
            <div>
              <p>
                <strong>
                  His divine power has given us everything we need for a godly
                  life through our knowledge of him who called us by his own
                  glory and goodness.{" "}
                </strong>
              </p>
              <p>
                <strong>– 2 Peter 1:3</strong>
              </p>
            </div>
            <div>
              <p>
                But you must realize that God has provided you with everything
                you need for a faithful, worthy life. God is the only righteous
                judge, and you can do His will by knowing Him and getting
                consumed in Him. He has already called you into this
                relationship through His grace alone, not through your worth.
              </p>
            </div>
            <div>
              <p>
                <em>
                  Did you reject me because I failed you? I was just made small.
                  How could you disqualify me for something I can’t change?{" "}
                </em>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  The Lord himself goes before you and will be with you; he will
                  never leave you nor forsake you. Do not be afraid; do not be
                  discouraged.{" "}
                </strong>
              </p>
              <p>
                <strong>– Deuteronomy 31:8</strong>
              </p>
            </div>
            <div>
              <p>
                His presence precedes us. He’s already working in the place
                you’re worried about, leading you through these obstacles in a
                way you can’t see. Even when it feels like no one sees your
                light and the world is being unfair, you’re still His child.
                Great is His faithfulness, and that doesn’t depend on who you
                are.
              </p>
            </div>
            <div>
              <p>
                <em>
                  I’m not called by my name. I’m just 134340. No one cares about
                  me now.{" "}
                </em>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  If my people, who are called by my name, will humble
                  themselves and pray and seek my face and turn from their
                  wicked ways…{" "}
                </strong>
              </p>
            </div>
            <div>
              <p>
                What matters the most is being called by His name. Once you
                identify yourself with God and stand on His faithfulness, you
                will stop chasing after wrong priorities.
              </p>
            </div>
            <div>
              <p>
                <strong>
                  …Then I will hear from heaven, and I will forgive their sin
                  and will heal their land.
                </strong>
              </p>
              <p>
                <strong>– 2 Chronicles 7:14</strong>
              </p>
            </div>
            <div>
              <p>
                He listens to you, forgives you, and heals your heart with
                renewed strength. You will find your hope and delight in nothing
                else but Him.
              </p>
            </div>
            <div>
              <p>
                <em>
                  You changed your mind about me, based on your shifting
                  standards about what it means to be a planet. I’ve lost
                  everything, my name, my identity, my community.{" "}
                </em>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  But seek first his kingdom and his righteousness, and all
                  these things will be given to you as well.
                </strong>
              </p>
              <p>
                <strong>– Matthew 6:33 NIV</strong>
              </p>
            </div>
            <div>
              <p>
                <em>
                  I am Pluto, once considered the ninth planet but now left to
                  drift in the dark.
                </em>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  Those who hope in the Lord will renew their strength. They
                  will soar on wings like eagles; they will run and not grow
                  weary, they will walk and not be faint.
                </strong>
              </p>
              <p>
                <strong>– Isaiah 40:31</strong>
              </p>
            </div>
            <div>
              <p>
                There’s nothing in this world you can’t do in His presence. Even
                a forgotten, expelled planet shines most brightly in His arms.
              </p>
            </div>
            <div>
              <p>
                So trust Him. Raise a hallelujah. Make it louder and make it
                your weapon. Even when the storm overtakes you, raise your voice
                higher up in the sky and make it louder than your unbelief.
                Then, up from the ashes, hope will arise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
