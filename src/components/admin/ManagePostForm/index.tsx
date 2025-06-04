import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";

export function ManagePostForm() {
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText placeholder="Digite seu nome" labelText="Nome" />
        <InputCheckbox labelText="Receba?" />
      </div>
      <div className="mt-4">
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </div>
    </form>
  );
}
