import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { fetchCarBrands, HomeController } from "../controllers/HomeController";
import CustomModal from "../components/CustomModal";
import {
  ItemContainer, ItemText, ModelItem, ModelText, UserName, Container, Header
} from './HomeScreenStyled'

interface CarBrand {
  codigo: string;
  nome: string;
}

interface CarModel {
  codigo: string;
  nome: string;
}

const HomeScreen: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [carBrands, setCarBrands] = useState<CarBrand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<CarBrand | null>(null);
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModelsLoading, setIsModelsLoading] = useState(false);

  useEffect(() => {
    const fetchUserName = async () => {
      const name = await HomeController.getUserName();
      setUserName(name);
    };

    const loadCarBrands = async () => {
      const brands = await fetchCarBrands();
      setCarBrands(brands);
      setIsLoading(false);
    };

    fetchUserName();
    loadCarBrands();
  }, []);

  const loadCarModels = async (brand: CarBrand) => {
    setIsModelsLoading(true);
    try {
      const response = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand.codigo}/modelos`
      );
      setCarModels(response.data.modelos);
      setSelectedBrand(brand);
      setIsModalVisible(true);
    } catch (error) {
      console.error("Erro ao buscar modelos:", error);
    } finally {
      setIsModelsLoading(false);
    }
  };

  const renderItem = ({ item }: { item: CarBrand }) => (
    <TouchableOpacity onPress={() => loadCarModels(item)}>
      <ItemContainer>
        <ItemText>{item.nome}</ItemText>
      </ItemContainer>
    </TouchableOpacity>
  );

  const renderModelItem = ({ item }: { item: CarModel }) => (
    <ModelItem>
      <ModelText>{item.nome}</ModelText>
    </ModelItem>
  );

  return (
    <Container>
      <Header>
        Bem-vindo, <UserName>{userName}</UserName>!
      </Header>
      <ItemText>Escolha sua marca favorita e explore seus modelos icônicos!</ItemText>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={carBrands}
          keyExtractor={(item) => item.codigo}
          renderItem={renderItem}
        />
      )}

      <CustomModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title={selectedBrand?.nome || "Modelos"}
        isLoading={isModelsLoading}
        data={carModels}
        renderItem={renderModelItem}
      />
    </Container>
  );
};


export default HomeScreen;
