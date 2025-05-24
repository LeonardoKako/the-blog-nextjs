import { PostFeatured } from "@/components/PostFeatured";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Teste",

  description: "Descrição",
};

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />

        <PostsList />
      </Suspense>
    </>
  );
}
