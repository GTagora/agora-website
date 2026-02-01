import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
import { getIssues, getArticles } from "@/app/admin/actions";
import ReactMarkdown from "react-markdown";

export const revalidate = 60;

interface IssueSummary {
  theme: string;
  slug: string;
  cover_image_url?: string;
  letter_from_eic?: string;
  semester?: string;
  volume?: number;
  issue_number?: number;
}

interface ArticleSummary {
  id: number;
  title: string;
  image_url: string;
  genre: string;
  author: string;
  slug: string;
}

interface MappedArticle {
  id: number;
  title: string;
  image: string;
  genre: string;
  author: string;
  issue: string;
  link: string;
}

export default async function Home() {
  const issues = await getIssues();
  const validIssues =
    issues?.filter(
      (i: IssueSummary) => i.theme !== "Blog" && i.slug !== "blog",
    ) || [];
  const latestIssue = validIssues.length > 0 ? validIssues[0] : null;

  if (!latestIssue) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen pt-24 px-10">
        <h1 className="text-2xl font-bold">No issues found.</h1>
        <p>Please check back later.</p>
      </main>
    );
  }

  const articles = await getArticles(latestIssue.slug);

  const mappedArticles: MappedArticle[] = articles.map(
    (article: ArticleSummary) => ({
      id: article.id,
      title: article.title,
      image: article.image_url,
      genre: article.genre,
      author: article.author,
      issue: latestIssue.theme,
      link: `/${latestIssue.slug}/${article.slug}`,
    }),
  );

  return (
    <main className="flex flex-col items-center justify-start pt-24 px-10">
      {/* Header Logo Section */}
      <div className="flex flex-row justify-center items-center gap-5">
        <Image
          className="w-16 object-cover"
          src="/logo-black.png"
          width={400}
          height={400}
          alt="Agora Logo"
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
        className="mt-12 bg-neutralTan py-20 w-[100vw] px-8
						lg:px-28 lg:grid lg:grid-cols-5 gap-12 lg:w-[80vw]"
      >
        <div className="col-span-2">
          {latestIssue.cover_image_url ? (
            <Image
              className="hidden lg:block w-full h-full object-cover shadow-sm lg:max-h-[80vh]"
              src={latestIssue.cover_image_url}
              width={500}
              height={700}
              alt={`${latestIssue.theme} Cover`}
            />
          ) : (
            <div className="hidden lg:flex w-full h-full bg-neutral-200 items-center justify-center"></div>
          )}
        </div>
        <div className="col-span-3 flex flex-col text-left">
          <p className="font-bold text-xl">LATEST ISSUE:</p>
          <p className="font-playfair italic font-black text-[60pt] lg:text-[80pt] -ml-3 uppercase leading-none">
            {latestIssue.theme}
          </p>
          <div className="pt-1 border-t-2 border-black flex flex-row justify-between mt-4">
            <p className="font-bold text-xs text-right">LETTER FROM THE EICS</p>
          </div>
          <div className="font-cormorant mt-4 prose prose-neutral max-w-none text-black leading-relaxed lg:max-h-[60vh] overflow-y-auto">
            <ReactMarkdown>{latestIssue.letter_from_eic || ""}</ReactMarkdown>
          </div>
        </div>
      </div>

      {/* ARTICLES */}
      <div className="py-14 w-full lg:w-[80vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
        {mappedArticles.map((article: MappedArticle) => (
          <Link
            key={article.id}
            href={article.link}
            className="group space-y-4 block text-left"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-neutral-100 shadow-sm">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-neutral-300">
                  <span className="text-2xl font-serif italic">Agora</span>
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                <span>{article.genre || "Article"}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold leading-snug group-hover:underline decoration-1 underline-offset-4 mb-2 text-black">
                {article.title}
              </h3>
              <p className="text-sm font-medium text-neutral-500">
                {article.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </main>
  );
}
