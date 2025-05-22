import { PostCoveringImage } from "../PostCoveringImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qlqr";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoveringImage
        linkProps={{
          href: postLink,
        }}
        ImageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_0.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />
      <div className="flex flex-col gap-2 sm:gap-4 justify-center">
        <time className="text-slate-600 text-sm/tight" dateTime="2025-08-20">
          20/04/2025 10:00
        </time>
        <PostHeading url={postLink} as="h1">
          Lorem ipsum dolor sit amet.
        </PostHeading>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ipsam
          maiores qui incidunt quos impedit consequatur eveniet quibusdam nam,
          officia odit, corrupti quod in ab. Sint commodi tempora necessitatibus
          fuga
        </p>
      </div>
    </section>
  );
}
