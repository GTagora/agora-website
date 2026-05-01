import Image from "next/image";

import { HomeCard } from "./components/cards";
import Footer from "./components/footer";

const articles = [
  {
    id: 1,
    title: "Stars Breathing",
    author: "Edison Hong",
    image: "/issues/25f/stars-breathing.webp",
    genre: "poem",
    issue: "Space",
    link: "/25f/1-stars-breathing",
  },
  {
    id: 2,
    title: "Between What Was and What Will Be",
    author: "Taylor Maerlender",
    image: "/issues/25f/between-what-was-and-what-will-be.webp",
    genre: "essay",
    issue: "Space",
    link: "/25f/2-between-what-was-and-what-will-be",
  },
  {
    id: 3,
    title: "Infinity Is Bigger Than You Think",
    author: "Raph Cheng",
    image: "/issues/25f/infinity-is-bigger-than-you-think.webp",
    genre: "essay",
    issue: "Space",
    link: "/25f/3-infinity-is-bigger-than-you-think",
  },
  {
    id: 4,
    title: "Stars",
    author: "Eddy Huang",
    image: "/issues/25f/stars.webp",
    genre: "poem",
    issue: "Space",
    link: "/25f/4-stars",
  },
  {
    id: 5,
    title: "The Man In Between",
    author: "Sean Kim",
    image: "/issues/25f/the-man-in-between.webp",
    genre: "prose",
    issue: "Space",
    link: "/25f/5-the-man-in-between",
  },
  {
    id: 6,
    title: "vision check",
    author: "Ansley Cheng",
    image: "/issues/25f/vision-check.webp",
    genre: "sonnet",
    issue: "Space",
    link: "/25f/6-vision-check",
  },
  {
    id: 7,
    title: "spaces between people",
    author: "Olivia Hu",
    image: "/issues/25f/spaces-between-people.webp",
    genre: "essay",
    issue: "Space",
    link: "/25f/7-spaces-between-people",
  },
  {
    id: 8,
    title: "134340",
    author: "Emily Choi",
    image: "/issues/25f/134340.webp",
    genre: "prose",
    issue: "Space",
    link: "/25f/8-134340",
  },
  {
    id: 9,
    title: "Midnight",
    author: "Esther Shen",
    image: "/issues/25f/midnight.webp",
    genre: "poem",
    issue: "Space",
    link: "/25f/9-midnight",
  },
  {
    id: 10,
    title: "Empty",
    author: "James Fox",
    image: "/issues/25f/empty.webp",
    genre: "poem",
    issue: "Space",
    link: "/25f/10-empty",
  },
  {
    id: 11,
    title: "Our Weekly Glimpse of Eternity",
    author: "Michael Pitts",
    image: "/issues/25f/our-weekly-glimpse-of-eternity.webp",
    genre: "essay",
    issue: "Space",
    link: "/25f/11-our-weekly-glimpse-of-eternity",
  },
  {
    id: 12,
    title: "At His Feet",
    author: "Chelsea Ekwegh",
    image: "/issues/25f/at-his-feet.webp",
    genre: "poem",
    issue: "Space",
    link: "/25f/12-at-his-feet",
  },
  {
    id: 13,
    title: "Climbing with God",
    author: "Eddy Huang",
    image: "/issues/25f/climbing-with-god.webp",
    genre: "essay",
    issue: "Space",
    link: "/25f/13-climbing-with-god",
  },
  {
    id: 14,
    title: "Babel",
    author: "Galadriel Cho",
    image: "/issues/25f/babel.webp",
    genre: "poem",
    issue: "Space",
    link: "/25f/14-babel",
  },
  {
    id: 15,
    title: "Forgiveness and Vengeance",
    author: "Elliott Chen",
    image: "/issues/25f/forgiveness-and-vengeance.webp",
    genre: "essay",
    issue: "Space",
    link: "/25f/15-forgiveness-and-vengeance",
  },
  {
    id: 16,
    title: "Event Horizon",
    author: "Daeyong Kwon",
    image: "/issues/25f/event-horizon.webp",
    genre: "essay",
    issue: "Space",
    link: "/25f/16-event-horizon",
  },
  {
    id: 17,
    title: "Psalm 8",
    author: "Chase Whitener",
    image: "/issues/25f/psalm-8.webp",
    genre: "poem",
    issue: "Space",
    link: "/25f/17-psalm-8",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start pt-24 px-10">
      <div className="flex flex-row justify-center items-center gap-5">
        <Image
          className="w-16 object-cover"
          src="/logo-black.png"
          width={400}
          height={400}
          alt="article image"
        />
        <p className="font-playfairsc font-bold text-black text-[40pt] md:text-[60pt] tracking-tighter">
          AGORA
        </p>
      </div>
      <div className="flex flex-row justify-between w-full md:w-[70vw] lg:w-[50vw] border-t-2 border-black font-bold text-sm md:text-md">
        <p>GEORGIA TECH</p>
        <p className="">A JOURNAL OF CHRISTIAN THOUGHT</p>
        <p className="">EST. 2023</p>
      </div>

      {/* LATEST ISSUE */}
      <div
        className="mt-12 bg-neutral-50 py-20 w-[100vw] px-14 rounded-2xl
						lg:px-28 lg:grid lg:grid-cols-5 gap-12 lg:w-[80vw]"
      >
        <div className="col-span-2">
          <Image
            className="hidden lg:block w-full h-full object-cover"
            src="/covers/25f.webp"
            width={400}
            height={400}
            alt="article image"
          />
        </div>
        <div className="col-span-3 flex flex-col text-left">
          <p className="font-bold text-xl">LATEST ISSUE:</p>
          <p className="font-playfair italic font-black text-[60pt] lg:text-[80pt] lg:-mt-8 -ml-3">
            SPACE
          </p>
          <div className="pt-1 border-t-2 border-black flex flex-row justify-between">
            <p className="font-cormorant">Dear Reader,</p>
            <p className="font-bold text-xs text-right">LETTER FROM THE EICS</p>
          </div>
          <div className="font-cormorant">
            I’m overjoyed to invite you into this fifth issue of <i>Agora</i> —
            it has been such a blessing to see this journal grow, both
            horizontally in fellowship and vertically in genuine faith, and I am
            so humbled to be able to share the fruits of God’s work with you
            today.
            <br />
            <br />
            Our name, <i>Agora</i>, derives from the ancient Greek word for an
            open, public area for marketplaces and gatherings — as such, we
            hoped to create space for <i>spiritual</i> discourse, fellowship,
            and the free exchange of ideas. By God’s grace, this journal has
            slowly approached that vision, and as you sit with this journal, you
            enter this space with us.
            <br />
            <br />
            As it happens, the theme of this semester’s publication is{" "}
            <i>Space</i>. This encompasses both astronomical outer space and the
            smaller or more abstract spaces we encounter in our daily lives.
            Space is uniquely defined by what it is not: it is the distance
            between objects, the pauses between words, the absence of something
            past, or a vacant room to be filled.
            <br />
            <br />
            Space is the radical difference between two dimensions and three,
            which gives depth, texture, and substance. It is the night sky —
            unmeasured, untarnished, and extraordinary — stretching beyond
            imagination. It is boundless and timeless, and yet it is immediately
            present in every crevice of our lives.
            <br />
            <br />
            Space is presence and absence, limit and possibility: to encounter
            space is to encounter Him, and to discover that no space is
            untouched by the God who fills all in all.
            <br />
            <br />
            It’s been a delight to explore this dynamic and flexible concept
            together this semester through words, images, and dialogue. So
            please, join us in this <i>space</i>; allow God to saturate this
            moment and reveal how He has worked through these pieces this
            semester. He will make this a space for rest & replenishing, and you
            may even discover something out of this world! (sorry I couldn’t
            help myself)
            <br />
            <br />
            Lastly, <i>thank you</i> for taking the time to read this journal;
            it’s hard to express how much this means to our contributors, our
            executive board, and myself. Grace and peace and blessings to you in
            God’s name, and if we haven’t already, I hope someday to meet you
            face to face.
            <br />
            <br />
            All my love, <br />
            Via
          </div>
        </div>
      </div>

      {/* ARTICLES */}
      <div
        className="py-14 w-full flex flex-col gap-12
						md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-14
						lg:w-[80vw] lg:grid xl:grid-cols-3"
      >
        {articles.map((article) => {
          return <HomeCard key={article.id} article={article} />;
        })}
      </div>
      <Footer />
    </main>
  );
}
