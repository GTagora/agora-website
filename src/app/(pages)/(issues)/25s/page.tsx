import styles from "./page.module.css";
import { ArticleCard } from "@/app/components/cards";
import { IssuuButton } from "@/app/components/buttons";
import Footer from "@/app/components/footer";
import { Article } from "@/app/types/types";

const articles = [
  {
    id: 0,
    title: "EXAMPLE",
    image: "/issues/25s/test.webp",
    genre: "genre",
    issue: "Garden",
    link: "/25s/id-article-name",
  },
  {
    id: 1,
    title: "guidance for a seed",
    image: "/issues/25s/guidance-for-a-seed.webp",
    genre: "poem",
    issue: "Garden",
    link: "/25s/1-guidance-for-a-seed",
  },
  {
    id: 2,
    title: "The Gardener's Whisper",
    image: "/issues/25s/the-gardeners-whisper.webp",
    genre: "short story",
    issue: "Garden",
    link: "/25s/2-the-gardeners-whisper",
  },
  {
    id: 3,
    title: "Between the Two Gardens",
    image: "/issues/25s/between-the-two-gardens.webp",
    genre: "academic essay",
    issue: "Garden",
    link: "/25s/3-between-the-two-gardens",
  },
  {
    id: 11,
    title: "His story & mine",
    image: "/issues/25s/his-story-and-mine.webp",
    genre: "essay",
    issue: "Garden",
    link: "/25s/11-his-story-and-mine",
  },
];

export default async function Issue() {
  const volume = 2;
  const issue = 2;
  const semester = "Spring 2025";
  const theme = "Garden";
  const issuu = "https://issuu.com/gtagora/docs/agora_s25";
  // const image = '/covers/25s.jpg';

  return (
    <main className={styles.main}>
      <h1>{theme}</h1>
      <h5>
        {semester.toUpperCase()} | VOL. {volume}, NO. {issue}
      </h5>
      {issuu ? <IssuuButton link={issuu} /> : null}
      <div className={styles.hbox}>
        <div className={styles.letter}>
          <h3>Letter from the editors</h3>
          <div>{/* INSERT LETTER FROM EICS HERE */}</div>
        </div>
        <div className={styles.articlesContainer}>
          {articles &&
            articles.map((item: Article) => (
              <ArticleCard key={item.id} article={item}></ArticleCard>
            ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
