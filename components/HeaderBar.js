import React from 'react';
import {
  Container,
  Text,
  Header,
  Left,
  Body,
  Title,
  Button,
  NativeIcon,
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
export default function HeaderBar({navigation, title}) {
  return (
    <Header>
      <Left>
        <Icon
          name="menu"
          size={30}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
}
