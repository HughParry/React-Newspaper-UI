import React, { FC } from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const CardBody = styled.p`
  font-size: 1rem;
`;

const Card: FC<CardProps> = ({ title, body }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
    </CardContainer>
  );
};

export default Card;
