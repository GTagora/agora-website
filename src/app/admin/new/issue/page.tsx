import IssueForm from "@/app/admin/components/IssueForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewIssuePage() {
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
          <h1 className="text-3xl font-bold text-neutral-900">New Issue</h1>
        </div>
        <IssueForm />
      </div>
    </div>
  );
}
