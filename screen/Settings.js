import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../styles/styles';
import {Container} from 'native-base';
import HeaderBar from '../components/HeaderBar';
export default function Settings({navigation}) {
  return (
    <Container>
      <HeaderBar title="Settings" navigation={navigation} />
    </Container>
  );
}
