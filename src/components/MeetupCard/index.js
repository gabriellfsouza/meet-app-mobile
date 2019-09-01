import React from 'react';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';
import ptBR from 'date-fns/locale/pt-BR';
import Button from '~/components/Button';

import {
  Container,
  CardHeader,
  Info,
  InfoElement,
  Text,
  Title,
  Icon,
  CardContent,
} from './styles';

export default function MeetupCard({ meetup, onPress, children }) {
  return (
    <Container>
      <CardHeader source={{ uri: meetup.Banner.url }} />
      <CardContent>
        <Title>{meetup.title}</Title>
        <Info>
          <InfoElement>
            <Icon name="event" size={15} />
            <Text>
              {format(parseISO(meetup.date), " dd' de 'MMMM', às 'H:mm'h'", {
                locale: ptBR,
              })}
            </Text>
          </InfoElement>
          <InfoElement>
            <Icon name="place" size={15} />
            <Text> {meetup.location}</Text>
          </InfoElement>
          <InfoElement>
            <Icon name="person" size={15} />
            <Text> Organizador: {meetup.User.name}</Text>
          </InfoElement>
        </Info>

        <Button onPress={onPress}>{children}</Button>
      </CardContent>
    </Container>
  );
}

MeetupCard.propTypes = {
  meetup: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
    Banner: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
    location: PropTypes.string.isRequired,
    User: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

MeetupCard.defaultProps = {
  onPress: undefined,
  children: undefined,
};
