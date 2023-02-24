import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Header({ title, navigation }) {
    return(
        <View style={styles.header}>
            <Text style={styles.pageTitle}>{title}</Text>
            <AntDesign.Button size={24} name="shoppingcart" color="white" backgroundColor='transparent' onPress={() => navigation.navigate('Shopping Cart')} />
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