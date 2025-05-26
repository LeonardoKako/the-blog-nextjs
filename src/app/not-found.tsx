import ErrorMessage from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        content={
          <p>Erro 404 - A página que você está tentando acessar não existe</p>
        }
        contentTitle="404"
        pageTitle="Página não encontrada"
      />
    </>
  );
}
