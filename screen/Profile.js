import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';

import axios from 'axios';
import {useState, useEffect} from 'react';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/FooterBar';
export default function Profile({navigation}) {
  return (
    <Container>
      <HeaderBar title="Profile" navigation={navigation} />
      <Body>
        <Text>Hello Profile</Text>
      </Body>
      <Footer navigation={navigation} />
    </Container>
  );
}
