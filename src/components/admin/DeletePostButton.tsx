"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  async function handleClick() {
    if (!confirm("Tem certeza")) return;

    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(result);
    });
  }

  return (
    <button
      className="text-red-500 cursor-pointer
            [&_svg]:w-4 [&_svg]:h-4
            hover:scale-120 hover:text-red-700 transition
            disabled:text-slate-600 disabled:cursor-not-allowed"
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
