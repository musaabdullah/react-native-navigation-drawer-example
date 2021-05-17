import React from 'react';
import {View, Image} from 'react-native';
import {Container} from 'native-base';
import {styles} from '../styles/styles';

import HeaderBar from '../components/HeaderBar';
export default function Profile({navigation}) {
  return (
    <Container>
      <HeaderBar title="Profile" navigation={navigation} />
    </Container>
  );
}
