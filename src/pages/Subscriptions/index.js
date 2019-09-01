import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, List } from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';
import {
  listSubsRequest,
  cancelSubRequest,
} from '~/store/modules/subs/actions';

export default function Subscriptions() {
  const dispatch = useDispatch();
  const subscriptions = useSelector(state => state.subs.subscriptions);
  useEffect(() => {
    dispatch(listSubsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleUnsubscribe(id) {
    dispatch(cancelSubRequest(id));
  }

  return (
    <Background>
      <Header />
      <Container>
        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MeetupCard
              meetup={item}
              onPress={() => {
                handleUnsubscribe(item.Subscriptions[0].id);
              }}
            >
              Cancelar Inscrição
            </MeetupCard>
          )}
        />
      </Container>
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="local-offer" size={30} color={tintColor} />
);

Subscriptions.navigationOptions = {
  tabBarLabel: 'Subscriptions',
  tabBarIcon,
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
