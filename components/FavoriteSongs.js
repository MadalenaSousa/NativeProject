import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

export default function FavoriteSongs() {
    const { favoriteSongs } = useSelector((state) => (state && state.song && state.song.value ? state.song.value : []))
    const { cartSongs } = useSelector((state) => (state && state.song && state.song.value ? state.song.value : []))

    return(
        <View style={styles.container}>
            <ScrollView>
                {favoriteSongs.length > 0 ?
                <View>
                    {favoriteSongs.map((song) => (
                        <ListItem 
                            key={song.trackId}
                            song={song}
                            isAdded={cartSongs.find(cartSong => cartSong.trackId === song.trackId) !== undefined}
                            isFaved={favoriteSongs.find(favoriteSong => favoriteSong.trackId === song.trackId) !== undefined}
                        />
                    ))}
                </View>
                : 
                <View style={styles.noItems} >
                    <Text >No songs have been added to your favorites yet.</Text>
                </View>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: '100%'
    },
    cartDetails: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10,
    },
    cartDetailsRow: {
        alignItems: 'center',
        margin: 10,
    },
    title: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'mediumaquamarine',
        padding: 10,
        margin: 10,
        width: '95%',
        alignItems: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold'
    },
    noItems: {
        alignItems: 'center',
        margin: 10,
    }
  });