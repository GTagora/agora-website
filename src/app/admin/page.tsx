import ArticleForm from "./components/ArticleForm";

export const metadata = {
  title: "Agora Admin",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-serif text-neutral-900">
              Agora Admin
            </h1>
            <p className="text-neutral-500">
              Upload and manage articles manually.
            </p>
          </div>
          <a href="/" className="text-sm underline">
            Back to Site
          </a>
        </header>

        <main>
          <ArticleForm />
        </main>
      </div>
    </div>
  );
}
