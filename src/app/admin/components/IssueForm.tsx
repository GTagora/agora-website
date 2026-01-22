"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitIssue } from "../actions";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Upload, FileText, Layout, Hash, BookOpen } from "lucide-react";

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
      {pending ? "Creating..." : "Create Issue"}
    </button>
  );
}

export default function IssueForm() {
  const [state, formAction] = useFormState(submitIssue, initialState);
  const [letter, setLetter] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setLetter("");
    }
  }, [state]);

  // Semester generation logic
  const semesters = [];
  const startYear = 2023;
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-11

  for (let y = startYear; y <= currentYear; y++) {
    // Spring: Always valid for the current year (since it starts in Jan)
    semesters.push(`Spring ${y}`);

    // Fall: Valid if we are in August (Month 7) or later
    if (y < currentYear || (y === currentYear && currentMonth >= 7)) {
      semesters.push(`Fall ${y}`);
    }
  }
  semesters.reverse();

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-8 h-[calc(100vh-140px)]"
    >
      {/* Top Metadata Section */}
      <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        {/* Status Message */}
        {state.message && (
          <div
            className={`col-span-full p-4 rounded-md ${state.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {state.message}
          </div>
        )}

        {/* Semester */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Semester
          </label>
          <select
            name="semester"
            className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
            onChange={(e) => {
              // Auto-gen slug
              const val = e.target.value; // "Spring 2023"
              if (!val) return;
              const [season, yearStr] = val.split(" ");
              const year = parseInt(yearStr);
              if (season && year) {
                // Slug
                const shortYear = yearStr.slice(-2);
                const s = season === "Spring" ? "s" : "f";
                const slugInput = document.querySelector(
                  'input[name="slug"]',
                ) as HTMLInputElement;
                if (slugInput) slugInput.value = `${shortYear}${s}`;

                // Volume & Issue Logic
                // Fall 2023 = Vol 1, No 1
                // Spring 2024 = Vol 1, No 2
                // Fall 2024 = Vol 2, No 1
                // Formula:
                // If Fall: Volume = Year - 2022, Issue = 1
                // If Spring: Volume = Year - 2023, Issue = 2

                let vol = 1;
                let iss = 1;

                if (season === "Fall") {
                  vol = year - 2022;
                  iss = 1;
                } else if (season === "Spring") {
                  vol = year - 2023;
                  iss = 2;
                }

                const volInput = document.querySelector(
                  'input[name="volume"]',
                ) as HTMLInputElement;
                const issInput = document.querySelector(
                  'input[name="issue_number"]',
                ) as HTMLInputElement;

                if (volInput) volInput.value = vol.toString();
                if (issInput) issInput.value = iss.toString();
              }
            }}
          >
            <option value="">Select Semester...</option>
            {semesters.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Slug (Auto) */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Slug (Auto)
          </label>
          <div className="relative">
            <Layout className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              required
              name="slug"
              type="text"
              readOnly
              className="pl-10 w-full border rounded-md p-2 bg-gray-100 text-black border-gray-300"
              placeholder="23f"
            />
          </div>
        </div>

        {/* Theme */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1 text-black">
            Theme
          </label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              required
              name="theme"
              type="text"
              className="pl-10 w-full border rounded-md p-2 bg-white text-black border-gray-300"
              placeholder="Theme"
            />
          </div>
        </div>

        {/* Volume */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Volume
          </label>
          <div className="relative">
            <Hash className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              required
              name="volume"
              type="number"
              min="1"
              className="pl-10 w-full border rounded-md p-2 bg-white text-black border-gray-300"
              placeholder="1"
            />
          </div>
        </div>

        {/* Issue Number */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Issue No.
          </label>
          <div className="relative">
            <Hash className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              required
              name="issue_number"
              type="number"
              min="1"
              className="pl-10 w-full border rounded-md p-2 bg-white text-black border-gray-300"
              placeholder="1"
            />
          </div>
        </div>

        {/* Date Published */}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">
            Date Published
          </label>
          <input
            name="date_published"
            type="date"
            className="w-full border rounded-md p-2 bg-white text-black border-gray-300"
          />
        </div>

        {/* Submit */}
        <div className="flex items-end">
          <SubmitButton />
        </div>

        {/* Cover Image */}
        <div className="col-span-full">
          <label className="block text-sm font-medium mb-1 text-black">
            Issue Cover
          </label>
          <input
            name="coverImage"
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200 file:text-black border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Letter from EIC */}
      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
        <div className="flex-1 flex flex-col bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Letter from EIC (Markdown)
            </label>
          </div>
          <textarea
            name="letter_from_eic"
            className="flex-1 w-full p-4 font-mono text-sm bg-white text-black resize-none focus:outline-none"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            placeholder="# Letter from the Editor..."
          />
        </div>

        <div className="flex-1 flex flex-col bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <label className="text-sm font-bold text-gray-700">
              Live Preview
            </label>
          </div>
          <div className="flex-1 overflow-y-auto p-8 prose prose-neutral max-w-none">
            <ReactMarkdown>{letter || "*Preview...*"}</ReactMarkdown>
          </div>
        </div>
      </div>
    </form>
  );
}
