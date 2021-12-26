import React from 'react';

import {
  Container,
} from './styles';

interface Props {
  type: 'biography' | 'technology' | 'fiction' | 'politics' | 'self_help',
}


export function ListCategory({
  type,

}: Props) {
  return (
    <Container type={type}/>
  )
}