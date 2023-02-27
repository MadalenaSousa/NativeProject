import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicShop from './components/MusicShop';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'teal',
              width: '100%'
            },
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen 
            name='Music Shop' 
            component={MusicShop}
            options={({ navigation }) => ({ 
              headerTitle: () => <Header title='Music Shop' navigation={navigation} />,
            })}
          />
          <Stack.Screen 
            name='Shopping Cart' 
            component={ShoppingCart}
            options={{
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
              }
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
    </Provider>
  );
}
