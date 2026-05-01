import Image from "next/image";
import Footer from "@/app/components/footer";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Chelsea Ekwegh";
  const credit = "";
  const title = "Letter to the King";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/3-letter-to-the-king.webp"
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
            <p>My Dear Jesus,</p>
            <p>
              Upon receiving your letter I have to admit that initially, and
              rather heretically, I thought you were wrong. You see and know
              everything I do for you: the month-long fasts, the chapter
              memorizations, our daily hour-long “devos,” the prayers at 12 am
              sharp, and the list goes on… Humbly I admit I didn’t do all these
              activities of my own accord, but I gave you my will, my desires,
              and my strength. You saw my isolation, my submission, and all my
              fears. I seek you daily and try to include you in every aspect of
              my life. How could you say that I have abandoned the love I had at
              first?
            </p>
            <p>
              This was my initial reaction but, as always, you are right.
              Although I can’t pinpoint the exact moment I took my eyes off you,
              there were signs. The speedy repetitive prayers, the empty
              worship, the way my eyes glance over at the clock during service
              waiting for it to end, and the yawns that follow every time I open
              my bible. I don’t know when I became so robotic, but I see now
              that this revelation is your mercy. I remember where we started,
              when my soul longed, hungered, and thirsted for you and how your
              word was beautiful beyond measure to me. Reading the bible for the
              first time was the most exciting endeavor of my life. I’ve always
              been an avid reader, but this was the first time words spoke to
              me. I couldn’t deny for an instant that the ink was alive,
              breathing life into me. The feeling could be likened to finding a
              treasure you’ve been searching for your entire life, or a remedy
              to an incurable destructive malady. The desire was so powerful, I
              wouldn't even bother to close the bible on my dresser. Like manna,
              all I needed for the day was you. Your word became my daily bread.
              Each morsel was chewed, savored, and shared with anyone that would
              listen. There was gladness and such enthusiasm to be in your
              house, surrounded by your people. After church, I remember the
              lingering melancholy I would feel in the car on the way home — I
              didn’t want to leave. As for prayer, it was everything to me. It
              wasn’t an afterthought or mere duty. It was intentional, we would
              talk for hours on end about anything and everything. These were
              the times when there was barely any knowledge but the laughter was
              real, the thank you’s were honest, and the love — well, it was
              perfect.
            </p>
            <p>
              But now it all feels like a dream. I guess I knew something was
              wrong but I couldn’t figure it out and I thought studying harder
              or serving more could solve it. It wasn’t until my sister
              questioned my love for her, that I began to question the state of
              my heart. I was taken aback but then quickly assured her that I
              did and thought that would be the end of it. Not long after that,
              another loved one asked me the same question, and then another
              one….{" "}
              <em>
                If my own family didn’t think that I loved them, how much more
                you, discerner of hearts?
              </em>
              I was always on guard against falling into temptation or heresy, I
              never once considered the sin of falling out of love. Honestly,
              I’m not sure how it happened. But I think it was fear. I don’t
              know how it managed to creep in, but it did. It wasn’t like being
              afraid of the dark — I had many psalms for that. It was more like
              a fear that I would disappoint you, that I would fall away, or
              that I would be deceived and led astray. It was a slow, harrowing
              crisis of faith. Where your love which assures my identity in you,
              is being choked by the lie that you aren’t enough. Being unable to
              rest in your grace has hardened my heart and made my love wax
              cold. It happened so slowly and it's only by your mercy that I got
              your letter in time. I am truly sorry Lord, because I now see that
              you have been trying to tell me all this while but I wasn’t
              listening. In my stubbornness and pride disguised as insecurity, I
              neglected all that you do for me. I forgot how you strengthened
              me, kept me in your will, and taught me. You hear my cries and
              consider me, help me to not lose awe of Your love which endures
              forever.
            </p>
            <p>So Lord, I come to you in confession.</p>
            <p>
              Forgive me, Abba, for I have sinned against You by getting tied up
              again with the law and falling away from Your grace. I put my
              faith in You alone, so please help me die to the law that I might
              live for You, and so that You, O Lord Jesus would be fully
              developed in me. Help me be Your letter, written not with ink, but
              by Your Spirit. Not on a heart of stone, but on a heart of flesh
              that loves You and those around me with an undying love. Thank you
              for Your compassion and faithfulness, may the gravity of your love
              be made more manifest to me with each passing day. In Jesus’ name,
              Amen.
            </p>
            <p>Yours in incorruptible love,</p>
            <p>Chelsea</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
