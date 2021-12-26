import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'biography' | 'technology' | 'fiction' | 'politics' | 'self_help',
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
  type === 'biography' ? theme.colors.secondary : 
  type === 'technology' ? theme.colors.technology : 
  type === 'fiction' ? theme.colors.fiction : 
  type === 'politics' ? theme.colors.politics : 
  type === 'self_help' ? theme.colors.self_help : theme.colors.shape 
  };
  
  width: ${RFValue(74)}px;
  height: ${RFValue(74)}px;
  border-radius: 5px;
  
  margin-right: 20px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  flex-direction: row;
  
`

