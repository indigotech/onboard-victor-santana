import React from 'react';
import {ButtonStyled, ButtonText} from './styles/button';
import {FieldContainer} from './styles/general';

interface buttonProps {
  content: string;
  pressButon: () => void;
}

export const StyledButton: React.FC<buttonProps> = props => {
  return (
    <FieldContainer>
      <ButtonStyled onPress={props.pressButon}>
        <ButtonText>{props.content}</ButtonText>
      </ButtonStyled>
    </FieldContainer>
  );
};
