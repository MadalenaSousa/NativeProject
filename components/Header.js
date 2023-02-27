import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {
    return(
        <View style={styles.header}>
            <Text style={styles.pageTitle}>{title}</Text>
            <View style={styles.rightCorner}>
                <MaterialIcons.Button size={24} name="shopping-cart" color="white" backgroundColor='transparent' onPress={() => navigation.navigate('Shopping Cart')} />
                <MaterialIcons.Button size={24} name="logout" color="white" backgroundColor='transparent' />
            </View>
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
    },
    rightCorner: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });