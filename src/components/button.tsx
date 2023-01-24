import React from 'react';
import {ButtonStyled, ButtonText} from './styles/button';
import {Container} from './styles/general';

interface StyledButtonProps {
  content: string;
  pressButon: () => void;
}

export const StyledButton = (props: StyledButtonProps) => {
  return (
    <Container>
      <ButtonStyled onPress={props.pressButon}>
        <ButtonText>{props.content}</ButtonText>
      </ButtonStyled>
    </Container>
  );
};
