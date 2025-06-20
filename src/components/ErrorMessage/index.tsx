"use client";

import clsx from "clsx";

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  content,
  contentTitle,
  pageTitle = "",
}: ErrorMessageProps) {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div
        className={clsx(
          "min-h-[320px]",
          "bg-slate-900",
          "text-slate-100",
          "mb-16",
          "p-8",
          "rounded-xl",
          "flex",
          "items-center",
          "justify-center"
        )}
      >
        <div>
          <h1 className="text-7xl/normal mb-8 font-extrabold text-center">
            {contentTitle}
          </h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
