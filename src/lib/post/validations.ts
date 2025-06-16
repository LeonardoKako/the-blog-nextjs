import { isUrlOrRelativePath } from "@/utils/is-url-or-relativePath";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";

const PostBaseSchema = z.object({
  title: z
    .string()
    .trim() // tira os espaços do começo e final
    .min(3, "Título deve ter, no mínimo, 3 caracteres")
    .max(120, "Título deve ter um máximo de 120 caracteres"),
  content: z
    .string()
    .trim()
    .min(3, "Conteúdo é obrigatório")
    .transform((val) => sanitizeHtml(val)),
  author: z
    .string()
    .trim()
    .min(4, "Autor precisa de um mínimo de 4 caracteres")
    .max(100, "Nome do autor não deve ter mais que 100 caracteres"),
  excerpt: z
    .string()
    .trim()
    .min(3, "Excerto precisa de um mínimo de 3 caracteres")
    .max(200, "Excerto não deve ter mais que 200 caracteres"),
  coverImageUrl: z.string().trim().refine(isUrlOrRelativePath, {
    message: "URL da capa deve ser uma URL ou caminho para imagem",
  }),
  published: z
    .union([
      z.literal("on"),
      z.literal("true"),
      z.literal("false"),
      z.literal(true),
      z.literal(false),
      z.literal(null),
      z.literal(undefined),
    ])
    .default(false)
    .transform((val) => val === "on" || val === "true" || val === true),
});

// PostCreateSchema: igual ao base por enquanto
export const PostCreateSchema = PostBaseSchema;

// PostUpdateSchema: pode incluir campos extras no futuro (ex: id)
export const PostUpdateSchema = PostBaseSchema.extend({
  // id: z.string().uuid('ID inválido'),
});

const obj = {
  id: "3993fcf7-2490-48ed-be2e-58c2030ee764",
  slug: "organizacao-pessoal-por-onde-comecar",
  title: "Organização pessoal: por onde começar",
  author: "Bianca Rocha",
  excerpt:
    "Por exemplo, ele pode dividir o código em partes menores para que o navegador só carregue o que for necessário.",
  content:
    "Por exemplo, ele pode dividir o código em partes menores para que o navegador só carregue o que for necessário.",
  file: {
    size: 0,
    type: "application/octet-stream",
    name: "undefined",
    lastModified: 1749765441776,
  },
  coverImageUrl: "/images/bryen_4.png",
  published: "on",
};

const zodParsedObj = PostCreateSchema.safeParse(obj);

if (!zodParsedObj.success) {
  // console.log(zodParsedObj.error.format());
}
