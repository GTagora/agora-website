import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Sean Kim";
  const credit = "Illustration by Allison Chung";
  const title = "The Man in Between";
  const date = "December 06, 2025";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-fit md:object-contain my-3 md:max-h-[70vh]"
            src="/issues/25f/the-man-in-between.webp"
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
              My name is Mesandros, the one In Between. I live in the interlude
              of life and death, lie in the realm where mysteries lurk unseen. I
              persist in the grey sculpting light and dark, tread the line
              blurring wisdom and insanity. I march onwards to the past, and
              peer backwards upon the future. There I am, at the threshold of
              reason and emotion. There I am, at the lull of silence and
              commotion. I am the man of the middle, and I know not where my
              story will end.
            </p>
            <br />
            <p>
              My eyes crackle with lightning, my soul blazes bright. Brighter
              than the sun, at times, hot enough to melt me from inside. My
              mind, a fortress against friend or foe, its secrets unknowable by
              any but I. Many have tried, at different times, but they all
              eventually say goodbye. I wear a thousand faces, each as fearsome
              as the next; I own so many faces, sometimes I forget which one is
              mine.
            </p>
            <br />
            <p>
              I refuse those of the Past, they who run away from old scars. I
              reject those of the Future, they who chase impossible dreams. They
              beg me to join, gnashing and gnawing at my mind. Past and Future
              relentlessly invade, leaving gaping wounds with every attack.
              Again, as I have always, I decline them both, for I teeter at the
              edge of all things; I <em>cannot</em> choose.
            </p>
            <br />
            <p>
              Here, there is no joy and there is no sorrow—only a twisted
              imitation of both. I cannot be satisfied by reality, nor find
              refuge in dreams. There is a maddening cacophony of whispers—or
              perhaps that is simply the silence speaking. I have no mouth and I
              must scream. I always move, for I cannot stay. I advance, but I
              cannot arrive. I have traveled far and wide, passing mountains,
              stars, epochs. And at the end of it all, I find myself In Between.
            </p>
            <br />
            <p>
              My name is Mesandros, the one In Between. And I cannot leave this
              godforsaken place. Neither here nor there, my purpose has been
              robbed and my meaning has been murdered. I am the man of the
              middle, and I know not where my story will end.
            </p>
            <br />
            <p className="italic">Authors Note:</p>
            <p className="italic">
              This piece explores the existence of a being stuck in the space
              between all things—life and death, logic and emotion, creation and
              chaos. Through Mesandros, I imagine what it might look like to
              live in a reality without God, without meaning.
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
