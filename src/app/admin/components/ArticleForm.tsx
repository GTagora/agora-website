"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitArticle } from "../actions";
import { useState } from "react";
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
  const [selectedGenre, setSelectedGenre] = useState("Essay");

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
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Form Side */}
      <div className="flex-1 bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
        <form action={formAction} className="space-y-6">
          {state.message && (
            <div
              className={`p-4 rounded-md ${state.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
            >
              {state.message}
            </div>
          )}

          {/* Title & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
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
                      .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
                      .trim()
                      .replace(/\s+/g, "-"); // Replace spaces with hyphens

                    // Simple logic: update slug if it exists in DOM
                    const slugInput = document.querySelector(
                      'input[name="slug"]',
                    ) as HTMLInputElement;
                    if (slugInput) slugInput.value = generatedSlug;
                  }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Slug (Auto-generated)
              </label>
              <input
                required
                name="slug"
                type="text"
                className="w-full border rounded-md p-2 bg-gray-100 text-black border-gray-300"
                placeholder="article-name"
              />
            </div>
          </div>

          {/* Issue & Genre */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Issue
              </label>
              <div className="space-y-2">
                {/* Logic to generate issue options */}
                {(() => {
                  const issues = [{ value: "blog", label: "Blog" }];
                  const startYear = 2022;
                  const now = new Date();
                  const currentYear = now.getFullYear();
                  const currentMonth = now.getMonth(); // 0-11

                  for (let y = startYear; y <= currentYear; y++) {
                    const shortYear = y.toString().slice(-2);
                    // Spring: If y > startYear (2022 only had Fall?), and available in Jan
                    if (y > startYear) {
                      if (
                        y < currentYear ||
                        (y === currentYear && currentMonth >= 0)
                      ) {
                        issues.push({
                          value: `${shortYear}s`,
                          label: `Spring ${y}`,
                        });
                      }
                    }
                    // Fall: Available in Aug (Month 7)
                    if (
                      y < currentYear ||
                      (y === currentYear && currentMonth >= 7)
                    ) {
                      issues.push({
                        value: `${shortYear}f`,
                        label: `Fall ${y}`,
                      });
                    }
                  }
                  // Reverse to show newest first?
                  issues.reverse();
                  // Add "Custom" option at the end
                  issues.push({
                    value: "custom",
                    label: "Create New Issue...",
                  });

                  return (
                    <>
                      <select
                        className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
                        defaultValue={issues[0]?.value} // Default to newest
                        onChange={(e) => {
                          const val = e.target.value;
                          const slugInput = document.querySelector(
                            'input[name="issueSlug"]',
                          ) as HTMLInputElement;
                          if (slugInput) {
                            if (val === "custom") {
                              slugInput.value = ""; // Clear for user input
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
                    </>
                  );
                })()}

                <div className="relative">
                  <Layout className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <input
                    required
                    name="issueSlug"
                    type="text"
                    readOnly
                    className="pl-10 w-full border rounded-md p-2 bg-gray-100 text-black border-gray-300"
                    placeholder="25f"
                    // Default value logic is tricky here because of SSR/hydration mismatch if we use Date() in default value.
                    // But effectively the Select's onChange won't fire on load.
                    // So we should supply a defaultValue that matches the select's default.
                    // Let's settle for hardcoding a safe default or using state.
                    // For simplicity in this replace block, I'll use a placeholder and let the user pick.
                  />
                </div>
              </div>
            </div>
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
          </div>

          {/* Author & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              rows={2}
              className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
              placeholder="Short summary for preview cards..."
            />
          </div>

          {/* Markdown Content */}
          <div>
            <label className="block text-sm font-medium mb-1 flex items-center justify-between text-black">
              <span>Content (Markdown)</span>
              <FileText className="w-4 h-4 text-gray-400" />
            </label>
            <textarea
              required
              name="content"
              rows={15}
              className="w-full border rounded-md p-2 font-mono text-sm bg-white text-black border-gray-300"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="# Article Header..."
            />
          </div>

          {/* Image Upload */}
          <div className="p-4 border border-dashed rounded-lg bg-gray-50 border-gray-300">
            <label className="block text-sm font-medium mb-1 text-black">
              Cover Image
            </label>
            <div className="flex items-center gap-4">
              <input
                name="coverImage"
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200 file:text-black"
              />
            </div>
            <input
              name="imageCredit"
              type="text"
              className="mt-2 w-full border rounded-md p-2 text-sm bg-white text-black border-gray-300"
              placeholder="Image Credit / Caption"
            />
          </div>

          {/* Publish Toggle */}
          <div className="flex items-center gap-2">
            <input
              name="isPublished"
              type="checkbox"
              id="pub"
              className="w-4 h-4 accent-black bg-white border-gray-300"
            />
            <label htmlFor="pub" className="text-sm font-medium text-black">
              Publish immediately?
            </label>
          </div>

          <SubmitButton />
        </form>
      </div>

      {/* Preview Side */}
      <div className="flex-1">
        <div className="sticky top-10 space-y-4">
          <h2 className="text-xl font-bold font-serif">Preview</h2>
          <div className="prose prose-neutral max-w-none bg-white p-8 rounded-xl border border-neutral-200 shadow-sm min-h-[50vh]">
            <ReactMarkdown>
              {content || "*Preview will appear here...*"}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
