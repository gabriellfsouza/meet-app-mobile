import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateNavigator = styled.View`
  flex-direction: row;
  margin-top: 30px;
  align-self: center;
  align-items: center;
`;

export const Icon = styled(MDIcon).attrs(({ ...rest }) => ({
  ...rest,
  size: 30,
}))`
  color: #fff;
`;

export const DateButton = styled.TouchableOpacity``;

export const TextDate = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  flex-direction: column;
`;
