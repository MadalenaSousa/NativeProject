import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {useDispatch } from 'react-redux';
import { addSong, removeSong } from '../reducers/songslice';

export default function ListItem({ song, isAdded }) {
    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            <View style={styles.songInfo}>
                <View>
                    <Image style={styles.trackImage} source={{ uri: song.artworkUrl60 }} />
                </View>
                <View>
                    <Text style={styles.title}>{song.trackName}</Text>
                    <Text>{song.collectionName}</Text>
                    <Text>{song.artistName}</Text>
                </View>
            </View>
            <View style={styles.cartInfo}>
                <Text>{song.trackPrice} $</Text>
                {isAdded === false ? 
                <MaterialIcons.Button size={24} name="add-shopping-cart" color="black" backgroundColor='transparent' onPress={() => dispatch(addSong(song))} />
                :
                <MaterialIcons.Button size={24} name="remove-shopping-cart" color="black" backgroundColor='transparent' onPress={() => dispatch(removeSong(song))} />}
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
        maxWidth: '70%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    trackImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    }
  });