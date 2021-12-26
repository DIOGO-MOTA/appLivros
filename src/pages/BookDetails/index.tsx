import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Header,
  BackButton,
  Icon,
  Contents,
  Item,
  Image,
  ItemTitle,
  TitleAuthor,
  ContentTitle,
  Section,
  TitleSection,
  Paragraph,
  ButtonParagragh,
  ButtonText
} from './styles';

interface Data {
  image: string,
  title: string,
  titleAuthor: string,
}

interface Params {
  books: Data;
}

export function BookDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const { books } = route.params as Params;


  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon
            name="arrow-left"
            size={30}
          />

        </BackButton>

      </Header>

      <Contents>
        <Item  >
          <Image
            source={{ uri: books.image }}
          />
          <ContentTitle>
            <ItemTitle>Wonder Women: 25 Mulheres Inovadoras, Inventoras e Pioneiras que Fizeram a Diferença</ItemTitle>
            <TitleAuthor>{books.titleAuthor}</TitleAuthor>
          </ContentTitle>
        </Item>

      </Contents>
      <Section>
        <TitleSection>Sobre esse livro</TitleSection>

        <Paragraph>
          Agora pense no quão especial alguém deve ser para conseguir os mesmos resultados
          quando nada ao redor conspira a seu favor.
        </Paragraph>

        <Paragraph>
          Em “Wonder Women”, o leitor conhecerá mulheres além de seu tempo. Pessoas brilhantes,
          que se recusaram a se acomodar no papel de coadjuvantes e foram à luta, tornando-se
          protagonistas de sua própria vida. Cientistas, engenheiras, matemáticas, aventureiras
          e inventoras cujos feitos mudaram os rumos da história.
        </Paragraph>

        <ButtonParagragh>
          <ButtonText>Ler Agora</ButtonText>
        </ButtonParagragh>
      </Section>
    </Container>
  )
}