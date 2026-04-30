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
    image: "/issues/26s/test.png",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/1-ballpoint",
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
    image: "/issues/26s/faded-ink.webp",
    genre: "Essay",
    issue: "Ink",
    link: "/26s/5-faded-ink",
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
    id: 14,
    title: "Beautiful Rupture",
    author: "Edison Hong",
    image: "/issues/26s/test.png",
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
