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
    id: 4,
    title: "The Perennial Plant",
    image: "/issues/25s/the-perennial-plant.webp",
    genre: "poem",
    issue: "Garden",
    link: "/25s/4-the-perennial-plant",
  },
  {
    id: 5,
    title: "Anecdote of the Crop",
    image: "/issues/25s/anecdote-of-the-crop.webp",
    genre: "genre",
    issue: "Garden",
    link: "/25s/5-anecdote-of-the-crop",
  },
  {
    id: 6,
    title: "Running Out of Time",
    image: "/issues/25s/running-out-of-time.webp",
    genre: "genre",
    issue: "Garden",
    link: "/25s/6-running-out-of-time",
  },
  {
    id: 7,
    title: "The Hoe-Ly Spirit",
    image: "/issues/25s/the-hoe-ly-spirit.webp",
    genre: "genre",
    issue: "Garden",
    link: "/25s/7-the-hoe-ly-spirit",
  },
  {
    id: 9,
    title: "Broken Vessel",
    image: "/issues/25s/broken-vessel.webp",
    genre: "genre",
    issue: "Garden",
    link: "/25s/9-broken-vessel",
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
