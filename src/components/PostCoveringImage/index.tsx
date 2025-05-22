import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type PostCoveringImageProps = {
  ImageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoveringImage({
  ImageProps,
  linkProps,
}: PostCoveringImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full h-full overflow-hidden rounded-xl",
        linkProps.className
      )}
    >
      <Image
        {...ImageProps}
        className={clsx(
          "group-hover:scale-105 transition w-full h-full object-cover object-center",
          ImageProps.className
        )}
        alt={ImageProps.alt}
      />
    </Link>
  );
}
