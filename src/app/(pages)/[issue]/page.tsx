import { getIssue, getArticles } from "@/app/admin/actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const revalidate = 60; // Revalidate every minute

export async function generateMetadata({
  params,
}: {
  params: { issue: string };
}) {
  const issue = await getIssue(params.issue);
  if (!issue) return { title: "Issue Not Found" };

  return {
    title: `${issue.theme} | Agora`,
    description: `Issue: ${issue.theme} - ${issue.semester}`,
  };
}

export default async function DynamicIssuePage({
  params,
}: {
  params: { issue: string };
}) {
  const [issueData, articles] = await Promise.all([
    getIssue(params.issue),
    getArticles(params.issue),
  ]);

  if (!issueData) {
    notFound();
  }

  const featuredArticle = false ? articles[0] : null;
  const standardArticles = articles; //articles.length > 0 ? articles.slice(1) : [];

  return (
    <div className="min-h-screen bg-neurtal-100 text-neutral-900 font-sans pt-32 md:pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Header & Letter HBox */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 md:mb-20 lg:h-[60vh] lg:items-center lg:px-10 xl:px-0 text-center lg:text-left">
          {/* Left: Header & Metadata */}
          <div className="flex-1 flex flex-col justify-center space-y-6 lg:space-y-10">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>

            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter text-black leading-none">
                {issueData.theme}
              </h1>
              <h2 className="text-md md:text-lg font-medium tracking-wide text-neutral-500 font-sans uppercase">
                {issueData.semester} | Vol. {issueData.volume}, No.{" "}
                {issueData.issue_number}
              </h2>
            </div>
          </div>

          {/* Right: Letter from Editors (Scrolling) */}
          {issueData.letter_from_eic && (
            <div className="flex-1 lg:max-w-xl lg:mt-20 h-[400px] lg:h-full overflow-y-auto bg-neutral-50 p-8 rounded-2xl border border-neutral-100 shadow-sm scrollbar-hide">
              <h3 className="font-serif font-bold text-2xl mb-6 text-neutral-900 border-b border-neutral-200 pb-4">
                Letter from the Editors
              </h3>
              <div className="prose prose-lg prose-neutral font-serif text-justify leading-relaxed text-neutral-600 max-w-none">
                <ReactMarkdown>{issueData.letter_from_eic || ""}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <hr className="border-neutral-200 mb-20" />

        {/* Articles Section */}
        <div className="space-y-20">
          {/* Featured Article */}
          {featuredArticle && (
            <Link
              href={`/${params.issue}/${featuredArticle.slug}`}
              className="group block"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-sm">
                  {featuredArticle.image_url ? (
                    <Image
                      src={featuredArticle.image_url}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-neutral-300">
                      <span className="text-4xl font-serif italic">Agora</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium text-neutral-500">
                    <span className="uppercase tracking-wider text-xs bg-neutral-100 px-2 py-1 rounded-sm">
                      {featuredArticle.genre || "Article"}
                    </span>
                    {featuredArticle.published_at && (
                      <span>
                        {new Date(
                          featuredArticle.published_at,
                        ).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight group-hover:text-neutral-600 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-neutral-600 font-serif">
                    By {featuredArticle.author}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block border-b border-black pb-0.5 text-sm font-bold uppercase tracking-wider group-hover:border-neutral-400">
                      Read Feature
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid of Remaining Articles */}
          {standardArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {standardArticles.map(
                (article: {
                  id: string;
                  slug: string;
                  image_url: string;
                  title: string;
                  genre: string;
                  author: string;
                }) => (
                  <Link
                    key={article.id}
                    href={`/${params.issue}/${article.slug}`}
                    className="group space-y-4 block"
                  >
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-neutral-100 shadow-sm">
                      {article.image_url ? (
                        <Image
                          src={article.image_url}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-neutral-300">
                          <span className="text-2xl font-serif italic">
                            Agora
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                        <span>{article.genre}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold leading-snug group-hover:underline decoration-1 underline-offset-4 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm font-medium text-neutral-500">
                        {article.author}
                      </p>
                    </div>
                  </Link>
                ),
              )}
            </div>
          )}

          {articles.length === 0 && (
            <div className="text-center py-20 text-neutral-400 font-medium">
              No articles published in this issue yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
