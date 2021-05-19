import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Platform} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Container} from 'native-base';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
import axios from 'axios';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
export default function Home({navigation}) {
  const [products, setProducts] = useState();
  const fetchData = async () => {
    try {
      const {data} = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Appbar.Header style={{backgroundColor: 'black'}}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Home" subtitle={'Home Screen'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <Container>
        <Avatar.Image size={50} source={require('./icons8_user_80px.png')} />
      </Container>
    </>
  );
}
