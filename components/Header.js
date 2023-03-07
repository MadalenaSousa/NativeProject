import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { logout } from '../reducers/userslice';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation, isLogged }) {
    const dispatch = useDispatch();
    console.log(isLogged)

    return(
        <View style={styles.header}>
            <Text style={styles.pageTitle}>{title}</Text>
            <View style={styles.rightCorner}>
                <MaterialIcons.Button size={24} name="shopping-cart" color="white" backgroundColor='transparent' onPress={() => navigation.navigate('Shopping Cart')} />
                <MaterialIcons.Button size={24} name="person" color="white" backgroundColor='transparent' onPress={() => navigation.navigate('Profile')} />
                <MaterialIcons.Button size={24} name="favorite" color="white" backgroundColor='transparent' onPress={() => navigation.navigate('Favorite Songs')} />
                {isLogged ? 
                <MaterialIcons.Button size={24} name="logout" color="white" backgroundColor='transparent' onPress={() => dispatch(logout())} /> :
                <MaterialIcons.Button size={24} name="login" color="white" backgroundColor='transparent' onPress={() => dispatch(logout())} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '98%',
    },
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    },
    rightCorner: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });