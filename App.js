import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfileScreen from './screen/Profile';
import FeedScreen from './screen/Feed';
import SettingsScreen from './screen/Settings';
import {Container, Body, Header, Content, Button, Text} from 'native-base';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContenteComponent {...props} />}>
      <Drawer.Screen name="Home" component={ProfileScreen} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContenteComponent = props => {
  return (
    <Container>
      <Header style={{height: 200}}>
        <Body style={{alignItems: 'center'}}>
          <Image
            resizeMode="stretch"
            style={{width: 200, height: 150, borderRadius: 100}}
            source={require('./IMG.jpg')}
          />
        </Body>
      </Header>
      <Content>
        <DrawerItemList {...props} />
      </Content>
    </Container>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
