import styled from 'styled-components/native';

import MDIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(MDIcon).attrs(({ ...rest }) => ({ ...rest }))`
  color: #999;
`;

export const CardHeader = styled.Image`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 120px;
  width: 100%;
  margin-bottom: 0;
`;

export const CardContent = styled.View`
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-content: center;
`;

export const InfoElement = styled.View`
  flex: 1;
  flex-direction: row;
  font-size: 13px;
  margin: 4px 0;
  align-items: center;
`;

export const Text = styled.Text`
  color: #999;
`;

export const Title = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;
