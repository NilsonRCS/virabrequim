
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignInData } from "../models/SignInModel";
import { signInSchema } from "../utils/signInSchema";
import { apiToLogin } from "../services/api";

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
    const response = await apiToLogin.post("/signIn", data);

    const responseData = response.data;


    if (response && responseData.user.name) {
      await AsyncStorage.setItem("userName", responseData.user.name);
      onSuccess(responseData.user.name);
      return true;
    } else {
      Alert.alert(
        "Erro ao fazer login",
        responseData.message || "Credenciais inválidas"
      );
      return false;
    }
  } catch (error) {
    console.log(error)
    Alert.alert(
      "Erro",
      "Não foi possível conectar à API. Tente novamente mais tarde."
    );
    return false;
  }
};
