import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "James Fox";
  const credit = "Photo by Joshua Chung";
  const title = "Empty";
  const date = "December 06, 2025";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-contain md:object-contain my-3 md:max-h-[70vh]"
            src="/issues/25f/empty.webp"
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
            <p className="italic">
              “but [He] emptied himself, by taking the form of a servant, being
              born in the likeness of men.” Philippians 2:7 ESV
            </p>
            <div>
              <p>I am nothing&mdash;</p>
              <p>A cipher, a worm.</p>
              <p>A speck of dust.</p>
              <p>A droplet plunged</p>
              <p>Midst torrent thrust</p>
              <p>From steel-cold sky</p>
              <p>Down concrete gulf</p>
              <p>Through hairline faults</p>
              <p>Lost to hush and rust.</p>
            </div>
            <div>
              <p>Wet eyelids flutter&mdash;</p>
              <p>Dawn&apos;s light slips the shutters,</p>
              <p>A sun-tipped glimmer hovers.</p>
              <p>Shadows sway like cradled lovers.</p>
              <p>Spills color across the ceiling&mdash;</p>
              <p>Like broken bread revealing</p>
              <p>Heavens tilts, Earth shifts,</p>
              <p>Rising in the light</p>
              <p>I clasp my hands and recite</p>
              <p>I am not alone;</p>
              <p>For You are with me.</p>
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
