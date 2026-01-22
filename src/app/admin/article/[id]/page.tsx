import ArticleForm from "@/app/admin/components/ArticleForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { notFound } from "next/navigation";

export default async function EditArticlePage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch existing article data
  const { data: article, error } = await supabaseAdmin
    .from("articles")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center text-sm text-neutral-500 hover:text-black transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-neutral-900">Edit Article</h1>
          <p className="text-sm text-neutral-500 mt-1">ID: {article.slug}</p>
        </div>
        <ArticleForm initialData={article} />
      </div>
    </div>
  );
}
