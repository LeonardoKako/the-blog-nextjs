import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen ">
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a header</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o footer</h1>
      </footer>
    </div>
  );
}
