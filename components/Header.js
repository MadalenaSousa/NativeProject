import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header({ title, navigation }) {
    return(
        <View style={styles.header}>
            <Text style={styles.pageTitle}>{title}</Text>
            <FontAwesome.Button size={24} name="shopping-cart" color="white" backgroundColor='transparent' onPress={() => navigation.navigate('Shopping Cart')} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      width: '95%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    }
  });