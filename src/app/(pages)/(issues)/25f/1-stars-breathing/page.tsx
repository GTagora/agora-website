import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Edison Hong";
  const credit = "Photo by Matthew Lai";
  const title = "Stars Breathing";
  const date = "December 6, 2025";

  return (
    <div>
      <div className="flex flex-col items-start pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/25f/stars-breathing.webp"
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
            <p>Space hums.</p>
            <p>Never empty,</p>
            <p>but breathing.</p>
            <p>A steady inhale of nebulae,</p>
            <p>the exhale of God’s imagination.</p>
            <br />
            <p>Light travels for centuries</p>
            <p>but it began as a single word–</p>
            <p>spoken by God before clocks,</p>
            <p>before time bent to listen.</p>
            <br />
            <p>Every supernova echoes “Let there be,”</p>
            <p>a wound of light bleeds creation–</p>
            <p>heavens remember the cross,</p>
            <p>where beauty once broke to make us whole.</p>
            <br />
            <p>I watch the stars consume themselves in brilliance,</p>
            <p>born from heat, time, and pressure.</p>
            <p>Science calls it fusion,</p>
            <p>faith calls it fire–</p>
            <p>one names the process,</p>
            <p>the other, the Presence.</p>
            <br />
            <p>He holds both.</p>
            <p>Atoms that forged stars</p>
            <p>are the same that dwell in our body,</p>
            <p>and neither burn without Him.</p>
            <br />
            <p>He crafts distance–</p>
            <p>stretches between galaxies,</p>
            <p>silences between orbits,</p>
            <p>so perfectly</p>
            <p>that we long for Him.</p>
            <br />
            <p>He veiled heavens</p>
            <p>so we would seek,</p>
            <p>and when we looked far enough,</p>
            <p>He stepped closer–</p>
            <p>Word became flesh</p>
            <p>infinity folded into a single heartbeat.</p>
            <br />
            <p>So I stand under the sky</p>
            <p>a fragment of dust,</p>
            <p>a witness to light still traveling from Eden.</p>
            <br />
            <p>And in the stillness,</p>
            <p>I whisper back into the vastness:</p>
            <p>You are here.</p>
            <p>You have always been here.</p>
            <p>Silence sings Your Name.</p>
            <p>Amen.</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
