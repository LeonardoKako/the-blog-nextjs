"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { PublicPost } from "@/dto/post/dto";

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const [contentValue, setContentValue] = useState(publicPost?.content || "");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          readOnly
          defaultValue={publicPost?.id || ""}
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerado automaticamente"
          type="text"
          readOnly
          defaultValue={publicPost?.slug || ""}
        />

        <InputText
          labelText="Titulo"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={publicPost?.title || ""}
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={publicPost?.author || ""}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={publicPost?.excerpt || ""}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          textAreaName="content"
          setValue={setContentValue}
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText="URL da image de capa"
          name="coverImageUrl"
          placeholder="Digite a url da imagem"
          type="text"
          defaultValue={publicPost?.coverImageUrl || ""}
        />

        <InputCheckbox
          labelText="Publicar?"
          name="published"
          type="checkbox"
          defaultChecked={publicPost?.published || false}
        />
      </div>
      <div className="mt-4">
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </div>
    </form>
  );
}
