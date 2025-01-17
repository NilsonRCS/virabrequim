import styled from "styled-components/native";

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
