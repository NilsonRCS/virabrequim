import React from "react";
import { Modal, FlatList, ActivityIndicator } from "react-native";
import {ModalContainer, ModalHeader,CloseButton, CloseButtonText} from './CustomModalStyled'

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  isLoading: boolean;
  data: any[];
  renderItem: (item: any) => JSX.Element;
}

const CustomModal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  title,
  isLoading,
  data,
  renderItem,
}) => {
  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
      <ModalContainer>
        <ModalHeader>{title}</ModalHeader>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
          data={data}
          keyExtractor={(item) => item.codigo}
          renderItem={renderItem}
          />
        )}
        <CloseButton onPress={onClose}>
          <CloseButtonText>Fechar</CloseButtonText>
        </CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default CustomModal;
