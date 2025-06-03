import ErrorMessage from "../ErrorMessage";
import { PostCoveringImage } from "../PostCoveringImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 0)
    return (
      <ErrorMessage
        content="Ainda não criamos nenhum post."
        contentTitle="Ops..."
      />
    );

  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoveringImage
        linkProps={{
          href: postLink,
        }}
        ImageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      />
      <PostSummary
        postHeading="h1"
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        postLink={postLink}
        title={post.title}
      />
    </section>
  );
}
