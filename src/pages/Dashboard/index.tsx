import { useNavigation } from '@react-navigation/native';

import React, {useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ListCategory } from '../../components/ListCategory';
import SearchInput from '../../components/SearchInput';
import api from '../../services/api';

import {
  Container,
  Header,
  Logo,
  Avatar,
  FilterContainer,
  ListBook,
  Item,
  Image,
  ItemTitle,
  TitleAuthor,
  CategoryContainer,
  Title,
  ScrollViewCategory,
  TitleCategory,
  Footer,
  Icon,
} from './styles';

export interface DataListBookProps {
  id: string,
  image: string,
  title: string,
  titleAuthor: string,
}

export interface DataListMostReadBooksProps {
  id: string,
  image: string,
  title: string,
  titleAuthor: string,
}

export function Dashboard() {
  const navigation = useNavigation();

  const [Books, setBooks] = useState<DataListBookProps[]>([]);

  useEffect(() => {
    api.get('svc/books/v3/lists/names.json\?api-key\=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR')
      .then(response =>
        setBooks(response.data)
      );
  }, []);


  const data: DataListBookProps[] = [
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
      titleAuthor: 'Sam Maggs'
    },
    {
      id: '3',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81wbmWlRNEL.jpg',
      title: 'Steve Jobs: A Biografia',
      titleAuthor: 'Walter Isaacson'
    },
    {
      id: '4',
      image: 'https://static.wixstatic.com/media/5801fd_115a13b86188449e9bc16f6380d0ce88~mv2.jpg/v1/fit/w_450%2Ch_681%2Cal_c%2Cq_80/file.jpg',
      title: 'Ensaio sobre a cegueira',
      titleAuthor: 'José Saramago'
    },
  ]

  const dataBooks: DataListMostReadBooksProps[] = [
    {
      id: '1',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81Eta2onhDL.jpg',
      title: 'Wonder Women: 25M..',
      titleAuthor: 'Sam Maggs'
    },
    {
      id: '2',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51KMfY9qCWL._SX345_BO1,204,203,200_.jpg',
      title: 'Wonder Women: 25M..',
      titleAuthor: 'Sam Maggs'
    },
    {
      id: '3',
      image: 'https://static.wixstatic.com/media/5801fd_115a13b86188449e9bc16f6380d0ce88~mv2.jpg/v1/fit/w_450%2Ch_681%2Cal_c%2Cq_80/file.jpg',
      title: 'Ensaio sobre a cegueira',
      titleAuthor: 'José Saramago'
    },
    {
      id: '4',
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1KS6wOMXNL.jpg',
      title: 'Rita Lee: uma biografia',
      titleAuthor: 'Rita Lee'
    },
    
  ]

  function handleListeBook(books: DataListBookProps) {
    navigation.navigate('bookDetails', { books })
  }

  return (
    <Container>
      <Header>
        <Logo>Bookshelf</Logo>
        <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/53905314?s=400&u=e725d59a2b38aff6ed2e6a66b6e64ee507126347&v=4' }} />
      </Header>

      <FilterContainer>
        <SearchInput
          placeholder="Qual livro você gostaria de ler hoje?"
        />
      </FilterContainer>

      <ScrollView>
        <ListBook
          contentContainerStyle={{
            paddingHorizontal: 8,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
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
              <ItemTitle>{books.title} </ItemTitle>
              <TitleAuthor>{books.titleAuthor}</TitleAuthor>
            </Item>
          ))}
        </ListBook>


        <Title>Categorias</Title>

        <ScrollViewCategory
          contentContainerStyle={{
            paddingHorizontal: 8,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <CategoryContainer onPress={() => navigation.navigate('category')} >
            <ListCategory
              type="biography"
            />
            <TitleCategory> Biography</TitleCategory>
          </CategoryContainer>


          <CategoryContainer>
            <ListCategory
              type="technology"
            />
            <TitleCategory>Technology</TitleCategory>
          </CategoryContainer>

          <CategoryContainer>
            <ListCategory
              type="fiction"
            />
            <TitleCategory>Fiction</TitleCategory>
          </CategoryContainer>

          <CategoryContainer>
            <ListCategory
              type="politics"
            />
            <TitleCategory>politics</TitleCategory>
          </CategoryContainer>

          <CategoryContainer>
            <ListCategory
              type="self_help"
            />
            <TitleCategory>self_help</TitleCategory>
          </CategoryContainer>

        </ScrollViewCategory>

        <Title>Os mais lidos da semana</Title>

        <ListBook
          contentContainerStyle={{
            paddingHorizontal: 8,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {dataBooks.map(books => (
            <Item
              key={books.id}
              onPress={() => {
                handleListeBook(books);
              }}
            >
              <Image
                source={{ uri: books.image }}
              />
              <ItemTitle>{books.title} </ItemTitle>
              <TitleAuthor>{books.titleAuthor}</TitleAuthor>
            </Item>
          ))}
        </ListBook>

        <Footer>
          <Icon
            name="home"
            size={30}
          />
        </Footer>

      </ScrollView>


    </Container>
  );
}

