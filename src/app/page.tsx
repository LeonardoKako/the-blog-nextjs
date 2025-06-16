import { PostFeatured } from "@/components/PostFeatured";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  description: "Descrição",
};

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />

        <PostsList />
      </Suspense>
    </>
  );
}
