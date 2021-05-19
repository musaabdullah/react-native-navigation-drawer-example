import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Container, Body, Text} from 'native-base';
import FooterBar from '../components/HeaderBar';
import HeaderBar from '../components/FooterBar';
export default function Details() {
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
