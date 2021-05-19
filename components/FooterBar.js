import React from 'react';
import {View, Text} from 'react-native';
import {Footer, Button, FooterTab} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
export default function FooterBar({navigation}) {
  return (
    <Footer>
      <FooterTab>
        <Button>
          <IconIonicons
            name="apps"
            size={30}
            color={'white'}
            onPress={() => navigation.navigate('Home')}
          />
        </Button>
        <Button onPress={() => navigation.navigate('Settings')}>
          <Icon name="camera" size={30} color={'white'} />
        </Button>
        <Button active>
          <IconIonicons
            active
            name="navigate"
            size={30}
            color={'white'}
            onPress={() => navigation.navigate('Feed')}
          />
        </Button>
        <Button>
          <IconIonicons name="person" size={30} color={'white'} />
        </Button>
      </FooterTab>
    </Footer>
  );
}
