import { Alert } from "react-native";
import { SignInData } from '../models/SignInModel';
import { signInSchema } from '../utils/signInSchema'

export const handleSignIn = async (
  data: SignInData,
  onSuccess: (name: string) => void
) => {
  const validation = signInSchema.safeParse(data);

  if (!validation.success) {
    const errorMessages = validation.error.errors
      .map((err) => err.message)
      .join("\n");
    Alert.alert("Erro de Validação", errorMessages);
    return false;
  }

  try {
    const response = await fetch("https://test-api-y04b.onrender.com/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (response.ok) {
      onSuccess(responseData.name);
      return true;
    } else {
      Alert.alert(
        "Erro ao fazer login",
        responseData.message || "Credenciais inválidas"
      );
      return false;
    }
  } catch (error) {
    Alert.alert(
      "Erro",
      "Não foi possível conectar à API. Tente novamente mais tarde."
    );
    return false;
  }
};
