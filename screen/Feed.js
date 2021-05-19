import React from 'react';
import {View, FlatList} from 'react-native';
import {Body, Text} from 'native-base';
import {styles} from '../styles/styles';
import {Container} from 'native-base';
import HeaderBar from '../components/HeaderBar';
// import axios from 'axios';
// import {useState, useEffect} from 'react';
import Footer from '../components/FooterBar';
export default function Feed({navigation, route}) {
  return (
    <Container>
      <HeaderBar navigation={navigation} title="Feed" />
      <Body>
        <Text>Feed</Text>
      </Body>
      <Footer navigation={navigation} />
    </Container>
  );
}
