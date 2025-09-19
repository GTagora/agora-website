import Image from "next/image";

import { HomeCard } from "./components/cards";
import Footer from "./components/footer";

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
		<div className="flex flex-row justify-between w-full md:w-[70vw] lg:w-[50vw] border-t-2 border-black font-bold text-sm md:text-md">
			<p>GEORGIA TECH</p>
			<p className="">A JOURNAL OF CHRISTIAN THOUGHT</p>
			<p className="">EST. 2023</p>
		</div>

		{/* LATEST ISSUE */}
		<div className="mt-12 bg-neutralTan py-20 w-[100vw] px-14
						lg:px-28 lg:grid lg:grid-cols-5 gap-12 lg:w-[80vw]">
			<div className="col-span-2">
				<Image
					className="hidden lg:block w-full h-full object-cover"
					src='/issues/25s/25s-garden-cover.webp'
					width={400}
					height={400}
					alt='article image'/>
			</div>
			<div className="col-span-3 flex flex-col text-left">
				<p className="font-bold text-xl">LATEST ISSUE:</p>
				<p className="font-playfair italic font-black text-[60pt] lg:text-[80pt] lg:-mt-8 -ml-3">GARDEN</p>
				<div className="pt-1 border-t-2 border-black flex flex-row justify-between">
					<p className="font-cormorant">Dear Reader,</p>
					<p className="font-bold text-xs text-right">LETTER FROM THE EICS</p>
				</div>
				<div className="font-cormorant">
					<br/>
					The seasons have turned again. It’s in the rush of spring’s coming, as nature swiftly and brilliantly reveals its color, as classes accelerate toward a hectic close, and as the pollen haze settles around us, that we bring you this fourth issue of <i>Agora</i>. In whatever season you’re in, Reader, we’re so glad to share this journal with you today.<br/>
					<br/>
					Over the past two years, we have seen <i>Agora</i> grow: what began as a mere seed — a ‘What if?’, a vision, and a leap of faith — is now a promising sprout. God’s hand has been tender and faithful, and this semester, we saw fruit in new writers, perspectives, and a powerful momentum that pushed this issue forward. We’re endlessly grateful to all who have supported this journal, from our current and alumni staff to Augustine Collective to our many donors. At the same time, we firmly believe that <i>Agora</i> is a living testament that it’s “only God who gives the growth” (1 Corinthians 3:6). As He has poured in, our staff and writers have grown and flourished, all so that His many blessings may be put on full display.<br/>
					<br/>
					In preparation for this publication, our staff collectively chose the theme Garden, as befit the warming weather around us. Gardens at any scale, from towering forests to humble plots, provide a home to all sorts of plants and tiny creatures. Our individual faith walks reflect a similar diversity, and yet we’re all united in one ecosystem, growing toward the same source.<br/>
					<br/>
					We invite you in to enjoy the beauty and freshness of His garden as you spend time with these pages. Just as a garden is composed of many different flora and fauna, each writer embodies an individual story, voice, and reflection of God’s work and beauty. We hope that this journal provides a space of physical and spiritual rest — take a break, give yourself time, maybe even take this booklet outside (touch grass!) as you wander through this garden with us. After all, spring is here! So pause to admire His beauty, and He will surely meet you, wherever your garden may be.<br/>
					<br/>
					Blessings,<br/>
					Olivia and Catherine
				</div>
			</div>
		</div>

		{/* ARTICLES */}
		<div className="py-14 w-full flex flex-col gap-12
						md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-14
						lg:w-[80vw] lg:grid xl:grid-cols-3">
			{articles.map((article) => {
			return (
				<HomeCard key={article.id} article={article} />
			)
			})}
		</div>
		<Footer />
	</main>
	);
 }