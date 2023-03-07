import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicShop from './MusicShop';
import ShoppingCart from './ShoppingCart';
import Header from './Header';
import Login from './Login';
import FavoriteSongs from './FavoriteSongs';
import Profile from './Profile';

const Stack = createNativeStackNavigator();

export default function Content() {
  const { isLogged } = useSelector((state)  => (state && state.user && state.user.value ? state.user.value : false)) 

  return (
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
          {isLogged ? 
          <>
            <Stack.Screen 
              name='Music Shop' 
              component={MusicShop}
              options={({ navigation }) => ({ 
                headerTitle: () => <Header title='Music Shop' navigation={navigation} isLogged={isLogged} />,
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
            <Stack.Screen 
              name='Favorite Songs' 
              component={FavoriteSongs}
              options={{
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                }
              }}
            />
            <Stack.Screen 
              name='Profile' 
              component={Profile}
              options={{
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 24,
                }
              }}
            />
          </> :
          <Stack.Screen 
            name='Login' 
            component={Login}
            options={{headerShown: false}}
            /> }
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}
