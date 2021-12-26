import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  Header,
  BackButton,
  Icon,
  Contents,
  Title,
  ListBook,
  Item,
  Image,
  ItemTitle,
  TitleAuthor
} from './styles';

export interface DataCategoryProps {
  id: string,
  image: string,
  title: string,
  titleAuthor: string,
}


export function Category() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const data: DataCategoryProps[] = [
    {
      id: '1',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51KMfY9qCWL._SX345_BO1,204,203,200_.jpg',
      title: 'Wonder Women: 25M..',
      titleAuthor: 'Sam Maggs'
    },
    {
      id: '2',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81Eta2onhDL.jpg',
      title: 'Wonder Women: 25M..',
      titleAuthor: 'test'
    },
    {
      id: '3',
      image: 'https://static.wixstatic.com/media/5801fd_115a13b86188449e9bc16f6380d0ce88~mv2.jpg/v1/fit/w_450%2Ch_681%2Cal_c%2Cq_80/file.jpg',
      title: 'Ensaio sobre a cegueira',
      titleAuthor: 'José Saramago'
    },
    {
      id: '4',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81wbmWlRNEL.jpg',
      title: 'Steve Jobs: A Biografia',
      titleAuthor: 'Walter Isaacson'
    },
    {
      id: '5',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71ZCGlZewLL.jpg',
      title: 'Uma terra prometida',
      titleAuthor: 'Barack Obama'
    },
    {
      id: '6',
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1KS6wOMXNL.jpg',
      title: 'Rita Lee: uma biografia',
      titleAuthor: 'Rita Lee'
    },
  ]
 
  function handleListeBook(books: DataCategoryProps ) {
    navigation.navigate('bookDetails', {books})
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
        <Title>Bookshelf</Title>
      </Header>
    
    <Contents>
      <ListBook>
        {data.map(books => (
          <Item
            key={books.id}
            onPress={() => {
              handleListeBook(books);
            }}
          >
            <Image
              source={{ uri: books.image }}
            />
            <ItemTitle>{ books.title } </ItemTitle>
            <TitleAuthor>{ books.titleAuthor}</TitleAuthor>
          </Item>
        ))}
      </ListBook>

      </Contents>
    </Container>
  )
}