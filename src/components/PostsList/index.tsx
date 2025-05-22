import { PostCoveringImage } from "../PostCoveringImage";

import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export default async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoveringImage
              linkProps={{
                href: postLink,
              }}
              ImageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <PostSummary
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
              postHeading="h2"
              postLink={postLink}
            />
          </div>
        );
      })}
    </div>
  );
}
