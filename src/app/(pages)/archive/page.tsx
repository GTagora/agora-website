import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Image from "next/image";

type Card = {
  issue: {
    semester: string;
    theme: string;
    slug: string;
    image: string;
    volume: number;
    issue: number;
  };
};

// Update the IssueCard component to use the proper types
const Card = ({ issue }: Card) => {
  //figure out how to change this from any type
  return (
    <Link href={issue.slug}>
      <div className="w-full flex flex-col overflow-hidden">
        <Image
          className="w-full h-[300pt] md:h-[350pt] object-cover"
          src={issue.image ? issue.image : "/test.jpg"}
          width={400}
          height={300}
          alt="article image"
        />
        <div>
          <p className="font-playfair text-2xl font-bold mt-2 text-center tracking-widest">
            {issue.theme.toUpperCase()}
          </p>
          <p className="mt-1 font-[550] text-sm font-sans text-center text-neutral-500 tracking-wider">
            {issue.semester.toUpperCase()} | VOL. {issue.volume} NO.{" "}
            {issue.issue}
          </p>
        </div>
      </div>
    </Link>
  );
};

const issues = [
  {
    semester: "Spring 2025",
    theme: "Garden",
    slug: "/25s-garden",
    image: "/covers/25s.webp",
    volume: 2,
    issue: 2,
  },
  {
    semester: "Fall 2024",
    theme: "Water",
    slug: "/24f-water",
    image: "/covers/f24.webp",
    volume: 2,
    issue: 1,
  },
  {
    semester: "Spring 2024",
    theme: "Cycles",
    slug: "/24s-cycles",
    image: "/covers/s24.webp",
    volume: 1,
    issue: 2,
  },
  {
    semester: "Fall 2023",
    theme: "Fall 2023",
    slug: "/23f-agora",
    image: "/covers/f23.webp",
    volume: 1,
    issue: 1,
  },
];

export default async function Archive() {
  return (
    <div className={styles.main}>
      <h1 className="font-playfair text-[25pt] font-bold text-center tracking-wider">
        ARCHIVE
      </h1>
      <div
        className="px-24 py-14 w-full flex flex-col gap-12
						md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-14
						lg:w-[80vw] lg:grid xl:grid-cols-3"
      >
        {issues.map((issue) => (
          <Card key={issue.slug} issue={issue} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
