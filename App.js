import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicShop from './components/MusicShop';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './store'
import Content from './components/Content';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
       <Content />
    </Provider>
  );
}
