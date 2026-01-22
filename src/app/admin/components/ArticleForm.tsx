"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitArticle, deleteArticle } from "../actions";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import {
  Upload,
  FileText,
  Layout,
  Calendar,
  User,
  Type,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
  success: false,
};

function ActionButtons({
  isEditing,
  isPublished,
}: {
  isEditing: boolean;
  isPublished: boolean;
}) {
  const { pending } = useFormStatus();

  if (isPublished) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <button
          type="submit"
          name="isPublished"
          value="on"
          disabled={pending}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-neutral-800 disabled:opacity-50 w-full"
        >
          {pending ? "Saving..." : "Save Changes"}
        </button>
        <button
          type="submit"
          name="isPublished"
          value="off"
          disabled={pending}
          onClick={(e) => {
            if (!confirm("Are you sure you want to unpublish this article?")) {
              e.preventDefault();
            }
          }}
          className="bg-yellow-50 text-yellow-700 border border-yellow-200 px-6 py-2 rounded-md hover:bg-yellow-100 disabled:opacity-50 w-full text-sm font-medium"
        >
          {pending ? "Unpublishing..." : "Unpublish"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        type="submit"
        name="isPublished"
        value="on"
        disabled={pending}
        onClick={(e) => {
          if (
            !confirm(
              "Are you sure you want to publish this article immediately?",
            )
          ) {
            e.preventDefault();
          }
        }}
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-neutral-800 disabled:opacity-50 w-full font-medium"
      >
        {pending ? "Publishing..." : "Publish"}
      </button>
      <button
        type="submit"
        name="isPublished"
        value="off"
        disabled={pending}
        className="bg-neutral-200 text-neutral-700 px-6 py-2 rounded-md hover:bg-neutral-300 disabled:opacity-50 w-full text-sm font-medium"
      >
        {pending ? "Saving..." : "Save Draft"}
      </button>
    </div>
  );
}

type ArticleData = {
  id?: string;
  title: string;
  slug: string;
  author: string;
  issue_slug?: string;
  genre?: string;
  genre_custom?: string; // Implicitly handled if genre is Custom
  published_at?: string;
  excerpt?: string;
  content?: string;
  image_url?: string;
  image_credit?: string;
  is_published?: boolean;
};

export default function ArticleForm({
  initialData,
}: {
  initialData?: ArticleData;
}) {
  const [state, formAction] = useFormState(submitArticle, initialState);
  const [content, setContent] = useState(initialData?.content || "");

  // Logic for initial genre selection
  const knownGenres = [
    "Academic Essay",
    "Essay",
    "Poem",
    "Prose",
    "Testimony",
    "Illustration",
    "Review",
  ];
  const isCustomGenre =
    initialData?.genre && !knownGenres.includes(initialData?.genre);

  const [selectedGenre, setSelectedGenre] = useState(
    isCustomGenre ? "Custom" : initialData?.genre || "Academic Essay",
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Only reset on success IF we are creating new (no initialData)
    // If we are editing, we probably want to keep the form populated or maybe show a toast
    if (state.success && !initialData) {
      formRef.current?.reset();
      setContent("");
      setSelectedGenre("Academic Essay");
    }
  }, [state, initialData]);

  // Generate Issue Options
  const issues = [{ value: "blog", label: "Blog" }];
  const startYear = 2022;
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-11

  for (let y = startYear; y <= currentYear; y++) {
    const shortYear = y.toString().slice(-2);
    // Spring: Available in Jan (Month 0)
    if (y > startYear) {
      if (y < currentYear || (y === currentYear && currentMonth >= 0)) {
        issues.push({ value: `${shortYear}s`, label: `${y} Spring` });
      }
    }
    // Fall: Available in Aug (Month 7)
    if (y < currentYear || (y === currentYear && currentMonth >= 7)) {
      issues.push({ value: `${shortYear}f`, label: `${y} Fall` });
    }
  }
  issues.reverse(); // Newest first
  issues.push({ value: "custom", label: "Create New Issue..." });

  const defaultIssue = initialData?.issue_slug || issues[0]?.value || "blog";

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-8 h-[calc(100vh-100px)]"
    >
      <input type="hidden" name="id" value={initialData?.id || ""} />

      {/* Top Section: Metadata Grid */}
      <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        {/* Status Message */}
        {state.message && (
          <div
            className={`col-span-full p-4 rounded-md ${state.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {state.message}
          </div>
        )}

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Title
          </label>
          <div className="relative">
            <Type className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              required
              name="title"
              type="text"
              defaultValue={initialData?.title}
              className="pl-10 w-full border rounded-md p-2 bg-white text-black border-gray-300"
              placeholder="Article Title"
              onChange={(e) => {
                // Only auto-update slug if creating new
                if (initialData) return;

                const val = e.target.value;
                const generatedSlug = val
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, "")
                  .trim()
                  .replace(/\s+/g, "-");
                const slugInput = document.querySelector(
                  'input[name="slug"]',
                ) as HTMLInputElement;
                if (slugInput) slugInput.value = generatedSlug;
              }}
            />
          </div>
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Slug (Auto)
          </label>
          <input
            required
            name="slug"
            type="text"
            defaultValue={initialData?.slug}
            readOnly={!!initialData} // Read-only if editing
            className={`w-full border rounded-md p-2 text-black border-gray-300 ${initialData ? "bg-gray-100" : "bg-gray-50"}`}
            placeholder="article-slug"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Author
          </label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              required
              name="author"
              type="text"
              defaultValue={initialData?.author}
              className="pl-10 w-full border rounded-md p-2 bg-white text-black border-gray-300"
              placeholder="Author Name"
            />
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Publish Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              name="date"
              type="date"
              defaultValue={
                initialData?.published_at
                  ? initialData.published_at.split("T")[0]
                  : ""
              }
              className="pl-10 w-full border rounded-md p-2 bg-white text-black border-gray-300"
            />
          </div>
        </div>

        {/* Issue */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Issue
          </label>
          <div className="space-y-2">
            <select
              className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
              defaultValue={defaultIssue}
              onChange={(e) => {
                const val = e.target.value;
                const slugInput = document.querySelector(
                  'input[name="issueSlug"]',
                ) as HTMLInputElement;
                if (slugInput) {
                  if (val === "custom") {
                    slugInput.value = "";
                    slugInput.readOnly = false;
                    slugInput.focus();
                    slugInput.classList.remove("bg-gray-100");
                    slugInput.classList.add("bg-white");
                  } else {
                    slugInput.value = val;
                    slugInput.readOnly = true;
                    slugInput.classList.add("bg-gray-100");
                    slugInput.classList.remove("bg-white");
                  }
                }
              }}
            >
              {issues.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="relative">
              <Layout className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                required
                name="issueSlug"
                type="text"
                readOnly
                defaultValue={defaultIssue}
                className="pl-10 w-full border rounded-md p-2 bg-gray-100 text-black border-gray-300"
                placeholder="25f"
              />
            </div>
          </div>
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Genre
          </label>
          <div className="space-y-2">
            <select
              name="genre"
              className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="Academic Essay">Academic Essay</option>
              <option value="Essay">Essay</option>
              <option value="Poem">Poem</option>
              <option value="Prose">Prose</option>
              <option value="Testimony">Testimony</option>
              <option value="Illustration">Illustration</option>
              <option value="Review">Review</option>
              <option value="Custom">Custom...</option>
            </select>
            {selectedGenre === "Custom" && (
              <input
                required
                name="genre_custom"
                type="text"
                defaultValue={initialData?.genre} // Populate custom genre if editing
                className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
                placeholder="Enter custom genre"
              />
            )}
          </div>
        </div>

        {/* Cover Image - Span 2 */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1 text-black">
            Cover Image
          </label>
          <div className="flex gap-2">
            <input
              name="coverImage"
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200 file:text-black border border-gray-300 rounded-md"
            />
            <input
              name="imageCredit"
              type="text"
              defaultValue={initialData?.image_credit}
              className="w-full border rounded-md p-2 text-sm bg-white text-black border-gray-300"
              placeholder="Credit / Caption"
            />
          </div>
          {initialData?.image_url && (
            <p className="text-xs text-neutral-400 mt-1">
              Current Image:{" "}
              <a
                href={initialData.image_url}
                target="_blank"
                className="underline"
              >
                View
              </a>
            </p>
          )}
        </div>

        {/* Excerpt - Span 2 or 3 */}
        <div className="md:col-span-3">
          <label className="block text-sm font-medium mb-1 text-black">
            Excerpt
          </label>
          <input
            name="excerpt"
            defaultValue={initialData?.excerpt}
            className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
            placeholder="Short summary..."
          />
        </div>

        {/* Submit - Span 1 */}
        <div className="flex flex-col justify-end gap-2">
          <ActionButtons
            isPublished={!!initialData?.is_published}
            isEditing={!!initialData}
          />

          {initialData?.id && (
            <button
              type="button"
              onClick={async () => {
                if (confirm("Are you sure you want to delete this article?")) {
                  const res = await deleteArticle(initialData.id!);
                  if (res.success) {
                    window.location.href = "/admin";
                  } else {
                    alert(res.message);
                  }
                }
              }}
              className="flex items-center justify-center gap-2 p-2 text-red-600 hover:bg-neutral-100 rounded-md border border-neutral-200 w-full text-sm font-medium mt-2"
            >
              <Trash2 className="w-4 h-4" /> Delete Article
            </button>
          )}
        </div>
      </div>

      {/* Bottom Section: Editor & Preview */}
      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
        {/* Editor */}
        <div className="flex-1 flex flex-col bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Markdown Editor
            </label>
          </div>
          <textarea
            required
            name="content"
            className="flex-1 w-full p-4 font-mono text-sm bg-white text-black resize-none focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="# Article Header..."
          />
        </div>

        {/* Preview */}
        <div className="flex-1 flex flex-col bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <label className="text-sm font-bold text-gray-700">
              Live Preview
            </label>
          </div>
          <div className="flex-1 overflow-y-auto p-8 prose prose-neutral max-w-none">
            <ReactMarkdown>
              {content || "*Preview will appear here...*"}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </form>
  );
}
