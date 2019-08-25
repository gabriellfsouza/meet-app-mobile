import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  flex-direction: column;
`;
