import styles from "./page.module.css";
import { ArticleCard } from "@/app/components/cards";
import { IssuuButton } from "@/app/components/buttons";
import Footer from "@/app/components/footer";
import { Article } from "@/app/types/types";

const articles = [
  {
    id: 1,
    title: "For a daisy to bloom, He is the source.",
    image: "/issues/24s-cycles/shirley.png",
    genre: "poem",
    issue: "Cycles",
    link: "/24s-cycles/for-a-daisy-to-bloom-he-is-the-source",
  },
  {
    id: 2,
    title: "Hey God, Can I Get a Girlfriend?",
    image: "/issues/24s-cycles/raph.jpg",
    genre: "personal essay",
    issue: "Cycles",
    link: "/24s-cycles/hey-god-can-i-get-a-girlfriend",
  },
  {
    id: 3,
    title: "If Grace is an Ocean",
    image: "/issues/24s-cycles/esther.jpg",
    genre: "short story",
    issue: "Cycles",
    link: "/24s-cycles/if-grace-is-an-ocean",
  },
  {
    id: 4,
    title: "Journey of the Broken",
    image: "/issues/24s-cycles/jp.png",
    genre: "poem",
    issue: "Cycles",
    link: "/24s-cycles/journey-of-the-broken",
  },
  {
    id: 5,
    title: "Slaying Ouroboros",
    image: "/issues/24s-cycles/elliott.JPG",
    genre: "academic essay",
    issue: "Cycles",
    link: "/24s-cycles/slaying-ouroboros",
  },
  {
    id: 6,
    title: "Without you...",
    image: "/issues/24s-cycles/simon.png",
    genre: "poem",
    issue: "Cycles",
    link: "/24s-cycles/without-you",
  },
  {
    id: 7,
    title: "sanctification, and why i don’t like the dishwasher",
    image: "/issues/24s-cycles/chris.jpg",
    genre: "personal essay",
    issue: "Cycles",
    link: "/24s-cycles/sanctification-and-why-i-dont-like-the-dishwasher",
  },
  {
    id: 8,
    title: "Adactylidium",
    image: "/issues/24s-cycles/catherine.png",
    genre: "personal essay",
    issue: "Cycles",
    link: "/24s-cycles/adactylidium",
  },
];

export default async function Issue() {
  const volume = 1;
  const issue = 2;
  const semester = "Spring 2024";
  const theme = "Cycles";
  const issuu = "https://issuu.com/gtagora/docs/agora_s24";
  // const image = "/covers/s24.webp";

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
          <div>
            Dear Reader,
            <br />
            <br />
            What a blessing it is to bring you this second issue of <i>Agora</i>
            ! I thank God that you&apos;re here, however it is that you&apos;ve
            happened upon this journal. And whether He is a stranger or an old
            friend, just know that He sits beside you as you flip through this
            issue on Cycles.
            <br />
            <br /> We all experience this world in a certain rhythm, as a life
            of constant novelty and unpredictability would be impossible to
            comprehend. So our lives are benchmarked by these patterns, which
            characterize the natural ebb and flow of the human experience: daily
            habits, transformation, the swell of seasons, in nature and in life.
            It follows that God speaks through these cycles as He shapes us,
            grows us, and brings us back to Him.
            <br />
            <br /> This semester, our writers reflected on this theme and now
            offer you their take on Cycles, in hurt or condemnation, in
            relationships, in iterations of sin, repentance, and restoration.
            This writing process, though arduous, was a revelation of God&apos;s
            provision and a gift of fellowship, and I hope its fruit is as much
            a blessing to you as it was to us.
            <br />
            <br /> And so, dear Reader, I invite you to take a breath, dwell
            here, and find nourishment in these reflections, knowing He is here
            with you.
            <br />
            <br /> Happy reading, until we meet face to face.
            <br />
            <br /> Yours in Christ,
            <br />
            Via
            <br />
            <i>Editor-in-Chief</i>{" "}
          </div>
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
