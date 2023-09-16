import styled from "styled-components";

export const AvatarContainer = styled.div<{ size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e3ea;
  border: 2px solid #353637;
  font-family: "Times New Roman", serif;
  font-weight: bold;
  color: #353637;

  width: ${({ size }) => {
    switch (size) {
      case "small":
        return "30px";
      case "medium":
        return "50px";
      case "large":
        return "70px";
      default:
        return "50px";
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "30px";
      case "medium":
        return "50px";
      case "large":
        return "70px";
      default:
        return "50px";
    }
  }};

  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
