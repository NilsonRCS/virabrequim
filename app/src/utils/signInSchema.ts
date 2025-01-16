import { z } from "zod";

export const signInSchema = z.object({
  user: z.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
  password: z.string().min(3, "A senha deve ter pelo menos 3 caracteres"),
});
