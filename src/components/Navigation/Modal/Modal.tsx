import React, { FC } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #f9f8f4;
  border: 2px solid #353637;
  font-family: "Times New Roman", serif;
  width: 400px;
  padding: 20px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #353637;
  margin-bottom: 10px;
`;

const ModalBody = styled.div`
  font-size: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, title, children, onClose }) => {
  return isOpen ? (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalOverlay>
  ) : null;
};

export default Modal;
