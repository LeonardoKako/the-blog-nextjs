"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("Este é o exemplo");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText placeholder="Digite seu nome" labelText="Nome" />
        <InputCheckbox labelText="Receba?" />
        <ImageUploader />
        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
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
