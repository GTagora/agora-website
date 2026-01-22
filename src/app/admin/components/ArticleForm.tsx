"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitArticle } from "../actions";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Upload, FileText, Layout, Calendar, User, Type } from "lucide-react";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-black text-white px-6 py-2 rounded-md hover:bg-neutral-800 disabled:opacity-50 w-full"
    >
      {pending ? "Submitting..." : "Upload Article"}
    </button>
  );
}

export default function ArticleForm() {
  const [state, formAction] = useFormState(submitArticle, initialState);
  const [content, setContent] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Academic Essay");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setContent("");
      setSelectedGenre("Academic Essay");
    }
  }, [state]);

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

  const defaultIssue = issues[0]?.value || "blog";

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-8 h-[calc(100vh-100px)]"
    >
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
              className="pl-10 w-full border rounded-md p-2 bg-white text-black border-gray-300"
              placeholder="Article Title"
              onChange={(e) => {
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
            className="w-full border rounded-md p-2 bg-gray-100 text-black border-gray-300"
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
              className="w-full border rounded-md p-2 text-sm bg-white text-black border-gray-300"
              placeholder="Credit / Caption"
            />
          </div>
        </div>

        {/* Excerpt - Span 2 or 3 */}
        <div className="md:col-span-3">
          <label className="block text-sm font-medium mb-1 text-black">
            Excerpt
          </label>
          <input
            name="excerpt"
            className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
            placeholder="Short summary..."
          />
        </div>

        {/* Submit - Span 1 */}
        <div className="flex flex-col justify-end gap-2">
          <div className="flex items-center gap-2 mb-2">
            <input
              name="isPublished"
              type="checkbox"
              id="pub"
              className="w-4 h-4 accent-black bg-white border-gray-300"
            />
            <label htmlFor="pub" className="text-sm font-medium text-black">
              Publish?
            </label>
          </div>
          <SubmitButton />
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
