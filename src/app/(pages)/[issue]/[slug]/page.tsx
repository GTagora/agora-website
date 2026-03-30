import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Helper to formatting dates
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function ArticlePage({
  params,
}: {
  params: { issue: string; slug: string };
}) {
  const { data: article, error } = await supabaseAdmin
    .from("articles")
    .select("*")
    .eq("slug", params.slug)
    .single();

  // Validate that the article belongs to the requested issue
  if (
    error ||
    !article ||
    (article.issue_slug && article.issue_slug !== params.issue)
  ) {
    console.error("Error fetching article or issue mismatch:", error);
    notFound();
  }

  return (
    <div className="min-h-screen text-black font-sans selection:bg-[#d3e0d5] mt-10">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-neutral-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>

        {/* Header Info */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-5 leading-tight text-neutral-900">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-neutral-600 font-medium font-ebgaramond">
            <span>{article.author}</span>
            {article.published_at && (
              <>
                <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                <span>{formatDate(article.published_at)}</span>
              </>
            )}
            <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            <span>{article.genre}</span>
          </div>
        </header>

        {/* Cover Image */}
        {article.image_url && (
          <figure className="mb-8 md:-mx-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-neutral-100">
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {article.image_credit && (
              <figcaption className="mt-3 text-center text-xs text-neutral-400 font-mono">
                {article.image_credit}
              </figcaption>
            )}
          </figure>
        )}

        {/* Content */}
        <article className="prose prose-lg prose-neutral max-w-none mx-auto md:mx-0 prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-a:text-black prose-a:underline hover:prose-a:text-neutral-600 prose-img:rounded-xl font-cormorant">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {article.content || ""}
          </ReactMarkdown>
        </article>

        {/* Footer/Citation */}
        <hr className="my-12 border-neutral-200" />
        <div className="text-center text-sm text-neutral-400 italic">
          Published in Issue {article.issue_slug || "Blog"}
        </div>
      </div>
    </div>
  );
}
