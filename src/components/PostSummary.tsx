import { PostHeading } from "./PostHeading";
import { PostDate } from "./PostDate";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  excerpt,
  title,
  createdAt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 justify-center">
      <PostDate dateTime={createdAt} />
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
