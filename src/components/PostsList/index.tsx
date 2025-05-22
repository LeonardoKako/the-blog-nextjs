import { postRepository } from "@/repostitories/post";
import { PostCoveringImage } from "../PostCoveringImage";
import { PostHeading } from "../PostHeading";

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
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
            <div className="flex flex-col gap-2 sm:gap-4 justify-center">
              <time
                className="text-slate-600 text-sm/tight"
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>
              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
