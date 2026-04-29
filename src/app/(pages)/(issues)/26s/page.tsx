import styles from "./page.module.css";
import { HomeCard } from "@/app/components/cards";
import { IssuuButton } from "@/app/components/buttons";
import Footer from "@/app/components/footer";
import { Article } from "@/app/types/types";

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
    genre: "Verse",
    issue: "Ink",
    link: "/26s/2-wheel",
  },
  {
    id: 6,
    title: "Re: Written",
    author: "Catherine Tian",
    image: "/issues/26s/re-written.webp",
    genre: "Words",
    issue: "Ink",
    link: "/26s/6-re-written",
  },
  {
    id: 11,
    title: "The Evidence I Carry",
    author: "Paige Allen",
    image: "/issues/26s/the-evidence-i-carry.webp",
    genre: "Verse",
    issue: "Ink",
    link: "/26s/11-the-evidence-i-carry",
  },
  {
    id: 12,
    title: "The Hero's Map, Forlorn Valor",
    author: "Elliot Chen",
    image: "/issues/26s/the-heros-map.webp",
    genre: "Words",
    issue: "Ink",
    link: "/26s/12-the-heros-map",
  },
];

export default async function Issue() {
  const volume = 3;
  const issue = 2;
  const semester = "Spring 2026";
  const theme = "Ink";
  const issuu = "";
  // const image = '/covers/f24.jpg';

  return (
    <main className={styles.main}>
      <h1>{theme}</h1>
      <h5>
        {semester.toUpperCase()} | VOL. {volume}, NO. {issue}
      </h5>
      {issuu ? <IssuuButton link={issuu} /> : null}
      {/* <div className={styles.letter}>
        <h3>Letter from the editors</h3>
        <div>Letter from the EICs</div>
      </div> */}
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
