import styled from 'styled-components/native';

interface FormFieldProps {
  error: boolean;
}

export const FormLabel = styled.Text`
  color: #777777;
  font-size: 12px;
  margin-botton: 12px;
`;

export const FormField = styled.TextInput`
  border: 1px;
  font-size: 12px;
  margin-top: 8px;
  border-color: ${(props: FormFieldProps) =>
    props.error ? '#F08080' : '#777777'};
  height: 36px;
  width: 360px;
  border-radius: 5px;
  padding: 4px;
`;

export const FormCaption = styled.Text`
  color: #F08080;
  font-size: 12px;
  margin-botton: 12px;
`;
