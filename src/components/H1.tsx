import React from 'react';
import {Text} from 'react-native';
import {HeaderContainer} from './styles/general';
import {H1Styled} from './styles/header';

interface headerProps {
  content: string;
}

export const H1: React.FC<headerProps> = props => {
  return (
    <HeaderContainer>
      <H1Styled>
        <Text>{props.content}</Text>
      </H1Styled>
    </HeaderContainer>
  );
};
