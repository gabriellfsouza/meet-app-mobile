import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { format, addDays, subDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Background from '~/components/Background';
import MeetupCard from '~/components/MeetupCard';
import Header from '~/components/Header';
import { subscriptionRequest } from '~/store/modules/subs/actions';
import api from '~/services/api';

import {
  Container,
  List,
  DateNavigator,
  Icon,
  TextDate,
  DateButton,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);
  const [meetups, setMeetups] = useState([]);
  const [selDate, setSelDate] = useState(new Date());
  const [page, setPage] = useState(1);

  const dtString = useMemo(
    () => format(selDate, "dd' de 'MMMM", { locale: ptBR }),

    [selDate]
  );

  useEffect(() => {
    setPage(1);
    setIsFetching(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selDate]);

  useEffect(() => {
    async function getMeetups() {
      const dt = format(selDate, 'yyyy-MM-dd');
      const response = await api.get(`meetups?page=${page}&date=${dt}`);
      if (page !== 1) setMeetups([...meetups, ...response.data]);
      else setMeetups(response.data);
      setPage(page + 1);
      setIsFetching(false);
    }

    if (isFetching) getMeetups();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  function handleSubscribe(id) {
    dispatch(subscriptionRequest(id));
  }

  return (
    <Background>
      <Header />
      <Container>
        <DateNavigator>
          <DateButton
            onPress={() => {
              setSelDate(subDays(selDate, 1));
            }}
          >
            <Icon name="chevron-left" />
          </DateButton>
          <TextDate>{dtString}</TextDate>
          <DateButton
            onPress={() => {
              setSelDate(addDays(selDate, 1));
            }}
          >
            <Icon name="chevron-right" />
          </DateButton>
        </DateNavigator>
        <List
          data={meetups}
          onEndReached={() => {
            setIsFetching(true);
          }}
          onEndReachedThreshold={0.1}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MeetupCard
              onPress={() => {
                handleSubscribe(item.id);
              }}
              meetup={item}
            >
              Realizar inscrição
            </MeetupCard>
          )}
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
