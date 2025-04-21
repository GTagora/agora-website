import Image from "next/image";
import { HomeCard } from "./components/cards";

const articles = [
  {
    id: 1,
    title: "guidance for a seed",
    image: "/issues/25s/guidance-for-a-seed.webp",
    genre: "poem",
    author: "Lorien Cho",
    issue: "Garden",
    link: "/25s/1-guidance-for-a-seed",
  },
  {
    id: 3,
    title: "Between the Two Gardens",
    image: "/issues/25s/between-the-two-gardens.webp",
    genre: "academic essay",
    author: "Michael Pitts",
    issue: "Garden",
    link: "/25s/3-between-the-two-gardens",
  },
  {
    id: 4,
    title: "The Perennial Plant",
    image: "/issues/25s/the-perennial-plant.webp",
    genre: "poem",
    author: "Sean Kim",
    issue: "Garden",
    link: "/25s/4-the-perennial-plant",
  },
  {
    id: 5,
    title: "Anecdote of the Crop",
    image: "/issues/25s/anecdote-of-the-crop.webp",
    genre: "essay",
    author: "Daeyong Kwon",
    issue: "Garden",
    link: "/25s/5-anecdote-of-the-crop",
  },
  {
    id: 6,
    title: "Running Out of Time",
    image: "/issues/25s/running-out-of-time.webp",
    genre: "essay",
    author: "Catherine Tian",
    issue: "Garden",
    link: "/25s/6-running-out-of-time",
  },
  {
    id: 7,
    title: "The Hoe-Ly Spirit",
    image: "/issues/25s/the-hoe-ly-spirit.webp",
    genre: "essay",
    author: "Raphael Cheng",
    issue: "Garden",
    link: "/25s/7-the-hoe-ly-spirit",
  },
  {
    id: 8,
    title: "Hiding",
    image: "/issues/25s/hiding.webp",
    genre: "poem",
    author: "Simon Ruiz",
    issue: "Garden",
    link: "/25s/8-hiding",
  },
  {
    id: 9,
    title: "Broken Vessel",
    image: "/issues/25s/broken-vessel.webp",
    genre: "poem",
    author: "Joshua Chung",
    issue: "Garden",
    link: "/25s/9-broken-vessel",
  },
  {
    id: 10,
    title: "Our Gardener",
    image: "/issues/25s/our-gardener.webp",
    genre: "essay",
    author: "Lois Lee",
    issue: "Garden",
    link: "/25s/10-our-gardener",
  },
  {
    id: 11,
    title: "His story & mine",
    image: "/issues/25s/his-story-and-mine.webp",
    genre: "essay",
    author: "Olivia Hu",
    issue: "Garden",
    link: "/25s/11-his-story-and-mine",
  },
  {
    id: 2,
    title: "The Gardener's Whisper",
    image: "/issues/25s/the-gardeners-whisper.webp",
    genre: "short story",
    author: "Taylor Maerlender",
    issue: "Garden",
    link: "/25s/2-the-gardeners-whisper",
  },
  {
    id: 12,
    title: "The Source",
    image: "/issues/25s/the-source/14_panel.webp",
    genre: "comic",
    author: "Tammy Pham",
    issue: "Garden",
    link: "/25s/12-the-source",
  },
  {
    id: 13,
    title: "Do It for the Vine",
    image: "/issues/25s/do-it-for-the-vine.webp",
    genre: "essay",
    author: "Andy Ouyang",
    issue: "Garden",
    link: "/25s/13-do-it-for-the-vine",
  },
  {
    id: 14,
    title: "Under the Sun",
    image: "/issues/25s/under-the-sun.webp",
    genre: "essay",
    author: "Esther Shen",
    issue: "Garden",
    link: "/25s/14-under-the-sun",
  },
  {
    id: 15,
    title: "Garden of Graves",
    image: "/issues/25s/garden-of-graves.webp",
    genre: "essay",
    author: "Elliott Chen",
    issue: "Garden",
    link: "/25s/15-garden-of-graves",
  },
  {
    id: 16,
    title: "Under the Fig Tree",
    image: "/issues/25s/under-the-fig-tree.webp",
    genre: "poem",
    author: "Chelsea Ekwegh",
    issue: "Garden",
    link: "/25s/16-under-the-fig-tree",
  },
  {
    id: 17,
    title: "Eden to Gethsemane",
    image: "/issues/25s/eden-to-gethsemane.webp",
    genre: "essay",
    author: "Ansley Cheng",
    issue: "Garden",
    link: "/25s/17-eden-to-gethsemane",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start pt-24 px-10">
      
      <div className="flex flex-row justify-center items-center gap-5">
        <Image
          className="w-16 object-cover"
          src='/logo-black.png'
          width={400}
          height={400}
          alt='article image'/>
        <p className="font-playfairsc font-bold text-black text-[40pt] md:text-[60pt] tracking-tighter">AGORA</p>
      </div>
      <div className="flex flex-row justify-between w-full md:w-[70vw] lg:w-[40vw] border-t-2 border-black font-bold text-sm md:text-md">
        <p>GEORGIA TECH</p>
        <p className="">A JOURNAL OF CHIRSTIAN THOUGHT</p>
        <p className="">EST. 2023</p>
      </div>

      {/* ARTICLES */}
      <div className="py-14 w-full gap-x-8 gap-y-14
                      md:grid md:grid-cols-2
                      lg:w-[80vw] lg:grid xl:grid-cols-3">
        {articles.map((article) => {
          return (
            <HomeCard article={article} />
          )
        })}
      </div>
    </main>
  );
}
