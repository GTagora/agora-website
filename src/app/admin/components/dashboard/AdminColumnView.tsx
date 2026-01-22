"use client";

import { useState, useEffect } from "react";
import { getIssues, getArticles, updateArticleStatus } from "../../actions";
import {
  Plus,
  ChevronRight,
  FileText,
  Folder,
  Edit,
  ExternalLink,
  Globe,
  EyeOff,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Types
type Issue = {
  slug: string;
  semester: string;
  theme?: string;
  created_at: string;
};

type Article = {
  id: string;
  title: string;
  slug: string;
  author: string;
  issue_slug?: string;
  is_published: boolean;
  published_at?: string;
};

export default function AdminColumnView() {
  const router = useRouter();

  // Data State
  const [issues, setIssues] = useState<Issue[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);

  // Selection State
  const [selectedIssueSlug, setSelectedIssueSlug] = useState<string | null>(
    null,
  );
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    null,
  );

  // Loading State
  const [loadingIssues, setLoadingIssues] = useState(true);
  const [loadingArticles, setLoadingArticles] = useState(false);

  // 1. Fetch Issues on Mount
  useEffect(() => {
    async function fetchIssues() {
      const data = await getIssues();
      setIssues(data);
      setLoadingIssues(false);
    }
    fetchIssues();
  }, []);

  // 2. Fetch Articles when Issue Selected
  useEffect(() => {
    if (!selectedIssueSlug) {
      setArticles([]);
      return;
    }

    async function fetchArticles() {
      setLoadingArticles(true);
      const data = await getArticles(selectedIssueSlug!);
      setArticles(data);
      setLoadingArticles(false);
    }

    fetchArticles();
  }, [selectedIssueSlug]);

  return (
    <div className="flex border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm h-[600px]">
      {/* Column 1: Issues */}
      <div className="w-1/3 border-r border-neutral-200 flex flex-col min-w-[250px]">
        <div className="p-3 bg-neutral-50 border-b border-neutral-200 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          Issues
        </div>
        <div className="overflow-y-auto flex-1 p-2 space-y-1">
          {loadingIssues ? (
            <div className="p-4 text-sm text-neutral-400">Loading...</div>
          ) : issues.length === 0 ? (
            <div className="p-4 text-sm text-neutral-400">No issues found.</div>
          ) : (
            <>
              {issues.map((issue) => (
                <button
                  key={issue.slug}
                  onClick={() => {
                    setSelectedIssueSlug(issue.slug);
                    setSelectedArticleId(null);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between group transition-colors ${
                    selectedIssueSlug === issue.slug
                      ? "bg-blue-600 text-white"
                      : "hover:bg-neutral-100 text-neutral-700"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Folder
                      className={`w-4 h-4 shrink-0 ${selectedIssueSlug === issue.slug ? "text-blue-200" : "text-neutral-400 group-hover:text-black"}`}
                    />
                    <div className="truncate">
                      <div className="font-medium text-sm truncate">
                        {issue.semester}
                      </div>
                      {issue.theme && (
                        <div
                          className={`text-xs truncate ${selectedIssueSlug === issue.slug ? "text-blue-200" : "text-neutral-400"}`}
                        >
                          {issue.theme}
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 ${selectedIssueSlug === issue.slug ? "text-white" : "text-neutral-300"}`}
                  />
                </button>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Column 2: Articles */}
      <div className="w-1/3 border-r border-neutral-200 flex flex-col min-w-[250px]">
        <div className="p-3 bg-neutral-50 border-b border-neutral-200 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          Articles
        </div>
        <div className="overflow-y-auto flex-1 p-2 space-y-1 bg-white">
          {!selectedIssueSlug ? (
            <div className="p-4 text-sm text-neutral-400 italic text-center mt-10">
              Select an issue to view articles
            </div>
          ) : loadingArticles ? (
            <div className="p-4 text-sm text-neutral-400">Loading...</div>
          ) : articles.length === 0 ? (
            <div className="p-4 text-sm text-neutral-400">
              No articles in this issue.
            </div>
          ) : (
            articles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticleId(article.id)}
                className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between group transition-colors ${
                  selectedArticleId === article.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-neutral-100 text-neutral-700"
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <FileText
                    className={`w-4 h-4 shrink-0 ${selectedArticleId === article.id ? "text-blue-200" : "text-neutral-400 group-hover:text-black"}`}
                  />
                  <div className="truncate flex-1">
                    <div className="font-medium text-sm truncate">
                      {article.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs truncate ${selectedArticleId === article.id ? "text-blue-200" : "text-neutral-400"}`}
                      >
                        {article.author}
                      </span>
                      {article.published_at && (
                        <span
                          className={`text-[10px] ${selectedArticleId === article.id ? "text-blue-200" : "text-neutral-400"}`}
                        >
                          •{" "}
                          {new Date(article.published_at).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {article.is_published ? (
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${selectedArticleId === article.id ? "bg-white/20 text-white" : "bg-green-100 text-green-700"}`}
                  >
                    Published
                  </span>
                ) : (
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${selectedArticleId === article.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}
                  >
                    Draft
                  </span>
                )}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Column 3: Actions / Preview */}
      <div className="w-1/3 flex flex-col min-w-[250px] bg-neutral-50">
        <div className="p-3 border-b border-neutral-200 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          Details
        </div>
        <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
          {!selectedArticleId ? (
            <div className="text-neutral-400 text-sm">
              Select an article to view options
            </div>
          ) : (
            <div className="space-y-4 w-full max-w-xs">
              <div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center mx-auto shadow-sm">
                <FileText className="w-6 h-6 text-neutral-600" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 line-clamp-2">
                  {articles.find((a) => a.id === selectedArticleId)?.title}
                </h3>
                <p className="text-sm text-neutral-500">
                  {articles
                    .find((a) => a.id === selectedArticleId)
                    ?.id.slice(0, 8)}
                  ...
                </p>
              </div>

              <div className="pt-4 grid gap-3 w-full">
                <Link
                  href={`/admin/article/${selectedArticleId}`}
                  className="flex items-center justify-center gap-2 w-full py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <Edit className="w-4 h-4" /> Edit Article
                </Link>

                {articles.find((a) => a.id === selectedArticleId)
                  ?.is_published ? (
                  <>
                    <button
                      onClick={async () => {
                        if (
                          confirm(
                            "Are you sure you want to unpublish this article? It will no longer be visible to the public.",
                          )
                        ) {
                          const res = await updateArticleStatus(
                            selectedArticleId!,
                            false,
                          );
                          if (res.success) {
                            // Optimistic update logic or re-fetch
                            const updated = await getArticles(
                              selectedIssueSlug!,
                            );
                            setArticles(updated);
                          } else {
                            alert(res.message);
                          }
                        }
                      }}
                      className="flex items-center justify-center gap-2 w-full py-2 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-md text-sm font-medium hover:bg-yellow-100 transition-colors shadow-sm"
                    >
                      <EyeOff className="w-4 h-4" /> Unpublish
                    </button>
                    <Link
                      href={`/articles/${articles.find((a) => a.id === selectedArticleId)?.slug}`}
                      target="_blank"
                      className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-neutral-300 text-neutral-700 rounded-md text-sm font-medium hover:bg-neutral-50 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" /> View Live
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={async () => {
                      if (
                        confirm(
                          "Are you sure you want to publish this article? It will become visible to the public immediately.",
                        )
                      ) {
                        const res = await updateArticleStatus(
                          selectedArticleId!,
                          true,
                        );
                        if (res.success) {
                          const updated = await getArticles(selectedIssueSlug!);
                          setArticles(updated);
                        } else {
                          alert(res.message);
                        }
                      }
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors shadow-sm"
                  >
                    <Globe className="w-4 h-4" /> Publish Now
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
