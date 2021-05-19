import React from 'react';
import {View, Text, Button} from 'react-native';
import {Body} from 'native-base';
import {styles} from '../styles/styles';
import {Container} from 'native-base';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/FooterBar';
export default function Settings({navigation}) {
  return (
    <Container>
      <HeaderBar
        style={styles.navigation}
        title="Settings"
        navigation={navigation}
      />
      <Body>
        <Text>Settings</Text>
      </Body>
      <Footer style={styles.footer} navigation={navigation} />
    </Container>
  );
}
