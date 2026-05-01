import Image from "next/image";
import Footer from "@/app/components/footer";

export default async function Article() {
  const author = "Paige Allen";
  const credit = "Photo by Name";
  const title = "The Evidence I Carry";
  const date = "May 2, 2026";

  return (
    <div>
      <div className="flex flex-col items-start md:pt-[140px] px-[10%] pb-60 min-h-screen bg-[var(--bg-color)] relative md:px-[20vw] md:py-[140px]">
        <div className="mt-[100px] w-full md:mt-0">
          <Image
            className="w-full h-auto object-cover md:object-contain my-5 md:my-8 md:max-h-[70vh]"
            src="/issues/26s/the-evidence-i-carry.webp"
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
            <div>I opened my passport the other morning</div>
            <div>To view the sweet sight of colored pages</div>
            <div>Not the ones that scream my name</div>
            <div>But those that hold a quieter claim</div>
            <br />
            <div>On the back of my passport page</div>
            <div>Lie small stamps faded with age</div>
            <div>I traced the ink from journeys past</div>
            <div>And recalled the countries amassed</div>
            <br />
            <div>In Morocco the dunes were brushed with morning glow</div>
            <div>As I raced up their sandy flow</div>
            <div>As dawn came slowly shining through</div>
            <div>The sky turned soft in pink and blue</div>
            <br />
            <div>In that moment I stared at the rising sun</div>
            <div>Desperate to reach before it was done</div>
            <div>Just for a minute to see</div>
            <div>If God&rsquo;s good morning would wait there for me</div>
            <br />
            <div>In Switzerland the mountains stood robed in white</div>
            <div>Their lakes were calm reflecting light</div>
            <div>Their pastures breathed a fresh air</div>
            <div>With grazing cows resting there</div>
            <br />
            <div>A gentle wind moved through a hill</div>
            <div>So quiet the world around me slowed and stilled </div>
            <div>And in that hush I tried to hear </div>
            <div>The voice of God drawing softly near</div>
            <br />
            <div>In England the cliffs stood tall above the tide</div>
            <div>Where restless waves would crash and slide</div>
            <div>From up above I paused to view</div>
            <div>A strength far greater than me and you</div>
            <br />
            <div>Ascending down among the sand</div>
            <div>The waters tugged me like a hand</div>
            <div>As spray rose high against the shore</div>
            <div>It touched my face forevermore</div>
            <div>Almost as if the sea had gently come</div>
            <div>To wash my soul with baptismal foam </div>
            <br />
            <div>I carry each stamp proudly</div>
            <div>As evidence of places I have been,</div>
            <div>Proof that I have stepped into the beauty</div>
            <div>Created by His hands</div>
            <br />
            <div>But somewhere between the dunes and the peaks</div>
            <div>The windswept edges by the sea</div>
            <div>I wonder what home feels like</div>
            <div>And where that may be</div>
            <br />
            <div>I closed the book and wondered then</div>
            <div>About the roads unseen</div>
            <div>The way my life has wandered through </div>
            <div>The places in between</div>
            <br />
            <div>For though I&rsquo;ve walked through many lands</div>
            <div>And watched the seasons change,</div>
            <div>I know the truest journey yet</div>
            <div>Was already in my hands</div>
            <br />
            <div>Every time a border guard</div>
            <div>Pressed ink upon the page,</div>
            <div>I felt a small and simple joy</div>
            <div>No words could quite explain</div>
            <br />
            <div>A quiet smile, a gentle nod</div>
            <div>A wordless mark assuring</div>
            <div>That no matter where you are on your journey</div>
            <div>You are welcomed in</div>
            <br />
            <div>Though if my soul were a passport</div>
            <div>Kept safe through passing days,</div>
            <div>I think there&rsquo;d be a single imprint</div>
            <div>Set down in gentle grace</div>
            <br />
            <div>No questions asked, no proof needed done,</div>
            <div>Just evidence shown in mercy</div>
            <div>A stamp that says I&rsquo;m welcomed home</div>
            <div>Exactly as I am</div>
            <br />
            <div>For if my soul had pages</div>
            <div>I&rsquo;d carry both passports close</div>
            <div>One holding miles and beauty</div>
            <div>and the other, a deeper truth</div>
            <div>That God had brought me through</div>
            <br />
            <div>And when I think of where I&rsquo;ve been</div>
            <div>Or where I still might go</div>
            <div>I find a quiet happiness</div>
            <div>In something deeply known</div>
            <br />
            <div>That on every road, both near and far</div>
            <div>Through wonder, loss, or glee</div>
            <div>There remains a mark in tender evidence</div>
            <div>that He will continue to walk with me</div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
