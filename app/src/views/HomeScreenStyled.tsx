import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;

export const Header = styled.Text`
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 24px;
  text-align: center;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;  
  color: #007bff;
`;

export const ItemContainer = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  color: #333333;
`;
export const ModalContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const ModalHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ModelItem = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const ModelText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 12px;
  background-color: #007bff;
  margin-top: 16px;
  border-radius: 8px;
  align-items: center;
`;

export const CloseButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;