"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

type ImageUploaderProps = {
  disabled?: boolean;
};

export function ImageUploader({ disabled }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState("");

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();
    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }
    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl("");
      return;
    }

    const imageUploadMaxSize =
      Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE) || 921600;
    if (file.size > imageUploadMaxSize) {
      toast.error(`Image muito grande. Máx:${imageUploadMaxSize / 1024}KB`);
      fileInput.value = "";
      setImgUrl("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = "";
        setImgUrl("");
        return;
      }

      setImgUrl(result.url);
      toast.success("Imagem enviada");
    });

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button
        type="button"
        className="self-start"
        onClick={handleChooseFile}
        disabled={isUploading || disabled}
      >
        <ImageUpIcon />
        Enviar imagem
      </Button>
      {!!imgUrl && (
        <div className="flex flex-col gap-4">
          <p>
            <b>URL:</b> {imgUrl}
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="rounded-lg max-w-[200px]" src={imgUrl} alt="Image" />
        </div>
      )}
      <input
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
        disabled={isUploading || disabled}
      />
    </div>
  );
}
