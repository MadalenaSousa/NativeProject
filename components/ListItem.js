import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ListItem({ song }) {
    return(
        <View style={styles.container}>
            <View style={styles.songInfo}>
                <Text style={styles.title}>{song.trackName}</Text>
                <Text>{song.collectionName}</Text>
                <Text>{song.artistName}</Text>
            </View>
            <View style={styles.cartInfo}>
                <Text>{song.trackPrice} $</Text>
                <FontAwesome.Button size={24} name="shopping-cart" color="black" backgroundColor='transparent' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '85%',
      padding: 15,
      margin: 10,
      borderWidth: 1,
      borderColor: 'teal',
      borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    cartInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '30%',
    },
    songInfo: {
        maxWidth: '65%',
    }
  });