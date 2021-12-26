import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import FeatherIcon from 'react-native-vector-icons/Feather';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(20)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const Logo = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 50px;
`
export const FilterContainer = styled.View`
  padding: 0 24px;
  margin-top: -28px;
`;

export const ListBook = styled.ScrollView`
 padding: 0 24px;
`

export const Item = styled.TouchableOpacity`
  width: ${RFValue(104)}px;
  padding-top: 15px;
  padding-bottom: 16px;
  margin-right: 8px;
  justify-content: space-between;
  text-align: center;
`;

export const Image = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(160)}px;

  border-radius: 5px;
`

export const ItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
`;

export const TitleAuthor = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 3px;
`

export const ScrollViewCategory = styled.ScrollView`
  padding: 0 24px;
`
export const CategoryContainer = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const TitleCategory = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 3px;
`
export const Footer = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px;

  justify-content: center;
  align-items: center;
`
export const Icon = styled(FeatherIcon)`
  color: ${({ theme }) => theme.colors.biography};
`;

export const Title= styled.Text`
padding: 0 24px;
color: ${({ theme }) => theme.colors.text};

font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.bold};
margin-bottom: 3px;
`