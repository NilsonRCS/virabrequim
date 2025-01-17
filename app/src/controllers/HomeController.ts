import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiParallelum } from "../services/api";

export const HomeController = {
  getUserName: async (): Promise<string | null> => {
    const name = await AsyncStorage.getItem("userName");
    return name;
  },
};

export const fetchCarBrands = async () => {
  try {
    const response = await apiParallelum.get("/carros/marcas");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar marcas:", error);
    Alert.alert("Erro", "Não foi possível carregar as marcas de carros.");
    return [];
  }
};


