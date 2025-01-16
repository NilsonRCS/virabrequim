import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #007bff;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  opacity: ${({ disabled }: any) => (disabled ? 0.7 : 1)};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
