import React from "react";
import { AvatarProps } from "./Avatar.types";
import { AvatarContainer } from "./Avatar.styles";

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  initials,
  size = "medium",
}) => (
  <AvatarContainer size={size}>
    {imageUrl ? <img src={imageUrl} alt="Avatar" /> : initials}
  </AvatarContainer>
);

export default Avatar;
