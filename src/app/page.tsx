import Image from "next/image";

import { HomeCard } from "./components/cards";
import Footer from "./components/footer";
import { Article } from "./types/types";

const articles: Article[] = [
  {
    id: 1,
    title: "Ballpoint",
    author: "Ansley Cheng",
    image: "/issues/26s/ballpoint.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/1-ballpoint",
  },
  {
    id: 2,
    title: "Wheel",
    author: "Edison Hong",
    image: "/issues/26s/wheel.webp",
    genre: "Poem",
    issue: "Ink",
    link: "/26s/2-wheel",
  },
  {
    id: 3,
    title: "Letter to the King",
    author: "Chelsea Ekwegh",
    image: "/issues/26s/3-letter-to-the-king.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/3-letter-to-the-king",
  },
  {
    id: 4,
    title: "Reflections on Making",
    author: "Debbie Jung",
    image: "/issues/26s/reflections-on-making.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/4-reflections-on-making",
  },
  {
    id: 5,
    title: "Faded Ink",
    author: "Simon Ruiz",
    image: "/issues/26s/faded-ink-cover.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/5-faded-ink",
  },
  {
    id: 6,
    title: "Re: Written",
    author: "Catherine Tian",
    image: "/issues/26s/re-written.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/6-re-written",
  },
  {
    id: 7,
    title: "Come What May",
    author: "Sean Kim",
    image: "/issues/26s/come-what-may.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/7-come-what-may",
  },
  {
    id: 8,
    title: "When the Ink Smears",
    author: "Edward Huang",
    image: "/issues/26s/8-when-the-ink-smears.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/8-when-the-ink-smears",
  },
  {
    id: 9,
    title: "Before the Pen Meets Paper",
    author: "Galadriel Cho",
    image: "/issues/26s/before-the-pen-meets-paper.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/9-before-the-pen-meets-paper",
  },
  {
    id: 10,
    title: "My Paper Heart",
    author: "Angie Fei",
    image: "/issues/26s/my-paper-heart.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/10-my-paper-heart",
  },
  {
    id: 11,
    title: "The Evidence I Carry",
    author: "Paige Allen",
    image: "/issues/26s/the-evidence-i-carry.webp",
    genre: "Poem",
    issue: "Ink",
    link: "/26s/11-the-evidence-i-carry",
  },
  {
    id: 12,
    title: "The Hero's Map, Forlorn Valor",
    author: "Elliot Chen",
    image: "/issues/26s/the-heros-map.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/12-the-heros-map",
  },
  {
    id: 13,
    title: "Bloth",
    author: "Gabriel Lyannas",
    image: "/issues/26s/13-blot.webp",
    genre: "Poem",
    issue: "Ink",
    link: "/26s/13-blot",
  },
  {
    id: 14,
    title: "Beautiful Rupture",
    author: "Edison Hong",
    image: "/issues/26s/beautiful-rupture.webp",
    genre: "Poem",
    issue: "Ink",
    link: "/26s/14-beautiful-rupture",
  },
  {
    id: 16,
    title: "Forever Yours",
    author: "Paige Allen",
    image: "/issues/26s/forever-yours.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/16-forever-yours",
  },
  {
    id: 15,
    title: "His Alibi",
    author: "Daeyong Kwon",
    image: "/issues/26s/his-alibi.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/15-his-alibi",
  },
  {
    id: 17,
    title: "The Crane's Migration",
    author: "Angela Bahn",
    image: "/issues/26s/the-cranes-migration.webp",
    genre: "Poem",
    issue: "Ink",
    link: "/26s/17-the-cranes-migration",
  },
  {
    id: 18,
    title: "Paint With Me",
    author: "Olivia Hu",
    image: "/issues/26s/paint-with-me-cover.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/18-paint-with-me",
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
            src="/covers/26s.webp"
            width={400}
            height={400}
            alt="article image"
          />
        </div>
        <div className="col-span-3 flex flex-col text-left">
          <p className="font-bold text-xl">LATEST ISSUE:</p>
          <p className="font-playfair italic font-black text-[60pt] lg:text-[80pt] lg:-mt-8 -ml-3">
            Ink
          </p>
          <div className="pt-1 border-t-2 border-black flex flex-row justify-between">
            <p className="font-cormorant">Dear Reader,</p>
            <p className="font-bold text-xs text-right">LETTER FROM THE EICS</p>
          </div>
          <div className="font-cormorant">
            Welcome! It’s with great joy that we bring you the sixth issue of
            <i>Agora</i>. Spring comes like a whirlwind each year: throughout a
            semester of busyness and endless deadlines, we witness the seasons
            change from brutal cold to hopeful warmth, then just like that,
            school breaks for summer. It’s with awe and great relief that we
            present this journal to you — God has shown his faithfulness time
            and time again in providing for <i>Agora</i>.
            <br />
            <br />
            We’ve been blessed to see <i>Agora</i> evolve over the past three
            years, as God brings new staff and new visions into our body. This
            semester is a special one, as we (Olivia and Sean) gift you this
            issue as
            <i>Agora</i>’s old and new editors-in-chief. For me (Olivia), this
            is a truly sweet goodbye and a final love letter to you, and for me
            (Sean), it is a foretaste of the exciting things to come.
            <br />
            <br />
            As a journal of Christian thought, these pages serve as a medium to
            convey experiences and grace. We discover, here, a raw distillation
            of thought and emotion through words and images. And so, it is with
            great pleasure that we would like to introduce the theme of this
            semester: Ink.
            <br />
            <br />
            Ink is used to record, to remember, to express. It persists beyond
            time and human fickleness, allowing us to see glimpses of who we
            used to be and how we have changed. Its permanence echoes the stain
            of everpresent sin, resistant to our efforts to erase it. At the
            same time, ink embodies the steadfastness of God’s word, which forms
            the foundation of our faith throughout eternity.
            <br />
            <br />
            Through the metaphor of ink, our writers have crystalized the
            stories they hold and the marks they bear, offering up an
            interpretation of what <i>Ink</i> means to them. Every piece is
            unique, a reflection of the author’s varying walks in faith, but
            they all come together to testify of God’s grace in our lives.
            <br />
            <br />
            So, as you flip through these pages, we invite you to take a moment
            of rest. We hope these pieces bring comfort and peace, questions and
            resolutions to the ways He is moving in your life. We humbly present
            these works as an offering to you, dear Reader, for you too are an
            artwork of the greatest Creator of all. May grace and blessings be
            with you! Yours in Christ,
            <br />
            Olivia and Sean
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
