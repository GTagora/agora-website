"use client";

import { useState } from "react";
import AdminColumnView from "./components/dashboard/AdminColumnView";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function AdminPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 p-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-neutral-900 my-3">
              Agora Admin
            </h1>
            <p className="text-neutral-500">Manage articles and issues.</p>
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition-colors shadow-sm font-medium"
            >
              <Plus className="w-4 h-4" /> Create New...
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-md shadow-lg py-1 z-50">
                <Link
                  href="/admin/new/article"
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-black"
                >
                  New Article
                </Link>
                <Link
                  href="/admin/new/issue"
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-black"
                >
                  New Issue
                </Link>
              </div>
            )}
          </div>
        </header>

        <main>
          <AdminColumnView />
        </main>
      </div>
      {/* Overlay to close dropdown */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setDropdownOpen(false)}
        />
      )}
    </div>
  );
}
