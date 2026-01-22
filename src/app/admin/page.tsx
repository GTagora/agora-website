"use client";

import { useState } from "react";
import ArticleForm from "./components/ArticleForm";
import IssueForm from "./components/IssueForm";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"article" | "issue">("article");

  return (
    <div className="min-h-screen bg-neutral-50 p-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-neutral-900 my-3">
              Agora Admin
            </h1>
            <p className="text-neutral-500">Manage articles and issues.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex p-1 bg-white border border-gray-200 rounded-lg">
              <button
                onClick={() => setActiveTab("article")}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === "article" ? "bg-black text-white shadow-sm" : "text-neutral-500 hover:text-black"}`}
              >
                Articles
              </button>
              <button
                onClick={() => setActiveTab("issue")}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === "issue" ? "bg-black text-white shadow-sm" : "text-neutral-500 hover:text-black"}`}
              >
                Issues
              </button>
            </div>
            <a
              href="/"
              className="text-sm underline text-neutral-500 hover:text-black"
            >
              Back to Site
            </a>
          </div>
        </header>

        <main>{activeTab === "article" ? <ArticleForm /> : <IssueForm />}</main>
      </div>
    </div>
  );
}
