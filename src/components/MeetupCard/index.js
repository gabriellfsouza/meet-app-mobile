import React from 'react';

import Button from '~/components/Button';
import meetupPhoto from '~/assets/meetup-de-react-native.jpg';

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

export default function MeetupCard() {
  return (
    <Container>
      <CardHeader source={meetupPhoto} />
      <CardContent>
        <Title>Meetup de React Native</Title>
        <Info>
          <InfoElement>
            <Icon name="event" size={15} />
            <Text> 24 de Junho, às 20h </Text>
          </InfoElement>
          <InfoElement>
            <Icon name="place" size={15} />
            <Text> Rua Guilherme Gembala, 260</Text>
          </InfoElement>
          <InfoElement>
            <Icon name="person" size={15} />
            <Text> Organizador: Gabriel Lima</Text>
          </InfoElement>
        </Info>

        <Button onPress={() => {}}>Cancelar Inscrição</Button>
      </CardContent>
    </Container>
  );
}
