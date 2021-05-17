import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import {Container} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import HeaderBar from '../components/HeaderBar';
export default function Feed({navigation}) {
  return (
    <Container>
      <HeaderBar title="Feed" navigation={navigation} />
    </Container>
  );
}
