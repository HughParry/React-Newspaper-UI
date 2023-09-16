import styled from "styled-components";
import React, { useState } from "react";
import { TabsProps } from "./Tabs.types";
import { keyframes, css } from "styled-components";

const tabHoverAnimation = keyframes`
  0% { background-color: transparent; }
  50% { background-color: #f9f9f9; }
  100% { background-color: transparent; }
`;

const contentEnterAnimation = keyframes`
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const TabsContainer = styled.div`
  font-family: "Times New Roman", serif;
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 2px solid #353637;
`;

const TabListItem = styled.li<{ isActive: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? "2px solid #067d68" : "none")};

  &:hover {
    animation: ${tabHoverAnimation} 0.5s forwards;
  }
`;

const TabContent = styled.div<TabsProps>`
  padding: 20px;
  border: 2px solid #353637;
  border-top: none;
  opacity: 0;

  ${(props) =>
    props.isActive &&
    css`
      animation: ${contentEnterAnimation} 0.5s forwards;
    `}
`;

const Tabs: React.FC<TabsProps> = ({ tabs, initialTabIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <TabListItem
            key={index}
            isActive={index === activeTabIndex}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </TabListItem>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabContent key={index} isActive={index === activeTabIndex}>
          {tab.content}
        </TabContent>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
