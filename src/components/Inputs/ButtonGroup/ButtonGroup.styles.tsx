import styled from "styled-components";
import {
  ButtonContainerProps,
  ButtonGroupProps,
  ButtonItem,
} from "./ButtonGroup.types";

export const ButtonGroupContainer = styled.div<ButtonContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  border: 2px solid #353637;
  font-family: "Times New Roman", serif;
`;

export const GroupButton = styled.button<ButtonItem>`
  flex-grow: 1;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#f9f9f9" : "#fff")};
  border: none;
  border-right: ${(props) => (props.isActive ? "2px solid #353637" : "none")};

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: #e4e3ea;
  }
`;
