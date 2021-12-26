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
  align-items: center;
  padding: 0 24px;
`;
export const BackButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
`;

export const Contents = styled.View`
 flex: 1;
 padding: 0 24px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const ListBook = styled.View`
 flex-direction: row;
 flex-wrap: wrap;
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
export const Icon = styled(FeatherIcon)`
  color: ${({ theme }) => theme.colors.black};
  margin-right: 10px;
`;
