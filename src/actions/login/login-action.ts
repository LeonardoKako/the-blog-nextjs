"use server";

import { asyncDelay } from "@/utils/async-delay";

type loginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: loginActionState, formData: FormData) {
  await asyncDelay(3000);

  if (!(formData instanceof FormData)) {
    return {
      username: "",
      error: "",
    };
  }

  // Dados vindo do form
  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  // Aqui eu checaria se o usuário existe na base de dados
  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = "";

  return {
    username: "",
    error: "",
  };
}
