import React from 'react';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import MeetupCard from '~/components/MeetupCard';
import Header from '~/components/Header';

import {
  Container,
  List,
  DateNavigator,
  Icon,
  TextDate,
  DateButton,
} from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Header />
      <Container>
        <DateNavigator>
          <DateButton onPress={() => {}}>
            <Icon name="chevron-left" />
          </DateButton>
          <TextDate>31 de Maio</TextDate>
          <DateButton onPress={() => {}}>
            <Icon name="chevron-right" />
          </DateButton>
        </DateNavigator>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <MeetupCard data={item} />}
        />
      </Container>
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="list" size={30} color={tintColor} />
);

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon,
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
