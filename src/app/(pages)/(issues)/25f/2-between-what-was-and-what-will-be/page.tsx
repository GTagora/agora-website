import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Taylor Maerlender";
  const credit = "Photo by Joshua Chung";
  const title = "Between What Was and What Will Be";
  const date = "December 6, 2025";

  return (
    <div>
      <div className="flex flex-col items-start pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-fit md:object-contain my-3 md:max-h-[70vh]"
            src="/issues/25f/between-what-was-and-what-will-be.webp"
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
            <p>
              There are seasons in life when everything seems to pause — not
              because we’ve chosen to stop, but because God, in His quiet mercy,
              creates space. This has been my experience over the past year.
            </p>
            <br />
            <p>
              For a while, I didn’t recognize it as a gift. The sudden stillness
              in my routine felt more like absence than abundance, more like
              loss than love. Plans I had long been clinging to began to
              unravel, and doors I thought would open, or continue to stay open,
              seemed to be closing instead. I remember praying for clarity, for
              movement, for something — anything — that would fill the silence.
              But instead, God invited me to stay. To sit. To wait. At first,
              waiting felt like wasting. I struggled to understand why
              everything around me was slowing down while others seemed to keep
              moving — advancing in their careers, relationships, and faith with
              such visible progress. Meanwhile, my life felt like it had been
              quietly set aside.
            </p>
            <br />
            <p>
              Waiting has never come easily to me. I find comfort in knowing
              what’s next — to have a plan, a direction, a sense of purpose
              guiding me forward. But lately, I’ve found myself standing in a
              kind of stillness I didn’t necessarily choose. Among this
              stillness, God created unexpected space in a relationship I
              cherished deeply, and it caught me off guard. The distance ached,
              and the silence made me question myself.{" "}
              <em>Have I done something wrong?</em> <em>Have I lost my way?</em>{" "}
              For weeks, I wrestled with what He was doing, holding the
              uncomfortable stillness like a heavy weight on my shoulders. But
              slowly, I began to see that the pause wasn’t punishment; it was
              protection - preparation. God was showing me how much of my peace
              I had unknowingly placed in someone else’s hands instead of His.
            </p>
            <br />
            <p>
              Psalm 37:7 says,{" "}
              <em>“Be still before the Lord and wait patiently for Him.”</em>{" "}
              Those words began to take root in me when I finally stopped trying
              to fix the silence. I started spending more time in prayer — not
              to ask for what was next, but simply to be with Him. Some days,
              that meant sitting in the Word with a heart too heavy to speak.
              Other days, it meant journaling through tears I didn’t realize
              were yearning to be released. Slowly, the quiet that once felt
              empty began to feel full — full of grace, full of peace, and full
              of lessons I wouldn’t have learned if life had stayed loud.
            </p>
            <br />
            <p>
              In this new and uncomfortable situation, God began revealing to me
              what I had been holding too tightly: my timelines, my plans,
              certain people, even my sense of identity. I realized how much of
              my worth I had tied to movement — to visible results, constant
              doing, and the reassurance that I was “on track.” But in this new
              season, there is no checklist to measure growth. There is only
              surrender. And it was in surrender that I began to hear His voice
              again — not in thunder or urgency, but in whispers of peace that
              said, <em>“You’re safe here.”</em>
            </p>
            <br />
            <p>
              Looking back, I can see how this distance created across various
              avenues of my life wasn’t meant to fully isolate me, but to draw
              me closer to Him. It was God’s way of realigning my heart,
              teaching me that His timing is not delayed; it’s deliberate and
              perfect. Ecclesiastes 3:1 reminds us,{" "}
              <em>
                “There is a time for everything, and a season for every activity
                under the heavens.”
              </em>{" "}
              Slowly, it has been revealed to me that even the waiting, the
              wondering, the not-yet, has a spiritual purpose.
            </p>
            <br />
            <p>
              There’s a particular kind of faith that grows in the quiet. It’s
              not the kind that shouts from mountaintops, but the kind that
              whispers, <em>“I trust You,”</em> even when the outcome is
              uncertain. It’s the faith that learns to rest without resolution.
              It’s strange how God can use distance to draw us near, how the
              very place that once felt hollow can become the soil where new
              trust takes root.. Sometimes, the same void we try to fill is the
              one He’s using to heal. I think of Psalm 34:18 —{" "}
              <em>
                “The Lord is close to the brokenhearted and saves those who are
                crushed in spirit.”
              </em>{" "}
              This verse met me on the days I felt forgotten, when prayers
              seemed to echo into nothing. But they were never unheard. God was
              closer than I realized, shaping something new in the silence. Not
              just changing what was happening around me, but creating a
              transformation <em>within</em> me.
            </p>
            <br />
            <p>
              This season hasn’t ended, but it’s beginning to make sense. What
              once felt like distance now feels like invitation. I’m learning
              that stillness can be sacred, that God can fill even the emptiest
              spaces with purpose. I don’t know how long I’ll be here, but I
              know He’s here too — shaping me quietly, patiently, tenderly.
            </p>
            <br />
            <p>Maybe space isn’t something to escape after all.</p>
            <br />
            <p>Maybe it’s where transformation begins:</p>
            <br />
            <p>between what was and what will be.</p>
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
