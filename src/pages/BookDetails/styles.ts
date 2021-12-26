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


export const Icon = styled(FeatherIcon)`
  color: ${({ theme }) => theme.colors.black};
  margin-right: 10px;
`;

export const Contents = styled.View`
 flex: 1;
 padding: 0 24px;
`


export const Item = styled.View`
  width: ${RFValue(343)}px;
  height: ${RFValue(253)}px;
  margin-right: 8px;

  flex-direction: row;
  align-items: flex-start;
  text-align: center;
`;

export const ContentTitle = styled.View`
  width: ${RFValue(180)}px;
  margin-left: 8px;
`

export const Image = styled.Image`
  width: ${RFValue(164)}px;
  height: ${RFValue(253)}px;

  border-radius: 5px;
`

export const ItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TitleAuthor = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 10px;
`

export const Section = styled.View`
 flex: 1;
 padding: 0 24px;
`

export const TitleSection = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Paragraph = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: justify;
  margin-top: 20px;
`
export const ButtonParagragh = styled.TouchableOpacity`
  width: ${RFValue(343)}px;
  height: ${RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.biography};

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  margin-top: 20px;

` 

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`