import Image from "next/image";
import { Reference, Footnote } from "@/app/components/buttons";

export default async function Article() {
  const author = "Galadriel Cho";
  const credit = "Photo by Debbie Jung";
  const title = "Before the Pen Meets Paper";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/before-the-pen-meets-paper.webp"
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
<p style={{ textIndent: '30px' }}>In the fleeting breath before the pen meets paper, hesitance stills my hand. An insurmountable pressure swells under the weight of a thousand possibilities. The concept in mind is a hair's breadth away from being borne into ink and life, yet a prickling fear whispers that the stroke will veer wayward. The choice is mine: I either accept the prospect of blunder and press on, or I flee. It has always been my natural inclination to choose the latter. The pen would clatter from my fingers, the sketchbook shelved away. Pages were left blank rather than risk blemish, and thus no evidence of artistic failure could ever be in existence. I had grown to love art so dearly that the terror of having shortcomings strangled the desire to try. I withdrew from drawing before I knew it. I still scribbled and sketched, but rarely, and I was loath to share my work with anyone. If the clumsiness of my art inspired such contempt from myself, I feared further the reaction of others.</p>
<p style={{ textIndent: '30px' }}>But a few months ago, a friend complimented a series of cats I doodled on a whim. It was surely a passing remark, yet curiously enough, it meant the world to me. As if I had sequestered away a deep wellspring of longing, an outpouring determination to draw burst like birds from a cage. I began with what seemed forgiving, producing silly creatures like borzoi dogs or cartoon people. I drew, and drew, and drew, and I found myself in a heady haze of contentment.</p>
<p style={{ textIndent: '30px' }}>Despite the long abatement of illustration, returning to drawing has affirmed to me that the Lord designed me as one who irrevocably loves the arts in both consumption and creation. I say with certainty that it was His tender intention to instill this love in my heart. Then one must wonder— when and why did my carefree enjoyment become perverse belittlement? It was hardly a dramatic transformation. Upon inspection, this resulted from the insidious combination of internal comparison to others and a suffocating desire to produce what the world would deem acceptable. Proverbs 29:25 describes fear of man as a snare—and truly it did ensnare me, smothering me until I compromised the very way the Lord designed me.</p>
<p style={{ textIndent: '30px' }}>With my heart set on overcoming this anxiety, I wielded the ever-famous Philippians 4:6-7 like a mantra. These verses tell us not to be "anxious about anything, but in every situation, by prayer and petition, with thanksgiving, [to] present [our] requests to God. And the peace of God, which transcends all understanding, will guard [our] hearts and minds in Christ Jesus”. I thanked the Lord for my passion for art, and I asked that He would teach me to seek approval from Him only. I thanked the Lord for the opportunities He had granted to hone my skills, and I prayed for guidance to avoid wasting what He had given.  His peace slowly settled over me, quieting the scathing regard I held for my work. I found new comfort in the Parable of the Talents.<Reference number = {1}/>  It reminded me that the Lord carefully allocates according to our abilities. The master in the story welcomed his servants with joy upon his return, with only one requisite: faithfulness with the talent given to them. Our God knows our limits. We do not have to be perfect or the most adept; rather, He only calls us to be honorable stewards of what has been designated. He Himself formed our weaknesses; affectionately He created me as exactly the artist that I am.</p> 
<p style={{ textIndent: '30px' }}>A particular mark-making exercise that I once completed practiced the pivot of control from the wrist to the shoulder. While drawing with the wrist is good for finer details, drawing from the elbow or shoulder facilitates smooth, fluid lines. My first attempts led to wildly off-course results, but the lines themselves were clean and confident. Drawing from the shoulder was an unnatural surrender of control, yet it yielded beautiful results unlikely to be achieved with the wrist's range. I similarly surrendered how I evaluated my art to God. It was utterly contrary to my inveterate perfectionism to accept erroneous lines, yet I compelled myself to draw only with ink for some time. The indelible medium forced me to confront the extent of my amateurism, but in doing so I learned to love drawing not because of any result, but because the Lord created me to take joy in it. My art blossomed as it became an act of worship.</p>
<p style={{ textIndent: '30px', marginBottom: '50px' }}>In the fleeting breath before the pen meets paper, hesitance stills my hand. That old fear of judgement flickers through me even now, but this time I stamp it out. The nib alights on the page, and I draw like a giddy child scribbling a crayon portrait for her father. Fearfully and wonderfully made in the image of the Creator, I rejoice in reflecting the greatest artist of all.</p>
<Footnote number = {1} text = "Matthew 25:14-30" />
          </div>
        </div>
      </div>
      <div className="w-full">
        
      </div>
    </div>
  );
}
